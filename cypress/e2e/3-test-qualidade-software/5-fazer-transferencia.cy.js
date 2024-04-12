describe('Navegação e Login no Site Testfire', () => {
  it('Realiza login e navegação no site Testfire', () => {
    cy.visit('https://demo.testfire.net/login.jsp');
    cy.get('#uid').type('admin');
    cy.get('#passw').click().type('admin');
    cy.get('tr:nth-child(3) input').click();
    cy.url().should('contain', 'https://demo.testfire.net/bank/main.jsp');
    
    // Clica no elemento contendo o texto "Transfer Funds"
    cy.contains('Transfer Funds').click();
    cy.get('#transferAmount').click().type('50');
    cy.get('#transfer').click();
  });
});

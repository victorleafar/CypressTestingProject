describe('Login', () => {
  it('Realiza login e navegação no site Testfire', () => {
    cy.visit('https://demo.testfire.net/login.jsp');
    cy.get('#uid').type('admin');
    cy.get('#passw').click().type('admin');
    cy.get('tr:nth-child(3) input').click();
    cy.url().should('contain', 'https://demo.testfire.net/bank/main.jsp');
    cy.get('#btnGetAccount').click();
    cy.url().should('contain', 'https://demo.testfire.net/bank/showAccount');
    cy.contains('Sign Off').click();
  });
});


  
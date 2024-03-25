describe('Teste de login', () => {
    it('Loga no site Demo Testfire', () => {
      cy.visit('https://demo.testfire.net/login.jsp');
      cy.get('#uid').type('admin');
      cy.get('#passw').type('admin');
      cy.get('tr:nth-child(3) input').click();
      cy.url().should('contain', 'https://demo.testfire.net/bank/main.jsp');
      cy.url().should('contain', 'https://demo.testfire.net/index.jsp');
    });
  });
  
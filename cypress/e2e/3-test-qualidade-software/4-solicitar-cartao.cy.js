describe('Navegação e solicitar cartao', () => {
    it('Realiza login e navegação no site Testfire', () => {
      cy.visit('https://demo.testfire.net/login.jsp');
      cy.get('#uid').type('admin');
      cy.get('#passw').click().type('admin');
      cy.get('tr:nth-child(3) input').click();
      cy.url().should('contain', 'https://demo.testfire.net/bank/main.jsp');
      
      // Clica no elemento contendo o texto "Here"
      cy.contains('Here').click();
      cy.get('tr:nth-child(1) > td > input:nth-child(1)').type('admin');
      cy.get('tr:nth-child(2) input').click();
      cy.url().should('contains', 'https://demo.testfire.net/bank/ccApply');
    });
  });
  
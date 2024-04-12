describe('Navegação e Login no Site Testfire', () => {
    it('Realiza login e navegação no site Testfire', () => {
      cy.visit('https://demo.testfire.net/login.jsp');
      cy.get('#uid').type('admin');
      cy.get('table:nth-child(1) tr:nth-child(2) > td:nth-child(2)').click();
      cy.get('#passw').click().type('admin');
      cy.get('tr:nth-child(3) input').click();
      cy.contains('PERSONAL').click();
  
      // Verifica se a página inicial foi carregada corretamente
      cy.url().should('contain', 'https://demo.testfire.net/index.jsp');
  
      // Clica no elemento contendo o texto "Feedback"
      cy.contains('Feedback').click();
  
      // Verifica se a página de feedback foi carregada corretamente
      cy.url().should('contain', 'https://demo.testfire.net/feedback.jsp');
  
      // Preenche os campos do formulário de feedback
      cy.get('tr:nth-child(3) input').type('softwaretest.qabr@gmail.com');
      cy.get('tr:nth-child(4) input').type('Help me please');
      cy.get('textarea').type('{backspace}');
      cy.get('textarea').type('Email para verificar o envio para pruebas');
      cy.contains('Submit').click();
  
      // Verifica se o feedback foi enviado corretamente
      cy.url().should('contain', 'https://demo.testfire.net/sendFeedback');
    });
  });
  
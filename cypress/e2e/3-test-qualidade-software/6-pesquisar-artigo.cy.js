describe('Navegação e Login no Site Testfire', () => {
    it('Realiza login e pesquisa por artigo', () => {
      cy.visit('https://demo.testfire.net/login.jsp');
      cy.get('#uid').type('admin');
      cy.get('#passw').click().type('admin');
      cy.get('tr:nth-child(3) > td:nth-child(2)').click();
      cy.get('tr:nth-child(3) input').click();
      cy.url().should('contain', 'https://demo.testfire.net/bank/main.jsp');
      
      // Clica no elemento contendo o texto "Search News Articles"
      cy.contains('Search News Articles').click();
      cy.get('#QueryXpath > #query').dblclick();
      cy.get('#QueryXpath > #query').click();
      cy.get('#QueryXpath > #query').type('{backspace}');
      cy.get('#QueryXpath > #query').type('article');
      cy.get('#Button1').click();;
      
      // Espera que a página de consulta XPath seja carregada
      cy.url().should('contain', 'https://demo.testfire.net/bank/queryxpath.jsp');
    });
  });
  
cy.visit('https://the-internet.herokuapp.com/');
cy.url().should('contains', 'https://the-internet.herokuapp.com/basic_auth');

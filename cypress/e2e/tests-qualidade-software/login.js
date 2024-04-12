describe('Login no Google e Navegação', () => {
  it('Faz login e navega em páginas relacionadas', () => {
    cy.visit('https://accounts.google.com/v3/signin/identifier?hl=pt-br&ifkv=ARZ0qKIi7bDjYeo4Z9SuBN20V_umQaFZjreGEBI6li41VbCGo7G3oDn2DL6tleFNjz1jwj7CgRW84w&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1157558081%3A1712928829670093&theme=mn&ddm=0');
    cy.get('#identifierId').type('softwaretest.qabr@gmail.com');
    cy.get('.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-RLmnJb').click();
    cy.get('#password .whsOnd').type('Teste@123');
    cy.get('.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-RLmnJb').click();
    cy.url().should('contain', 'https://accounts.google.com/signin/v2/passkeyenrollment');
    cy.url().should('contain', 'https://accounts.youtube.com/accounts/CheckConnection');
    cy.get('.ksBjEc > .VfPpkd-vQzf8d:nth-child(4)').click();
    cy.visit('https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=ARZ0qKJvoWhfJ7ZPDei09bXp6sNY2QcOCWH8nPZwigDFl_w5QOkqn0eKyDKA4-p-zKFKVAcHE5LcLw&theme=mn&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  });
});


  
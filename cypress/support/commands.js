Cypress.Commands.add('login', (username, password) => {

    cy.session([username, password], () => {
        cy.visit('/#/login')
  
        cy.get('.close-dialog', {timeout:2000}).should('be.visible')
        cy.get('.close-dialog').click()
    
        cy.get('#email').type(username)
        cy.get('#password').type(password)
    
        // Interceptando a requisição para adicionar um atraso
        cy.intercept('POST', '**/rest/user/login', (req) => {
          req.continue((res) => {
            // Introduz um delay artificial para a resposta
            return new Promise((resolve) => {
              setTimeout(() => resolve(res), 4000); 
            });
          });
        }).as('loginComDelay')
    
        cy.get('#loginButton').click()
    
        cy.wait('@loginComDelay')
        cy.get('.mat-grid-list').should('be.visible')
    })       
})
/// <reference types="cypress" />

import dadoslogin from "../support/dadoslogin";
describe('Utilização do cy.session', () => {
  beforeEach(() => {
    cy.login(dadoslogin.user, dadoslogin.password )

  })
  it('Teste 01', () => {
    cy.visit('/#/basket')
    cy.get('#price').should('be.visible').and('contain', 'Total Price: 0')
  });
  it('Teste 02', () => {
    cy.visit('/#/about')
    cy.get('.text-justify').should('be.visible')
  });
  it('Teste 03', () => {
    cy.visit('/#/chatbot')
    cy.get('h1').should('be.visible')
  });
});

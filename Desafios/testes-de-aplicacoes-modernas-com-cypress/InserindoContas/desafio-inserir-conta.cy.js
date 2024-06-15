/// <reference types="cypress" />

describe('Colocando conhecimento em pratica', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/');

        cy.get('[data-test="email"]').type('yuri@hotmail.com')
        cy.get('[data-test="passwd"]').type(2123)
        cy.get('.btn').click()
    })

    it('Inserindo Conta', () => {
        // Primeiro, clique no elemento do menu
        cy.xpath('//li/a[@data-test="menu-settings"]').click();

        // Em seguida, clico no link de contas após garantir que está visível
        cy.xpath('//li//div//a[@href="/contas"]').should('be.visible').click();

        cy.get('[data-test="nome"]').type('Conta Vet')
       
        cy.get('.btn').click()

        cy.get('.toast-success').should('contain', 'Conta inserida com sucesso!')
    })
})
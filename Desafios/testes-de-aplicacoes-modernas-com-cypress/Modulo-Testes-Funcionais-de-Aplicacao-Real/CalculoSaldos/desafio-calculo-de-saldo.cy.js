/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsConta'

describe('Colocando conhecimento em pratica', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/');

        //Comando pode ser visualizado no arquivo commands.js na pasta do projeto
        cy.funLogin('yuri12@hotmail.com', 2123, '.btn')
    })

    it('Calculo de Saldo', () => {

        cy.get(loc.MENU.MOVIMENTACAO).click()

        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Conta Faculdade')
        cy.get(loc.MOVIMENTACAO.VALOR).type(120000)
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('FICR')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta veterinário')
        cy.xpath(loc.MOVIMENTACAO.XP_STATUS_CONTA).click().should('have.attr', 'title', 'Conta Paga')
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Movimentação inserida com sucesso!')
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO('Conta veterinário')).should('contain', '155.000,00')
    });
})

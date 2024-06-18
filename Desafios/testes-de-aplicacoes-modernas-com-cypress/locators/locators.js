const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`
    },
    MOVIMENTACAO: {
       DESCRICAO: '[data-test=descricao]',
       VALOR: '[data-test=valor]',
       INTERESSADO: '[data-test=envolvido]',
       CONTA: '[data-test=conta]',
       BTN_SALVAR: '.btn-primary',
       XP_STATUS_CONTA: '//button[@data-test="status"]'

    },
    EXTRATO: {
        LINHAS: 'list-group > li',
        //Esse xpath checa o nome e o valor associado a ele
        XP_BUSCA_ELEMENTO: '//span[contains(., "Despesas")]/following-sibling::small[contains(., "35.000,00")]'
    },
    SALDO: {
        FN_XP_SALDO: nome => `//td[contains(., '${nome}')]/../td[2]`
    },

    MESSAGE: '.toast-message'
}


export default locators;
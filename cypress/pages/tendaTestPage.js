class tendaTestPage {

    //classe onde mapeamos nossos elementos e realizamos nossas ações
    btnCloseModal = ".ButtonClose > .svgIcon"
    acceptCookies = ".disclaimer-container > [data-cy='btn-']"
    btnlogin = "#userTopArea"
    inputEmail = "#login"
    inputSenha = "#password"
    btnContinuarLogin = "#userTopArea div:nth-of-type(3) > button"
    modalComprarPorDepartamento = ".bt-departaments-preview"
    btnAddItemTendaCarrinho = ".ButtonBuyComponent > [data-cy='btn-']"
    btnAddItemSellerCarrinho = ":nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy='btn-']"
    modalComprarPorDepartamentoReduzido = ".col > .MenuBarComponent > .grid-menu > .DepartamentMenuComponent"
    btnAddUnidadeItemCarrinho1 = "#item-list-01022024-0001 span:nth-of-type(2)"
    btnRemoveUnidadeItemCarrinho1 = "#item-list-01022024-0001 span:nth-of-type(1)"
    btnAddUnidadeItemCarrinho2 = "#item-list-000000000000179027-LA span:nth-of-type(2)"
    btnRemoveUnidadeItemCarrinho2 = "#item-list-000000000000179027-LA span:nth-of-type(1)"
    btnVerCarrinho = ".cartblock-bottom > [data-cy='btn-']"
    btnContinuarCompra = ".btn > .fas"
    escolherEntregaItem1 = ":nth-child(1) > .delivery-actions-container > .btn-delivery"
    escolherEntregaItem2 = ":nth-child(2) > .delivery-actions-container > .btn-delivery"
    selecionarDeliveryEntrega = ":nth-child(2) > .card-content > .card-information-component > .action > .fas"
    selecionarEndereco = ".action > .fas"
    selecionarDiaEntrega = "#\\32 024-12-18"
    selecionarHorarioEntrega = ".card-information-component"
    excluirEntregaProdutoSeller = ":nth-child(2) > .content-header-package-separation > p"
    btnContinuarExcluirProdutoSeller = ":nth-child(1) > .ModalDeleteSellerPackage > #modal-delete-seller-package > .modal-dialog > .modal-content > .DeleteSellerPackage > .content > .delete-seller-company-button-container > [data-cy='btn-'] > .svgIcon"
    SelecionarMetodoPagamentoBoleto = '#\\"nav-billet-tab\\"'
    btnPagar = ".btn-buy"
    btnCloseModalPagamentoConcluido = "#btFechar"
    SelecionarMetodoPagamentoCartao = '#\\"nav-tendaCard-tab\\"'
    inputNumeroCartao = '#number'
    dropdownMes = '#month > .react-select__control > .react-select__value-container'
    dropdownAno = '#year > .react-select__control > .react-select__value-container'
    inputNome = '#name'
    inputCpf = '#cpf'
    dropdownParcelas = '#installments > .react-select__control > .react-select__value-container'
    btnPagarComCartao = '.CreditCardComponent > [data-cy="btn-"]'
    selectParcelas = '#installments > div > div:first-of-type > div:first-of-type'
    btnAlterarData = '.direction-right > .fas'

    
    acessarSiteLogado() {
        cy.visit('https://marketplace-alpha.tendaatacado.com.br/')
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.acceptCookies).click()
        cy.get(this.btnlogin).click()
        cy.get(this.inputEmail).type("rafaelrafagoys@gmail.com")
        cy.get(this.inputSenha).type("Teste123!")
        cy.get(this.btnContinuarLogin).click()
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.wait(10000)
    }

    adicionarItensNoCarrinho() {
        cy.wait(3000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.wait(2000)
        cy.get(this.modalComprarPorDepartamento, { timeout: 10000 }).trigger('mouseover')
        cy.wait(1000)
        cy.contains('Bebidas').click({ force: true })
        cy.wait(4000)
        cy.get(this.btnAddItemTendaCarrinho).eq(0).click()
        cy.get(this.modalComprarPorDepartamentoReduzido, { timeout: 10000 }).trigger('mouseover')
        cy.wait(1000)
        cy.contains('Marketplace').trigger('mouseover')
        cy.contains('Produtos Seller').click({ force: true })
        cy.wait(3000)
        cy.get(this.btnAddItemSellerCarrinho).click()
        cy.wait(10000)
        cy.get('.BlockTittleCartComponent').should('include.text', '2 itens')
    }

    validarItensNoCarrinho(text) {
        cy.wait(2000)
        cy.get('.BlockTittleCartComponent').should('include.text', text)
    }

    adicionarUnidadesProdutosCarrinho() {
        cy.wait(2000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.btnAddUnidadeItemCarrinho1).click({ force: true })
        cy.wait(6000)
        cy.get('.final-price > b')
            .invoke('text')
            .then((text) => {
                const numericValue = text.match(/[\d,]+/)[0]
                expect(numericValue).to.eq('12,69')
            })
        cy.get(this.btnAddUnidadeItemCarrinho2, { timeout: 5000 }).click({ force: true })
        cy.wait(6000)
        cy.get('.final-price > b')
            .invoke('text')
            .then((text) => {
                const numericValue = text.match(/[\d,]+/)[0]
                expect(numericValue).to.eq('15,38')
            })
    }

    removerUnidadesProdutosCarrinho() {
        cy.wait(2000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.btnRemoveUnidadeItemCarrinho1).click({ force: true })
        cy.wait(6000)
        cy.get('.final-price > b')
            .invoke('text')
            .then((text) => {
                const numericValue = text.match(/[\d,]+/)[0] // Extrai "39,89"
                expect(numericValue).to.eq('10,38')
            })
        cy.get(this.btnRemoveUnidadeItemCarrinho2, { timeout: 5000 }).click({ force: true })
        cy.wait(6000)
        cy.get('.final-price > b')
            .invoke('text')
            .then((text) => {
                const numericValue = text.match(/[\d,]+/)[0]
                expect(numericValue).to.eq('7,69')
            })
    }

    validarMsgCarrinhoVazio() {
        cy.get('.BlockTittleCartComponent').should('include.text', 'Seu carrinho ainda está vazio.')
    }

    finalizarCompraBoleto() {
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.wait(3000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.modalComprarPorDepartamento, { timeout: 10000 }).trigger('mouseover')
        cy.wait(1000)
        cy.contains('Bebidas').click({ force: true });
        cy.get(this.btnAddItemTendaCarrinho).eq(0).click()
        cy.wait(5000)
        cy.get(this.btnVerCarrinho).click()
        cy.get(this.btnContinuarCompra, { timeout: 20000 }).click()
        cy.wait(3000)
        cy.clickIfExists(this.escolherEntregaItem1);
        cy.wait(3000)
        cy.clickIfExists(this.selecionarDeliveryEntrega);
        cy.wait(3000)
        cy.clickIfExists(this.selecionarEndereco);
        cy.wait(7000)
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.selecionarDiaEntrega);
        cy.wait(3000)
        cy.clickIfExists(this.selecionarHorarioEntrega);
        cy.wait(3000)
        cy.get(this.excluirEntregaProdutoSeller).click()
        cy.wait(3000)
        cy.get(this.btnContinuarExcluirProdutoSeller, { timeout: 10000 }).click({ waitForAnimations: false }, { force: true })
        cy.wait(4000)
        cy.get(this.btnContinuarCompra, { timeout: 5000 }).click()
        cy.get(this.SelecionarMetodoPagamentoBoleto, { timeout: 20000 }).click()
        cy.get(this.btnPagar).click()
        cy.get(this.btnCloseModalPagamentoConcluido, { timeout: 50000 }).click()
    }

    finalizarCompraCartao() {
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.wait(3000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.modalComprarPorDepartamento, { timeout: 10000 }).trigger('mouseover')
        cy.wait(1000)
        cy.contains('Bebidas').click({ force: true });
        cy.get(this.btnAddItemTendaCarrinho).eq(0).click()
        cy.wait(5000)
        cy.get(this.btnVerCarrinho).click()
        cy.get(this.btnContinuarCompra, { timeout: 20000 }).click()
        cy.wait(2000)
        cy.clickIfExists(this.escolherEntregaItem1);
        cy.wait(4000)
        cy.clickIfExists(this.selecionarDeliveryEntrega);
        cy.wait(4000)
        cy.clickIfExists(this.selecionarEndereco);
        cy.wait(7000)
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.btnAlterarData);
        cy.clickIfExists(this.selecionarDiaEntrega);
        cy.wait(3000)
        cy.clickIfExists(this.selecionarHorarioEntrega);
        cy.get(this.excluirEntregaProdutoSeller).click()
        cy.wait(3000)
        cy.get(this.btnContinuarExcluirProdutoSeller, { timeout: 10000 }).click({ waitForAnimations: false }, { force: true })
        cy.wait(4000)
        cy.get(this.btnContinuarCompra).click()
        cy.wait(4000)
        cy.get(this.SelecionarMetodoPagamentoCartao, { timeout: 20000 }).click()
        cy.get(this.inputNumeroCartao).type('4000000000000010')
        cy.get(this.dropdownMes).click()
        cy.contains('03').click({ force: true })
        cy.get(this.dropdownAno).click()
        cy.contains('2030').click({ force: true })
        cy.get(this.inputNome).type('Teste Automacao Rafael')
        cy.get(this.inputCpf).type('86752750050')
        cy.get(this.dropdownParcelas).click()
        cy.get('#react-select-4-option-0').click()
        cy.get(this.btnPagarComCartao).click()
        cy.get(this.btnCloseModalPagamentoConcluido, { timeout: 100000 }).click()
    }

    validarMsgSucessoCompra(msgSucessoCompra) {
        cy.get('.msgFinal').should('include.text', msgSucessoCompra)
    }

    removoProdutosCarrinho() {
        cy.wait(2000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.btnRemoveUnidadeItemCarrinho1).click({ force: true })
        cy.wait(4000)
        cy.get(this.btnRemoveUnidadeItemCarrinho2).click({ force: true })
        cy.wait(4000)
        cy.get(this.btnRemoveUnidadeItemCarrinho2, { timeout: 5000 }).click({ force: true })
    }

    validarMsgCarrinhoVazio() {
        cy.wait(5000)
        cy.get('.empty-cart').should('include.text', 'Seu carrinho ainda está vazio.')
    }
}
export default new tendaTestPage();
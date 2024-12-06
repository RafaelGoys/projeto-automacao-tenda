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
    btnAddUnidadeItemCarrinho2 = "#item-list-000000000000097527-LT span:nth-of-type(2)"
    btnRemoveUnidadeItemCarrinho2 = "#item-list-000000000000097527-LT span:nth-of-type(1)"


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

        /*passo para acessar site
        obs: necessário configurar um servidor http local
        no caso, foi executado o comando 'npm install -g serve' no terminal e depois o comando 'serve -l 8080 .' na raiz do projeto.*/
    }

    adicionarItensNoCarrinho() {
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.modalComprarPorDepartamento, { timeout: 10000 }).trigger('mouseover')
        cy.wait(1000)
        cy.contains('Bebidas').click({ force: true });
        cy.get(this.btnAddItemTendaCarrinho).click({ multiple: true })

        cy.get(this.modalComprarPorDepartamentoReduzido, { timeout: 10000 }).trigger('mouseover')
        cy.wait(1000)
        cy.contains('Marketplace').trigger('mouseover')
        cy.contains('Produtos Seller').click({ force: true });

        cy.get(this.btnAddItemSellerCarrinho).click()
        cy.get('.BlockTittleCartComponent').should('include.text', '2 itens')
        //passo para preencher dados da Calculadora e validar o orcamento total retornado
    }

    validarItensNoCarrinho(text) {
        cy.get('.BlockTittleCartComponent').should('include.text', text)
    }

    adicionarUnidadesProdutosCarrinho() {
        cy.wait(2000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.btnAddUnidadeItemCarrinho1).should('be.visible').click()
        cy.get(this.btnAddUnidadeItemCarrinho2).should('be.visible').click()
        cy.wait(3000)
        cy.get('.final-price > b').should('include.text', 'R$ 69,78')
        //valor alterado
    }

    removerUnidadesProdutosCarrinho() {
        cy.wait(5000)
        cy.clicarSeVisivel(this.btnCloseModal)
        cy.get(this.btnRemoveUnidadeItemCarrinho1).click({multiple: true})
        cy.get(this.btnRemoveUnidadeItemCarrinho2, { timeout: 5000 }).click({multiple: true})
        cy.get('.final-price > b').should('include.text', 'R$ 34,89')
        //valor alterado
    }

    validarMsgCarrinhoVazio() {
        cy.get('.BlockTittleCartComponent').should('include.text', 'Seu carrinho ainda está vazio.')
    }
}
export default new tendaTestPage();
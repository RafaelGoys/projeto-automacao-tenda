import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import tendaTestPage from '../../pages/tendaTestPage'
//classe onde chamamos nossos metodos do page e conectamos com os cenarios
Given('que esteja no website tenda logado', () => {
  tendaTestPage.acessarSiteLogado()
});

When('adicionar produtos no carrinho', () => {
  tendaTestPage.adicionarItensNoCarrinho()
});

Then('valido os produtos no carrinho {string}', (text) => {
  tendaTestPage.validarItensNoCarrinho(text)
});

When('adicionar unidades dos produtos do carrinho', () => {
  tendaTestPage.adicionarUnidadesProdutosCarrinho()
});

When('remover unidades dos produtos do carrinho', () => {
  tendaTestPage.removerUnidadesProdutosCarrinho()
});

Then('valido que o carrinho esta vazio', () => {
  tendaTestPage.validarMsgCarrinhoVazio()
});

When('finalizar compra via boleto', () => {
  tendaTestPage.finalizarCompraBoleto()
});

When('finalizar compra via cartao', () => {
  tendaTestPage.finalizarCompraCartao()
});

Then('valido a mensagem de sucesso {string}', (msgSucessoCompra) => {
  tendaTestPage.validarMsgSucessoCompra(msgSucessoCompra)
});

When('removo todos produtos do carrinho', () => {
  tendaTestPage.removoProdutosCarrinho()
});
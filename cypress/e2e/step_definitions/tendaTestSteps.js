import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import tendaTestPage from '../../pages/tendaTestPage'

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

When('remover todas unidades dos produtos do carrinho', () => {
  tendaTestPage.adicionarUnidadesProdutosCarrinho()
});

Then('valido que o carrinho esta vazio', () => {
  tendaTestPage.validarMsgCarrinhoVazio()
});
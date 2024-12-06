Feature: Testes Tenda WEB

  Background: Acessar URL Tenda
    Given que esteja no website tenda logado

  Scenario: Adicionar dois produtos ao carrinho
    When adicionar produtos no carrinho
    Then valido os produtos no carrinho '<text>'

    Examples:
      | text    |
      | 2 itens |

  Scenario: Adicionar e remover unidades dos produtos no carrinho
    When adicionar unidades dos produtos do carrinho
    And remover todas unidades dos produtos do carrinho
    Then valido que o carrinho esta vazio

    Examples:
      | text    |
      | 2 itens |

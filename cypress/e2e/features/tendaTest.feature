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
    And remover unidades dos produtos do carrinho
    Then valido os produtos no carrinho '<text>'

    Examples:
      | text    |
      | 2 itens |

  Scenario: Finalizacao dos produtos no carrinho via cartao
    When finalizar compra via cartao
    Then valido a mensagem de sucesso '<msgSucesso>'

    Examples:
      | msgSucesso                              |
      | Seu pedido foi realizado com sucesso :) |

  Scenario: Finalizacao dos produtos no carrinho via boleto
    When finalizar compra via boleto
    Then valido a mensagem de sucesso '<msgSucesso>'

    Examples:
      | msgSucesso                              |
      | Seu pedido foi realizado com sucesso :) |

  Scenario: Limpar massa de testes
    When removo todos produtos do carrinho
    And valido que o carrinho esta vazio
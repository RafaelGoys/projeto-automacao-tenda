"# projeto-automacao-tenda" 
1 - instalar dependencias do projeto, executar os seguintes comandos pelo terminal:
npm install cypress --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @cucumber/cucumber --save-dev
npm install webpack --save-dev
caso falte alguma dependencia, executar o comando npm install

2 - execucao dos testes:
2.1 - no terminal, execute o comando npx cypress open
2.2 - na interface do cypress = E2E Testing -> Chrome -> tendaTest.feature
2.3 - AO INICIAR A EXECUCAO DO TESTE, MANTER O INDICADOR DO MOUSE DENTRO DO SITE DO TENDA PELA INTERFACE DO CYPRESS (isso acontece por conta do comportamento do site mudar quando o indicador do mouse nao esta dentro dele!!!)
2.4 - quando o teste iniciar, nao ficar mexendo o indicador do mouse, pois pode aparecer algum elemento novo no site e acabar quebrando o fluxo dos testes
2.5 - antes de executar os testes, validar que nao possui nenhum produto no carrinho, pois isso quebrara as validacoes dos testes (conta de acesso esta no mapeamento no page, no metodo 'acessarSiteLogado')

3 - plugin(opcional):
para melhor entendimento das features, caso seja possivel, instalar o Cucumber

4 - informacoes uteis:
4.1 - todos sabemos que o comando cy.wait() não é um dos melhores para se usar para esperar um elemento ser exibido, porem, esse comando esta implementado em alguns metodos por conta que o site fica muito instavel e estava quebrando muitos testes sem esse comando.
(pode ser uma melhora no futuro, criarmos metodos diferentes para esperar um elemento)
4.2 - nesse framework e usado um modelo com Cucumber para ficar mais facil de entender o que esta sendo feito na execucao dos cenarios
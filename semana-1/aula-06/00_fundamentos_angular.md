# Fundamentos do Angular

Angular é um framework Javascript de código aberto mantido pelo Google utilizado para construir aplicações SPAs *(Single Page Applications)* de alta perfomance.

Arquitetada no modelo MVC *(Model/ View/ Controller)*, possui seu core desenvolvido em Javascript e possui por default integração com Typescript.

É também um framework orientado a componentes assim como [***Vue***](https://vuejs.org/) e [***React***](https://pt-br.reactjs.org/), no qual estes componentes são responsáveis desde estruturas de layouts (componentes puros), como também componentes lógicos, onde há uma maior complexidade em sua integração: páginas, diretivas, rotas, etc.

## Porque utilizar Angular?

Apesar de estar sendo muito menos utilizado na comunidade do que em anos atrás, muito devido a ascensão do React, o Angular é uma excelente opção para quem tem o desejo de construir uma aplicação single-page robusta, sem a necessidade de configuração de bibliotecas terceiras para seu funcionamento.

Por se tratar de um framework e não uma biblioteca, que é o caso do React, o Angular tem suas vantagens por fornecer nativamente recursos tais como: rotas, formulários reativos, animações, two way data binding, controle de estado global através de serviços singleton (padrão de única instância de uma classe em um ciclo de vida), entre outros. Isto garante ao desenvolvedor um setup fácil e rápido, além de garantir segurança em relação a estas bibliotecas, devido a sua injeção nativa.

Sem contar sua documentação que é excelente e bem definida, sendo atualizada sempre durante suas releases.

## 1. Configuração

Para iniciar o desenvolvimento de SPA's com o angular, é necessário pelo menos três ferramentas:

- [NodeJS](https://nodejs.org/en/)
- **NPM** | [YARN](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Angular CLI](https://angular.io/cli)

### Angular CLI

Ferramenta de linha de comando que permite a criação de novos SPA's, componentes, módulos, etc.
Voltado ao angular, é extremamente importante pois facilita o desenvolvimento de aplicações angular.

## 2. Criação do primeiro projeto

Para criar um projeto angular e começar a desenvolver aplicações, podemos utilizar o seguinte
comando através do angular CLI:

```bash
ng new <nome-da-aplicação>
```

Podemos aplicar algumas configurações básicas como adicionar rotas e definir se usaremos ou não
algum dos mais famosos pre-processadores CSS.

> *Estilos possíveis: css|scss|sass|less|styl*

```bash
ng new <nome-da-aplicacao> --routing --style="SCSS"
```

Para iniciar o projeto em um servidor local, utilizamos o comando:

```bash
ng serve
```

## 3. Módulos

Um módulo pode ser entendido como um bloco de código que define um domínio dentro da aplicação,
a exemplo: Em uma aplicação voltada a saúde, podemos ter, pacientes, médicos, convênios. E para cada
um deles podemos criar módulos para melhorar a organização do nosso código.
Os módulos também são conjuntos de componentes e diretívas.

### Metadados do módulo

Os módulos possuem um decorator chamado @NgModule, que permite relizar algumas configurações
essenciais ao módulo:

- **Declarations**: Permite informar os componentes vinculados aquele módulo
- **Imports**: Permite a importação outros módulos
- **Exports**: Informa quais componentes são exportados para serem usados por outros módulos durante
  importação
- **Providers**: Permite declarar serviços a serem usados dentro do escopo do módulo
- **Bootstrap**: Está presente apenas no app-module e tem o papel de definir qual o componente que inicia
  a aplicação

```typescript
// modulo app
@NgModule({
  declarations: [AppComponent],
  imports: [],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
```

## 4. Componentes

Um componente é uma classe em uma aplicação angular, que pode definir uma página da sua aplicação,
ou algum item menor como um componente de input personalizado, uma lista, botão, etc.

```bash
ng generate component <nome-do-componente>
```

Caso já exista uma página de mesmo nome do componente, podemos criar o componente dentro dessa pasta
usando a flag `--flat`.

> *a flag --flat pode ser utilizada também na criação de outras estruturas, caso já exista uma pasta.*

```bash
ng generate component <nome-do-componente> --flat
```

### Metadados do component

Os componentes possuem um decorator de classe chamado @Component, ele permite realizar
algumas configurações no módulo como:

- **selector**: Definir o nome do componente como elemento html
- **templateUrl**: permite conectar o component.ts com a pagina html
- **styleUrls**: Permite conectar o component.ts com a página de estilo
- **template**: Permite carregar html diretamente no component.ts

```typescript
// componente app
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
```

---

## Docs

- <https://angular.io>
- <https://angular.io/cli>
- <https://www.devmedia.com.br/angular-cli-como-criar-e-executar-um-projeto-angular/38246>

---

## Desafio

Crie um relógio ou uma contagem regressiva com Angular.

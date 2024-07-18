# Prova de Conceito (PoC) API para Insights Financeiros no Agronegócio

## Visão Geral

Esta Prova de Conceito (PoC) Agro-ia-api foi desenvolvida usando NestJS e integra-se com três modelos de IA diferentes: OpenAI, Gemini e Claude. O objetivo da API é receber prompts predefinidos e oferecer insights financeiros para o agronegócio, com foco em safras. A API também inclui mecanismos de validação de dados e está documentada com Swagger para facilitar o uso e os testes.

![image](https://github.com/user-attachments/assets/206425b6-3ea2-4bb7-8c92-f1d3d5cecb35)


## Índice

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Primeiros Passos](#primeiros-passos)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Executando a Aplicação](#executando-a-aplicação)
- [Endpoints da API](#endpoints-da-api)
- [Integrações de IA](#integrações-de-ia)
- [Validação de Dados](#validação-de-dados)
- [Documentação Swagger](#documentação-swagger)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Recursos

- Integração com os modelos de IA OpenAI, Gemini e Claude
- Recebe prompts predefinidos para fornecer insights financeiros para o agronegócio
- Validação de dados para entradas e saídas
- Documentação abrangente da API com Swagger

## Primeiros Passos

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- Node.js (>= 14.x)
- npm (>= 6.x)
- NestJS CLI (opcional, mas recomendado)

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seuusuario/agro-ia-api.git
    cd agro-ia-api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

### Executando a Aplicação

1. Inicie a aplicação NestJS:

    ```bash
    npm run start
    ```

2. A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### POST /questions/gpt

**Descrição**: Recebe um prompt predefinido e retorna insights financeiros para o agronegócio.

**Corpo da Requisição**:

```json
{
  "prompt": "string"
}
```


### POST /questions/gemini

**Descrição**: Recebe um prompt predefinido e retorna insights financeiros para o agronegócio.

**Corpo da Requisição**:

```json
{
  "prompt": "string"
}
```

### POST /questions/claude

**Descrição**: Recebe um prompt predefinido e retorna insights financeiros para o agronegócio.

**Corpo da Requisição**:

```json
{
  "prompt": "string"
}
```

## Integrações de IA
### A API integra-se com os seguintes modelos de IA:

- OpenAI: Para processamento de linguagem natural e geração de insights.
- Gemini: Para análise avançada de dados e previsões.
- Claude: Para insights e recomendações adicionais baseados em IA.
- Cada modelo de IA é utilizado para aumentar a precisão e a abrangência dos insights financeiros fornecidos.

## Validação de Dados
### A validação de dados é implementada para garantir que todas as entradas e saídas atendam aos padrões exigidos. Isso inclui:

## Documentação Swagger
### A API está documentada com Swagger para facilitar os testes e a integração. Para acessar a UI do Swagger:

- Certifique-se de que a aplicação está em execução.
- Abra seu navegador e navegue até http://localhost:3000/api.
  
## Contribuindo
### Contribuições são bem-vindas! Siga estes passos para contribuir:

- Faça um fork do repositório.
- Crie uma nova branch (git checkout -b feature/sua-funcionalidade).
- Faça suas alterações.
- Faça o commit das suas alterações (git commit -m 'Adiciona nova funcionalidade').
- Faça o push para a branch (git push origin feature/sua-funcionalidade).
- Abra um pull request.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

Sinta-se à vontade para modificar e aprimorar esta PoC conforme necessário para seu caso de uso específico. Feliz codificação!

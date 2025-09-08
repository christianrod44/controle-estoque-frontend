# Controle de Estoque - Desafio Backoffice

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-673AB7?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📜 Descrição do Projeto

Este é um projeto front-end desenvolvido como solução para um desafio técnico de backoffice. A aplicação consiste em um sistema de controle de estoque para materiais de construção, permitindo a gestão completa de itens através de operações de CRUD (Criar, Ler, Atualizar e Excluir).

O sistema foi construído utilizando as versões mais recentes do Angular (19+) e Angular Material, com foco em componentes `standalone`, boas práticas de arquitetura e uma experiência de usuário limpa e funcional, adequada para um ambiente administrativo.

## ✨ Funcionalidades Implementadas

- **Autenticação de Usuário:** Integração com o sistema de login do Google para garantir o acesso seguro à plataforma.
- **Rotas Protegidas:** Utilização de Guardas de Rota (`CanActivate`) para proteger as áreas administrativas, redirecionando usuários não autenticados para a tela de login.
- **CRUD Completo:**
    - **Listagem (Read):** Visualização de todos os materiais em estoque em uma tabela organizada.
    - **Criação (Create):** Formulário dedicado para o cadastro de novos materiais.
    - **Edição (Update):** O mesmo formulário de criação é utilizado para a edição, carregando os dados do item selecionado.
    - **Exclusão (Delete):** Funcionalidade de exclusão com um diálogo de confirmação para previnir ações acidentais.
- **Notificações (Toasts/Snackbars):** Feedback visual para o usuário após cada operação (salvo com sucesso, excluído com sucesso, etc.).
- **Backend Simulado:** Utilização do `json-server` para simular uma API RESTful, permitindo que o front-end opere de forma completa e independente.
- **Layout Responsivo:** O layout foi pensado para se adaptar a diferentes tamanhos de tela, de desktops a dispositivos móveis.

## 📸 Screenshots

*(Dica: Tire prints da sua tela de login e da home com a tabela e substitua os links abaixo. Você pode arrastar as imagens para a área de edição de um arquivo no GitHub para gerar o link)*

| Tela de Login | Tela Principal (Home) |
| :---: | :---: |
| ![Tela de Login](URL_DA_SUA_IMAGEM_DE_LOGIN_AQUI) | ![Tela Principal](URL_DA_SUA_IMAGEM_DA_HOME_AQUI) |

## 🛠️ Tecnologias Utilizadas

- **Framework Principal:** Angular 19
- **UI Kit:** Angular Material 19
- **Linguagem:** TypeScript
- **Programação Reativa:** RxJS
- **Autenticação:** `@abacritt/angularx-social-login`
- **Backend Simulado:** `json-server`
- **Estilização:** SCSS
- **Testes:** (Estrutura pronta para) Karma e Jasmine

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [Angular CLI](https://angular.io/cli) (versão 19 ou superior)

### 1. Clonar o Repositório

```bash
git clone https://URL_DO_SEU_REPOSITORIO_AQUI.git
cd nome-da-pasta-do-projeto
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Configurar a Chave de API do Google

Para que a autenticação funcione, você precisa criar sua própria chave de API na Google Cloud Console.

1.  Siga os passos em [Google Cloud Console](https://console.cloud.google.com/apis/credentials) para criar um **ID do cliente OAuth 2.0** do tipo "Aplicativo da Web".
2.  Na seção "Origens JavaScript autorizadas", adicione:
    - `http://localhost:4200`
    - `http://127.0.0.1:4200`
3.  Copie o "ID do cliente" gerado.
4.  Abra o arquivo `src/app/app.config.ts` e cole o seu ID no local indicado:

    ```typescript
    // ...
    provider: new GoogleLoginProvider(
      'COLE_SEU_ID_DO_CLIENTE_AQUI',
      { oneTapEnabled: false }
    ),
    // ...
    ```

### 4. Rodar a Aplicação

É necessário ter **dois terminais** abertos na raiz do projeto.

**No Terminal 1 (Backend):**
```bash
npm run api
```
*Isso iniciará o `json-server` em `http://localhost:3000`.*

**No Terminal 2 (Frontend):**
```bash
ng serve
```
*Isso iniciará a aplicação Angular em `http://localhost:4200`.*

Abra seu navegador e acesse `http://localhost:4200`.

## 📂 Estrutura do Projeto

O projeto foi organizado seguindo as melhores práticas de arquitetura do Angular, separando as responsabilidades em módulos de funcionalidade.

```
src/
└── app/
├── auth/                  // Componentes relacionados à autenticação
│   └── login/
├── core/                  // Guarda de rotas, serviços e modelos de dados
│   ├── components/
│   ├── guards/
│   ├── models/
│   └── services/
└── features/              // Funcionalidades de negócio da aplicação
├── home/
└── materials/
```

---

Feito por **Christian Souza**.
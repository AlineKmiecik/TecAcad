# TecAcad
Projeto da equipe 6 - Dev Web 2 - Professor Diogo Deconto

Na pasta client, execute:
- npm install bootstrap@latest --save
- npm install jquery@latest --save
- ng add @ng-bootstrap/ng-bootstrap
- npm install angular-alert-module --save
- npm install angular-alert-module

Para iniciar a base de dados, é necessário criar um usuário do tipo STAFF. Com ele você poderá realizar todos os outros procedimentos através da tela do sistema.
Para isso, siga o seguinte:

- Suba o Node;

- Apague todos os documentos da base;

- Execute a requisição: (você pode mudar os valores dos atributos, sem problemas)

  POST http://localhost:1234/cadastro/usuario
  Content-Type: application/json

  {
      "firstname": "Macaulay",
      "lastname": "Culkin",
      "document": "463.843.440-17",
      "type": "Staff",
      "username": "macaulay.culkin",
      "password": "homeAlone",
      "status": "Ativo",
      "token": ""
  }
  
  - Agora, você pode entrar no sistema usando o login criado acima. Em tela, preencha os campos de login assim:
    Usuário: macaulay.culkin
    Senha: homeAlone
    
  - Uma vez logado, você é capaz de criar usuários dos tipos PROFESSOR e ALUNO.
  
  - Depois de criados os usuários com os perfis de PROFESSOR e ALUNO, você pode logar com cada um deles para visualizar as opções disponíveis.

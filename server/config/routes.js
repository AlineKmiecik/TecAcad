const express = require('express');
const router = express.Router();
const AtividadeController = require('../controllers/AtividadeController');
const TreinoController = require('../controllers/TreinoController.js');
const MensalidadeController = require('../controllers/MensalidadeController.js');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');

// Usuarios
router.get("/usuario/listar", UserController.get);
router.get("/usuario/listar/:type", UserController.getByType);
router.get("/usuario/listar//:id", UserController.getById);
router.post("/cadastro/usuario", UserController.store);
router.get("/cadastro/usuario/apagar/:document", UserController.delete);

//Autenticacao
router.post("/users/authenticate/", LoginController.authenticate);

//----------------------------ROTAS ATIVIDADES ------------------------
//router.post("/cadastros/atividade", AtividadeController.store);
router.get("/listar/atividade", AtividadeController.get);

//----------------------------ROTAS TREINO ------------------------
router.post("/cadastro/treino", TreinoController.store);
router.get("/listar/treino", TreinoController.get);

//----------------------------ROTAS MENSALIDADE ------------------------
router.post("/cadastro/mensalidade", MensalidadeController.store);
router.get("/listar/mensalidade", MensalidadeController.get);

//----------------------------ROTAS ALUNO ------------------------
router.post("/Zlist/student", MensalidadeController.store);
router.get("/Zlist/student/:id", AtividadeController.getById);

//http://localhost:1234/atividade/listar 

//Alterar – http://localhost:1234/atividade/alterar 
router.get("/atividade/alterar", AtividadeController.Alter);

//http://localhost:1234/atividade/remover/id
router.get("/atividade/remover/:ID", AtividadeController.delete);



//----------------------------ROTAS PROFESSOR ------------------------
//http://localhost:1234/professor/cadastrar
//router.post("/professor/cadastrar",ProfessorController.store);

//http://localhost:1234/professor/buscar/crm
//router.get("/professor/buscar/:Cpf", ProfessorController.getByCpf);

//http://localhost:1234/professor/listar 
//router.get("/professor/listar", ProfessorController.get);

//Alterar – http://localhost:1234/professor/alterar 
//router.get("/professor/alterar", ProfessorController.Alter);

//http://localhost:1234/professor/remover/crm
//router.get("/professor/remover/:Cpf", ProfessorController.delete);




//http://localhost:1234/treino/buscar/id
router.get("/treino/buscar/:ID", TreinoController.getById);

//http://localhost:1234/treino/cadastrar
//http://localhost:1234/treino/listar 

//Alterar – http://localhost:1234/treino/alterar 
router.get("/treino/alterar", TreinoController.Alter);

//http://localhost:1234/treino/remover/id
router.get("/treino/remover/:ID", TreinoController.delete);

module.exports = router;


//----------------------------ROTAS ALUNO ------------------------
//http://localhost:1234/aluno/cadastrar
//router.post("/aluno/cadastrar",AlunoController.store);

//http://localhost:1234/aluno/buscar/crm
//router.get("/aluno/buscar/:Cpf", AlunoController.getByCpf);

//http://localhost:1234/aluno/listar 
//router.get("/aluno/listar", AlunoController.get);

//Alterar – http://localhost:1234/aluno/alterar 
//router.post("/aluno/alterar", AlunoController.Alter);

//http://localhost:1234/aluno/remover/crm
//router.get("/aluno/remover/:Cpf", AlunoController.delete);




//http://localhost:1234/mensalidade/buscar/id
router.get("/mensalidade/buscar/:ID", MensalidadeController.getById);

//http://localhost:1234/mensalidade/listar 


//Alterar – http://localhost:1234/mensalidade/alterar 
router.get("/mensalidade/alterar", MensalidadeController.Alter);

//http://localhost:1234/mensalidade/remover/id
router.get("/mensalidade/remover/:ID", MensalidadeController.delete);
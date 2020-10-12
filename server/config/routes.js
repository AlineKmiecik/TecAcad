const express = require('express');
const router = express.Router();
const AtividadeController = require('../controllers/AtividadeController.js');
//const ProfessorController = require('../controllers/ProfessorController.js');
const TreinoController = require('../controllers/TreinoController.js');
//const AlunoController = require('../controllers/_AlunoController.js');
const MensalidadeController = require('../controllers/MensalidadeController.js');
const UserController = require('../controllers/UserController');

// DGorges
router.post("/cadastros/usuario", UserController.store);
router.get("/cadastros/usuario/listar", UserController.get);
router.get("/cadastros/usuario/listar/:type", UserController.getByType);
router.get("/cadastros/usuario/:document", UserController.delete);

//----------------------------ROTAS ATIVIDADES ------------------------
//http://localhost:1234/atividade/cadastrar
router.post("/atividade/cadastrar", AtividadeController.store);

//http://localhost:1234/atividade/buscar/id
router.get("/atividade/buscar/:ID", AtividadeController.getById);

//http://localhost:1234/atividade/listar 
router.get("/atividade/listar", AtividadeController.get);

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


//----------------------------ROTAS TREINO ------------------------
//http://localhost:1234/treino/cadastrar
router.post("/treino/cadastrar", TreinoController.store);

//http://localhost:1234/treino/buscar/id
router.get("/treino/buscar/:ID", TreinoController.getById);

//http://localhost:1234/treino/listar 
router.get("/treino/listar", TreinoController.get);

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


//----------------------------ROTAS MENSALIDADE ------------------------
//http://localhost:1234/mensalidade/cadastrar
router.post("/mensalidade/cadastrar", MensalidadeController.store);

//http://localhost:1234/mensalidade/buscar/id
router.get("/mensalidade/buscar/:ID", MensalidadeController.getById);

//http://localhost:1234/mensalidade/listar 
router.get("/mensalidade/listar", MensalidadeController.get);

//Alterar – http://localhost:1234/mensalidade/alterar 
router.get("/mensalidade/alterar", MensalidadeController.Alter);

//http://localhost:1234/mensalidade/remover/id
router.get("/mensalidade/remover/:ID", MensalidadeController.delete);
const express = require('express');
const router = express.Router(); 
const AtividadeController = require('../controllers/AtividadeController.js');
const ProfessorController = require('../controllers/ProfessorController.js');



//----------------------------ROTAS ATIVIDADES ------------------------
//http://localhost:1234/atividade/cadastrar
router.post("/atividade/cadastrar",AtividadeController.store);

//http://localhost:1234/atividade/buscar/crm
router.get("/atividade/buscar/:ID", AtividadeController.getById);

//http://localhost:1234/atividade/listar 
router.get("/atividade/listar", AtividadeController.get);

//Alterar – http://localhost:1234/atividade/alterar 
router.get("/atividade/alterar", AtividadeController.Alter);

//http://localhost:1234/atividade/remover/crm
router.get("/atividade/remover/:ID", AtividadeController.delete);



//----------------------------ROTAS PROFESSOR ------------------------
//http://localhost:1234/professor/cadastrar
router.post("/professor/cadastrar",ProfessorController.store);

//http://localhost:1234/professor/buscar/crm
router.get("/professor/buscar/:Cpf", ProfessorController.getByCpf);

//http://localhost:1234/professor/listar 
router.get("/professor/listar", ProfessorController.get);

//Alterar – http://localhost:1234/professor/alterar 
router.get("/professor/alterar", ProfessorController.Alter);

//http://localhost:1234/professor/remover/crm
router.get("/professor/remover/:Cpf", ProfessorController.delete);

module.exports = router ;
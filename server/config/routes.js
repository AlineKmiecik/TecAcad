const express = require('express');
const router = express.Router();

const AtividadeController = require('../controllers/AtividadeController');
const TreinoController = require('../controllers/TreinoController.js');
const MensalidadeController = require('../controllers/MensalidadeController.js');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');


//Autenticacao
router.post("/users/authenticate/", LoginController.authenticate);


// Usuarios
router.get("/lista/usuario", UserController.get);
router.get("/lista/usuario/:type", UserController.getByType);
router.get("/lista/usuario//:id", UserController.getById);
router.get("/lista/usuario///:document", UserController.getByDocument);
router.post("/cadastro/usuario", UserController.store);
router.post("/cadastro/usuario/update/:id", UserController.update);
router.get("/cadastro/usuario/apagar/:document", UserController.delete);
router.delete("/cadastro/usuario/apagar//:id", UserController.deleteById);

/*
//Atividades
router.get("/lista/atividade", AtividadeController.get);
router.get("/lista/atividade/:id", AtividadeController.getById);
router.post("/cadastro/atividade", AtividadeController.store);
router.post("/cadastro/atividade/update/:id", AtividadeController.update);
router.delete("/cadastro/atividade/apagar/:id", AtividadeController.delete);
*/


//Treinos
router.get("/lista/treino", TreinoController.get);
router.get("/lista/treino/:id", TreinoController.getById);
router.post("/cadastro/treino", TreinoController.store);
router.post("/cadastro/treino/update/:id", TreinoController.update);
router.delete("/cadastro/treino/apagar/:id", TreinoController.delete);


//Mensalidades
router.get("/lista/mensalidade", MensalidadeController.get);
router.get("/lista/mensalidade/:id", MensalidadeController.getById);
router.post("/cadastro/mensalidade", MensalidadeController.store);
router.post("/cadastro/mensalidade/update/:id", MensalidadeController.update);
router.delete("/cadastro/mensalidade/apagar/:id", MensalidadeController.delete);

module.exports = router;
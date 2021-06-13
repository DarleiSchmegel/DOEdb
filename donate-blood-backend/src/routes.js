import { Router } from "express";
//const express = require('express');
const router = Router();
//const client = require('./database/index.js');
//import { Client } from "./database/index.js"
import { DonorController } from "./controllers/donorController.js";
import { HospitalController } from "./controllers/hospitalController.js";
import { FuncionarioController } from "./controllers/funcionarioController.js";
import { DoacaoController } from "./controllers/doacaoController.js";

const donorController = new DonorController();
const hospitalController = new HospitalController();
const funcionarioController = new FuncionarioController();
const doacaoController = new DoacaoController();

router.post("/donors/register", donorController.register);
router.get("/donors/login", donorController.login);
router.get("/donors", donorController.index);
router.get("/donors/:key/:value", donorController.show);


router.post("/hospital/register", hospitalController.register);
router.get("/hospital/login", hospitalController.login);

router.get("/hospital/funcionario", funcionarioController.index);
router.get("/hospital/funcionario/:key/:value", funcionarioController.show);
router.post("/hospital/funcionario/register", funcionarioController.register);

router.post("/doacao/register", doacaoController.store);
router.get("/doacao", doacaoController.index);
router.get("/doacao/:key/:value", doacaoController.show);
router.put("/doacao", doacaoController.update);

router.get("/", (req, res) => {
    res.status(200).send({
        title: 'dbDOE',
        version: '1.0.0'
    });
});
export { router };
//module.exports = router;
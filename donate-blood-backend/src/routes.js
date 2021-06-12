//import { Router } from "express";
const express = require('express');
const router = express.Router();
const client = require('./database/index.js');
//import { Client } from "./database/index.js"




router.get("/", (req, res) => {
    res.status(200).send({
        title: 'dbDOE',
        version: '1.0.0'
    });
});
//export { router };
module.exports = router;
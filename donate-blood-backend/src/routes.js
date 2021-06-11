import { Router } from "express";

const router = Router();

import { Client } from "./database/index.js"




router.get("/", (req, res) => {
    res.status(200).send({
        title: 'dbDOE',
        version: '1.0.0'
    });
});
export { router };
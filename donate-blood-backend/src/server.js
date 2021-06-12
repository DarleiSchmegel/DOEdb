// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname+'/.env' });

import 'dotenv/config'
//require('dotenv/config');

import  express  from "express"
//const express = require('express');
//const router = require("./routes.js");
import { router } from "./routes.js"

const app = express();


app.use(express.json());

app.use(router);
console.log("Port ",process.env.PORT)
app.listen(process.env.PORT);
// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname+'/.env' });

import 'dotenv/config'
//require('dotenv/config');
//const express = require('express');
import express from 'express';


const app = express();

import { router } from "./routes.js";



app.use(express.json());

app.use(router);
console.log("Port ", process.env.PORT)
app.listen(process.env.PORT);
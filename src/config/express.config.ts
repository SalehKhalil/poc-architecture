import express, { Application } from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';

const server: Application = express();

dotenv.config();
server.use(express.json());

export default server;

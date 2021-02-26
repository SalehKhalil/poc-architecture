import express, { Application } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import 'reflect-metadata'

const server: Application = express()

dotenv.config()
server.use(bodyParser.json())

export { server }

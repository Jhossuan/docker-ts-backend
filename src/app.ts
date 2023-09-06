import express, { Express } from 'express';
import cors from 'cors'
import 'dotenv/config'
import { RootRouter } from './routes/RootRouter';

export class App {
  private static instance: Express

  static getInstance() {
    if(!App.instance){
      App.instance = express()
      App.instance.use(express.json())
      App.instance.use(cors())
      App.instance.use(RootRouter.getRouter())
    }
    return App.instance;
  }
}

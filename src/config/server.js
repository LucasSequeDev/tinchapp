import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import baseTecnicaRouter from '../routes/baseTecnica';

class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(morgan('dev'));
        this.express.use(cors());
    }

    routes() {
        this.express.use('/api/basetecnica',baseTecnicaRouter)
    }
}

module.exports = new App().express;
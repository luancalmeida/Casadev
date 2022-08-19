import express from 'express';
import mongoose from 'mongoose';
import  path from 'path';
import routes from './routes';

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://casadev:casadev@casadev.geutrkg.mongodb.net/?retryWrites=true&w=majority', {
           UseNewUrlParser: true,
           useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    //para mosntrar o que será utilizado.
    middlewares(){

        //passando  a rota files
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'upload' ))
        )

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

//para exportar
export default  new App().server;
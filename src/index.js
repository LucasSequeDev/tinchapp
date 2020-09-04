
import dotenv from 'dotenv';
import app from './config/server';
import path from 'path'
import {connect} from './config/database';

dotenv.config({
    path: path.join(__dirname,'../.env')
});

function main() {
    try {
        connect();
        app.listen(process.env.PORT);
        console.log(`[+] Servidor UP en el puerto ${process.env.PORT}`);
    } catch (error) {
        console.log('[-] Ocurrio un error al iniciar el servidor',error)
    }
}


main();
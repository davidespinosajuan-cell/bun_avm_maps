import { creareServer } from "./server";

const configServer = creareServer();

console.log(`Servidor iniciando en el puerto ${ configServer.port }`);
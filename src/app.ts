import { Server } from './Class/Server'
import * as dataFile from './assets/data.json';

const PORT: number = parseInt(process.env.PORT || '3000', 10);
const server = new Server(dataFile.data);

server.start(PORT);
import app from "./app"; //es el código que esta en app.js
//import './database';
import conexionDB from "./database";
import { PORT } from "./config";

conexionDB()
app.listen(PORT);
console.log("Servidor en puerto", PORT);

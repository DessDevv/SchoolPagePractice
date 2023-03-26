import app from "./app"; //es el código que esta en app.js
//import './database';
import conexionDB from "./database";

conexionDB()
app.listen(3000);
console.log("Servidor en puerto", 3000);

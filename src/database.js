//import { connect } from "mongoose";
import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

const conexionDB =async ()=>{
    /*useNewUrlParser, useUnifiedTopology, useFindAndModifyy useCreateIndex ya no son opciones 
    compatibles. Mongoose 6 siempre se comporta como si useNewUrlParser, useUnifiedTopologyy 
    useCreateIndexfueran truey useFindAndModifyes false.*/
    const db = MONGODB_URI;
    //Parametros(conexionDataBase,{configuracion})).La promesa(nos regresa algo)
    await  mongoose.connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con=>{
        // console.log(con.connections)
        console.log("Conexion con la base de datos exitosa");
    })
   
}

export default conexionDB;

module.exports = conexionDB;
/*(async () => {
    try{
        const db = await connect("mongodb://localhost:27017/frstproject-mongo");
        console.log("Database connected to", db.connection.name);
    }catch(error){
        console.error(error);
    }

})();*/
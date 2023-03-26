import express from "express";
import indexRoutes from "./routes/indexRoutes";
import exphbs from "express-handlebars";
import path from "path"; //módulo de node
import morgan from "morgan";

const app = express();
app.set("views", path.join(__dirname, "views"));
app.engine(
  //función que reconoce el motor de plntilla que se usa
  ".hbs", //nombre para que reconozca a express que utilizamos handlebars
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"), //layoutsDir para no repetir códigos, lo que tenemos en layouts y views
    defaultLayout: "main",
    extname: ".hbs", //extensión para que reconozca que es un archivo de handle bars
  })
);

app.set("view engine", ".hbs");

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


//estas son las rutas
app.use(indexRoutes);

//acceso a archivos estáticos
app.use(express.static(path.join(__dirname, "frontend")));

export default app; //exporto el objeto app

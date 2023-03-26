//AQUÍ VAN TODAS LAS FUNCIONES QUE VA A EJECUTAR EL PROYECTO
import Productos from "../models/Productos";

export const renderProductos = async (req, res) => {
    const productos = await Productos.find().lean();
  
    /*console.log(productos);*/
    res.render("index", { productos: productos });
  };

export const createProductos = async (req, res) => {
    try {
      //SE AGREGA
      const productos = Productos(req.body);
      /*const productoAlmacenado =*/ await productos.save();
      //console.log(productoAlmacenado); SE USA PARA MOSTRAR LA INFORMACIÓN GUARDADA, EN LA CONSOLA
      res.redirect("/");
    } catch (error) {
      console.log(error)
    }
  };

export const renderEditProductos = async (req, res) => {
    try {
      const productos = await Productos.findById(req.params.id).lean(); //Métodos obtenidos de Mongoose
      res.render("editar", {productos});
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateProductos = async (req, res) => {
    const {id} = req.params;
    await Productos.findByIdAndUpdate(id, req.body);
  
    res.redirect("/");
  };

export const deleteProductos = async (req, res) => {
    const {id} = req.params;
    await Productos.findByIdAndDelete(id, req.body);
  
    res.redirect("/");
  };

export const statusProductos = async (req, res) => {
    const {id} = req.params;
    const productos = await Productos.findById(id);
    //Mando a traer mi propiedad opción que está en el modelo
    productos.opcion = !productos.opcion;
    await productos.save();
    res.redirect("/");
  };
import Teacher from "../models/Teacher";

export const renderTeacher = async (req, res) => {
    const teacher = await Teacher.find().lean();
  
    /*console.log(productos);*/
    res.render("teacher", { teacher: teacher });
  };
  
export const createTeacher = async (req, res) => {
    console.log(req.body)
    try {
      //SE AGREGA
      const teacher = Teacher(req.body);
      /*const productoAlmacenado =*/ await teacher.save();
      //console.log(productoAlmacenado); SE USA PARA MOSTRAR LA INFORMACIÓN GUARDADA, EN LA CONSOLA
      res.redirect("/teacher");
    } catch (error) {
      console.log(error)
    }
  };

export const renderEditTeacher = async (req, res) => {
    try {
      const teacher = await Teacher.findById(req.params.id).lean(); //Métodos obtenidos de Mongoose
      res.render("editTeacher", {teacher});
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateTeacher = async (req, res) => {
    const {id} = req.params;
    await Teacher.findByIdAndUpdate(id, req.body);
  
    res.redirect("/teacher");
  };

export const deleteTeacher = async (req, res) => {
    const {id} = req.params;
    await Teacher.findByIdAndDelete(id, req.body);
  
    res.redirect("/teacher");
  };

export const statusTeacher = async (req, res) => {
    const {id} = req.params;
    const teacher = await Teacher.findById(id);
    //Mando a traer mi propiedad opción que está en el modelo
    teacher.opcion = !teacher.opcion;
    await teacher.save();
    res.redirect("/teacher");
  };
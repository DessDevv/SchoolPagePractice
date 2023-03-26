import Student from "../models/Student";

export const renderStudent = async (req, res) => {
    const student = await Student.find().lean();
  
    /*console.log(productos);*/
    res.render("student", { student: student });
  };

export const createStudent = async (req, res) => {
    console.log(req.body)
    try {
      //SE AGREGA
      const student = Student(req.body);
      /*const productoAlmacenado =*/ await student.save();
      //console.log(productoAlmacenado); SE USA PARA MOSTRAR LA INFORMACIÓN GUARDADA, EN LA CONSOLA
      res.redirect("/student");
    } catch (error) {
      console.log(error)
    }
  };

export const renderEditStudent = async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).lean(); //Métodos obtenidos de Mongoose
      res.render("editStudent", {student});
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateStudent = async (req, res) => {
    const {id} = req.params;
    await Student.findByIdAndUpdate(id, req.body);
  
    res.redirect("/student");
  };

export const deleteStudent = async (req, res) => {
    const {id} = req.params;
    await Student.findByIdAndDelete(id, req.body);
  
    res.redirect("/student");
  };

export const statusStudent = async (req, res) => {
    const {id} = req.params;
    const student = await Student.findById(id);
    //Mando a traer mi propiedad opción que está en el modelo
    student.opcion = !student.opcion;
    await student.save();
    res.redirect("/student");
  };
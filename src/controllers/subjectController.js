import Subject from "../models/Subject";

export const renderSubject =  async (req, res) => {
    const subject = await Subject.find().lean();
    console.log(subject)
    res.render("subject", { subject: subject });
  };

export const createSubject = async (req, res) => {
    try {
      //SE AGREGA
      const subject = Subject(req.body);
      /*const productoAlmacenado =*/ await subject.save();
      //console.log(productoAlmacenado); SE USA PARA MOSTRAR LA INFORMACIÓN GUARDADA, EN LA CONSOLA
      res.redirect("/subject");
    } catch (error) {
      console.log(error)
    }
  };

export const renderEditSubject = async (req, res) => {
    try {
      const subject = await Subject.findById(req.params.id).lean(); //Métodos obtenidos de Mongoose
      res.render("editSubject", {subject});
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateSubject =  async (req, res) => {
    const {id} = req.params;
    await Subject.findByIdAndUpdate(id, req.body);
  
    res.redirect("/subject");
  };

export const deleteSubject = async (req, res) => {
    const {id} = req.params;
    await Subject.findByIdAndDelete(id, req.body);
  
    res.redirect("/subject");
  };

export const statusSubject = async (req, res) => {
    const {id} = req.params;
    const subject = await Subject.findById(id);
    //Mando a traer mi propiedad opción que está en el modelo
    subject.opcion = !subject.opcion;
    await subject.save();
    res.redirect("/subject");
  };
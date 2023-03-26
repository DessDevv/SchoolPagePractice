import { Router } from "express";
import { createProductos, deleteProductos, renderEditProductos, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";
import { createStudent, deleteStudent, renderEditStudent, renderStudent, statusStudent, updateStudent } from "../controllers/studentController";
import { createSubject, deleteSubject, renderEditSubject, renderSubject, statusSubject, updateSubject } from "../controllers/subjectController";
import { createTeacher, deleteTeacher, renderEditTeacher, renderTeacher, statusTeacher, updateTeacher } from "../controllers/teacherController";
import Productos from "../models/Productos";
import Student from "../models/Student";
import Subject from "../models/Subject";
import Teacher from "../models/Teacher";

const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

//NUEVA RUTA
router.get("/update/:id", renderEditProductos);

router.post("/update/:id", updateProductos);

router.get("/delete/:id", deleteProductos);

router.get("/status/:id", statusProductos);

//-----------------SUBJECT---------------------------------------------------------

router.get("/subject", renderSubject);

router.post("/subject/add", createSubject);

//NUEVA RUTA
router.get("/update-subject/:id", renderEditSubject);

router.post("/update-subject/:id", updateSubject);

router.get("/delete-subject/:id", deleteSubject);

router.get("/status-subject/:id", statusSubject);


//-----------------STUDENT---------------------------------------------------
router.get("/student", renderStudent);

router.post("/student/add", createStudent);

//NUEVA RUTA
router.get("/update-student/:id", renderEditStudent);

router.post("/update-student/:id", updateStudent);

router.get("/delete-student/:id", deleteStudent);

router.get("/status-student/:id", statusStudent);


//-----------------TEACHER---------------------------------------------------
router.get("/teacher", renderTeacher);

router.post("/teacher/add", createTeacher);

//NUEVA RUTA
router.get("/update-teacher/:id", renderEditTeacher);

router.post("/update-teacher/:id", updateTeacher);

router.get("/delete-teacher/:id", deleteTeacher);

router.get("/status-teacher/:id", statusTeacher);

//----------------------------------


export default router;



import axios from "axios";
import host from "../helpers/host";
import UseFetch from "../hooks/useFetch";
import { types } from "../types/types";


///////////////////ESTUDIANTES///////////////////////////

export function getStudents() {
  return async function (dispatch) {
    const students = await axios.get("http://localhost:3001/stu/getStudents/", {});
    return dispatch({
      type: types.GET_STUDENTS,
      payload: students.data.students
    });
  };
}

export function getStudent(student) {
  return async function (dispatch) {
    let save = {
      firstName : student.data.students.firstName,
      lastName : student.data.students.lastName,
      cohorte : student.data.students.cohorte,
    }
    return dispatch({
      type: types.GET_STUDENT,
      payload: save,
      loading : false
    })
  }
}

//ESTA FUNCION AGREGA UNA MATERIA AL ARRAY DE MATERIA DE UN ESTUDIANTE EN PARTICULAR
//ES DECIR SERVIRIA PARA QUE EL ALUMNO SE INSCRIBA EN UNA MATERIA
// en payload llegan los valores enviados por input (en este caso vendria el id de la materia a agregar)
//por tanto la materia ya debe estar cargada previamente
//idStudents seria el id del estudiante que recibira el agregado de la materia mencionada 
export function addMateriaStudents(payload, idStudent) {
  console.log(payload)
  console.log(idStudent)

  return async function (dispatch) {
    try {
      var newMateria = await axios.post(`http://localhost:3001/stu/addMateriaStu/${idStudent}`, payload);
      return newMateria
    } catch (err) {
      console.log(err)
    }
  }
}

/////////////////////MATERIAS/////////////////////

export function getMaterias(data) {
  return async function (dispatch) {
    return dispatch({
      type: types.GET_SUBJECT,
      payload: data
    })
  }
}


///////////////////////TEACHER////////////////////////////////
export function getTeachers() {
  return async function (dispatch) {
    const teachers = await axios.get("http://localhost:3001/api/getTeacher/", {});
    return dispatch({
      type: types.GET_TEACHERS,
      payload: teachers.data.buscado
    })
  }
}

import axios from "axios";
export const ADD_TODO = "ADD_TODO";
export const ORDER_CONTACTS = "ORDER_CONTACTS";
export const GET_CONTACTS = "GET_CONTACTS";
export const GET_STUDENTS = "GET_STUDENTS"
export const GET_STUDENT_ID = "GET_STUDENT_ID"
export const GET_MATERIA = "GET_MATERIA"
export const GET_TEACHERS = "GET_TEACHERS"

///////////////////ESTUDIANTES///////////////////////////

export function getStudents() {
  return async function (dispatch) {
    const students = await axios.get("http://localhost:3001/stu/getStudents/", {});
    return dispatch({
      type: GET_STUDENTS,
      payload: students.data.students
    });
  };
}

export function getStudentId(idStudent) {
  return async function (dispatch) {
    const student = await axios.get(`http://localhost:3001/stu/getStudent/${idStudent}`, {});
    console.log(student)
    return dispatch({
      type: GET_STUDENT_ID,
      payload: student.data.student
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

export function getMaterias() {
  return async function (dispatch) {
    const materias = await axios.get("http://localhost:3001/mat/getMateria", {})
    return dispatch({
      type: GET_MATERIA,
      payload: materias.data.materias
    })
  }
}


///////////////////////TEACHER////////////////////////////////
export function getTeachers() {
  return async function (dispatch) {
    const teachers = await axios.get("http://localhost:3001/api/getTeacher/", {});
    return dispatch({
      type: GET_TEACHERS,
      payload: teachers.data.buscado
    })
  }
}

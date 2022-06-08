import { types } from '../types/types';
import { GET_STUDENTS } from "./actions"
import { GET_STUDENT_ID } from "./actions"
import { GET_MATERIA } from "./actions"
import { GET_TEACHERS } from "./actions"


const initialState = {
    user: JSON.parse(localStorage.getItem('userNoClassroom')) || "",
    student: [],
    student_id: [],
    materias: [],
    teachers: []
};
console.log(initialState.student, "state reducer--->")

const AuthReducer = (state = initialState, action) => {

    console.log(action.payload, "reducer")
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }

        case GET_STUDENTS:
            return {
                ...state,
                student: action.payload
            }
        case GET_STUDENT_ID:
            return {
                ...state,
                student_id: action.payload
            }
        case GET_MATERIA:
            return {
                ...state,
                materias: action.payload
            }

        case GET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer;



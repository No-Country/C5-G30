import { combineReducers } from "redux";
import authReducer from './authReducer';
// import { GET_CONTACTS } from "./actions";
// import { GET_STUDENTS } from "./actions";

// const initialState = {
//     allTurnos: [],
//     students: []
// }

// function rootReducer(state = initialState, action) {
//     console.log(action.payload, "reducer")
//     //imprmiira esto de abajao,dependiendo de la accion que se haya elegido
//     //Object { type: "GET_RECIPE", payload: (13) […] }
//     switch (action.type) {
//         case GET_CONTACTS:

//             return {
//                 ...state,
//                 allTurnos: action.payload

//             }

//         case GET_STUDENTS:
//             return {
//                 ...state,
//                 students: action.payload
//             }
//         default:
//             return state

//     }

// }

// export default rootReducer

export const rootReducer = combineReducers({
    auth : authReducer
})
import { types } from '../types/types';
import {GET_STUDENTS} from "./actions"

const initialState =  {
    email : localStorage.getItem('email') || "",
    student11:[]

};
console.log(initialState)

const AuthReducer = (state = initialState, action) => {
    
    console.log(action.payload,"reducer")
    switch(action.type){
        // case types.authLogin:
        //     return{
        //         ...state,
        //         ...action.payload
        //     }

         case GET_STUDENTS:
                return{
                    ...state,
                    student11:action.payload
                }   
        default:
            return state
    }
}

export default AuthReducer;

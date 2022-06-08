import { types } from "../types/types";

export const startLogin = (data)=>{
    let parse = {
        id : data._id,
        email : data.username
    }
    return (dispatch)=>{
        localStorage.setItem('userNoClassroom', JSON.stringify(parse))
        dispatch(login({
            user : parse
        }))
    }

}

const login = (user)=>({
    type : types.authLogin,
    payload : user
})
import axios from "axios";
export const ADD_TODO = "ADD_TODO";
export const ORDER_CONTACTS = "ORDER_CONTACTS";
export const GET_CONTACTS = "GET_CONTACTS";
export const GET_STUDENTS="GET_STUDENTS"

export function getContacts(payload) {
  return async function (dispatch) {
    const listTurnos = await axios.get("api/getTeacher", {});

    return dispatch({
      type: GET_CONTACTS,
      payload: listTurnos,
    });
  };
}

export function getStudents(payload) {
  return async function (dispatch) {
    const students = await axios.get("stu/getStudents/", {});
    return dispatch({
      type: GET_STUDENTS,
      payload: students.data
    });
  };
}

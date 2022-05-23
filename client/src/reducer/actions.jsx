import axios from "axios";
export const ADD_TODO = "ADD_TODO";
export const ORDER_CONTACTS = "ORDER_CONTACTS";
export const GET_CONTACTS = "GET_CONTACTS";



export function getContacts(payload) {
  return async function (dispatch) {
    const listTurnos = await axios.get(
      "api/getTurnos",
      {}
    );
    return dispatch({
      type: GET_CONTACTS,
      payload: listTurnos.data.turnos,
    });
  };
}










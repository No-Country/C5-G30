import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderContacts, getContacts } from "../reducer/actions";
import { Link } from "react-router-dom";

function TodoList() {
  
  let turnos = useSelector((state) => state.allTurnos);
  console.log(turnos, "Agenda clases Prueba");
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  let listadoTurnos = turnos;

  

  return (
    <div class="agenda">
      <h1>clases</h1>
      
      {/* <AgendaInputs></AgendaInputs> */}

      {Array.isArray(listadoTurnos) ? (
        <div>
          <tbody>
            
            {listadoTurnos.map((el) => {
              return <h4>{el.username}</h4>;
            })}
          </tbody>
        </div>
      ) : (
        <h1>fsef</h1>
      )}

    </div>
  );
}

export default TodoList;

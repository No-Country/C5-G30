import ListItem from "./ListItem";
import "./List.css";
import { Link } from "react-router-dom";

export default function List (){
  return (
    <main className="main-subjects" >
      <h2>Materias</h2>
      <div className="box-subjects-container" >
        <Link className="add-btn" to='/subjects/add'> Agregar Materia</Link>
        <div className="box-subjects-contain" >
          <h4>Mis materias</h4>
          <ListItem msg="Nombre" btn1="ver" btn2="info" />
          <ListItem msg="Nombre" btn1="ver" btn2="info" />
          <ListItem msg="Nombre" btn1="ver" btn2="info" />
          <ListItem msg="Nombre" btn1="ver" btn2="info" />
        </div>

      </div>
    </main>
  );
};




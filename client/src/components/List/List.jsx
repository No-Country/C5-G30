import ListItem from "./ListItem";
import "./List.css";

export default () => {
  return (
    <div id="contenedor-lista-001">
      <div id="contenedor-lista-002">
        <div id="contenedor-seccion-001">
          <div id="contenedor-filtro-001">Filtros</div>
        </div>
        <div id="contenedor-seccion-002">
          <ListItem msg="hola" btn1="a" btn2="b" />
          <ListItem msg="hello" btn1="c" btn2="d" />
          <ListItem msg="hi" btn1="e" btn2="f" />
          <ListItem msg="buen dia" btn1="g" btn2="h" />
        </div>
        <div id="contenedor-seccion-001">
          <div id="list-add-button-001">+</div>
        </div>
      </div>
    </div>
  );
};

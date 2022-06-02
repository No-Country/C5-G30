import React from "react";
import { Link } from "react-router-dom";
import '../styles/sideBar.css'
const SideBar = () => {
  return (
      
    <div class="sidebar">
      <Link to="/">
        <i class="fa fa-fw fa-home"></i> Inicio
      </Link>
      <Link to="/subjects">
        <i class="fa fa-fw fa-wrench"></i> Materias
      </Link>
      <Link to="/user/profile/6290328166920c04f471eb98">
        <i class="fa fa-fw fa-user"></i> Perfil
      </Link>
      <Link to="#contact">
        <i class="fa fa-fw fa-envelope"></i> Contact
      </Link>
    </div>
  );
};

export default SideBar;

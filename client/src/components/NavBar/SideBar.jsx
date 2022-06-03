import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sideBar.css";
const SideBar = () => {
  return (
    <div class="sidebar">
      <div className="page-name">
        <img src="/web-developer-design-vector-5884837.jpg" alt="" />
        <h5>No Classroom C5-G30</h5>
      </div>
      <div className="nav-item">
        <Link to="/">
          <i class="fa fa-fw fa-home"></i> Inicio
        </Link>
        <Link to="/subjects">
          <i class="fas fa-book-reader"></i> Materias
        </Link>
        <Link to="/user/profile/6290328166920c04f471eb98">
          <i class="fa fa-fw fa-user"></i> Perfil
        </Link>
        <Link to="#contact">
          <i class="fa fa-fw fa-envelope"></i> Contact
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

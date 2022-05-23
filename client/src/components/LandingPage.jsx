import React from "react";
import { Link } from "react-router-dom";
//import "../css/LandingPage.css"
export default function LandingPage() {
  return (
    <div>
      <h1>aula virtual</h1>
      {console.log("dsfsd")}
      <Link to="/home">
      <button class="button button1">Ingresar</button>
      </Link>
    </div>
  );
}
  
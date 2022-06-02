import React from "react";
import "./topBar.css";
const Topbar = () => {
    const handleDisplay = ()=>{
        let display = document.querySelector('.top-bar')
        let $burger = document.querySelector('.burger')
        let $closed = document.querySelector('.closed')

        if (!$burger.classList.contains('ds-none')) {
            $burger.classList.add('ds-none')
            $closed.classList.remove('ds-none')
            display.style.display = 'block'
        } else if (!$closed.classList.contains('ds-none')) {
            $closed.classList.add('ds-none')
            $burger.classList.remove('ds-none')
            display.style.display = 'none'
        }

    }

  return (
    <div className="top-bar-contain">
      <div className="burger-menu">
        <i class="fas fa-bars burger" onClick={handleDisplay}></i>
        <i class="fas fa-times closed ds-none" onClick={handleDisplay}></i>
      </div>
      <div className="top-bar">
        <div className="avatar-contain">
            <img className="imag-avatar" src="" alt="" />
          <p>Nombre</p>
        </div>
        <ul className="list-btn-navbar">
            <li className="item-navbar" >item</li>
            <li className="item-navbar" >item</li>
            <li className="item-navbar" >item</li>
            <li className="item-navbar" >item</li>
            <li className="item-navbar" >item</li>
            <li className="item-navbar" >item</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;

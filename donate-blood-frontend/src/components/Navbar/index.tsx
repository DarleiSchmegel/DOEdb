import React, { useEffect, useState } from 'react'
import Link from 'next/link'
//import './styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useDasboardMenu } from '../../context/contextDasboard'

library.add(fas)

// import imgDarlei from "../assets/darlei.png"
type Props = {
  content: string,
}

const Navbar:  React.FC = () => {

  const {whatIsOpen, setMenuSelected} = useDasboardMenu();

  function handleClick(menuClicked:string) {
    setMenuSelected(menuClicked)
  }
  return (
    <>
      <input type="checkbox" id="check"/>
      <label htmlFor="check">
        <FontAwesomeIcon icon="bars"  id="btn" />
        <FontAwesomeIcon icon="times"  id="cancel" />
      </label>

      <div id="sidebar">
        <header>
          {/* <img src={imgDarlei} alt=""/> */}
          <h3>
            Darlei M. Schmegel
          </h3>
        </header>
        <ul id="ul-navbar">
          <li onClick={()=>{handleClick("home") }} id="home" className={whatIsOpen === "home" ? "active" : ""}>
            
              <p><FontAwesomeIcon icon="qrcode" id="icons"/>Inicio</p>
            
          </li>
          <li onClick={()=>{handleClick("agenda")}} id="agenda" className={whatIsOpen === "agenda" ? "active" : ""}>
            
              <p><FontAwesomeIcon icon="calendar-alt" id="icons"/>Agenda</p>
            
          </li>

          <li onClick={()=>{handleClick("banco")}} id="banco" className={whatIsOpen === "banco" ? "active" : ""}>
            
              <p><FontAwesomeIcon icon="tint" id="icons"/>Estoque</p>
            
          </li>
          
          <li onClick={()=>{handleClick("doadores")}} id="doadores" className={whatIsOpen === "doadores" ? "active" : ""}>
            
              <p><FontAwesomeIcon icon="address-card" id="icons"/>Doadores</p>
            
          </li>
          <li onClick={()=>{handleClick("funcionarios")}} id="funcionarios" className={whatIsOpen === "funcionarios" ? "active" : ""}>
            <p><FontAwesomeIcon icon="users" id="icons"/>Funcionários</p>
          </li>
          <li onClick={()=>{handleClick("salas")}} id="salas" className={whatIsOpen === "salas" ? "active" : ""}>     
            <p><FontAwesomeIcon icon="person-booth" id="icons"/>Salas</p>
          </li>

          <li onClick={()=>{handleClick("coleta")}} id="coleta" className={whatIsOpen === "coleta" ? "active" : ""}>     
            <p><FontAwesomeIcon icon="syringe" id="icons"/>Coleta</p>
          </li>
          <li onClick={()=>{handleClick("settings")}} id="settings" className={whatIsOpen === "settings" ? "active" : ""}>     
            <p><FontAwesomeIcon icon="user-cog" id="icons"/>Settings</p>
          </li>
  

        </ul>
      </div>
    </>
  )
}
export default Navbar

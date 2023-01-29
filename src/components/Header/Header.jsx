import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'



function Header() {
  const [click, setClick]= useState(false)
  const [clicked, setClicked]= useState(false)
  const [clicks, setClicks]= useState(false)
  const [clicking, setClicking]= useState(false)

  const handleClick=()=> setClick(!click)
      
    
  const handleClicked=()=>setClicked(!clicked)
  const handleClicks=()=> setClicks(!clicks)
  const handleClicking=()=> setClicking(!clicking)

  return (
    <div>
    <div class='navbar'>
    <h1>BOOKS MANAGEMENT</h1>
    
<div class='header'>
   <h3><NavLink className={click? "active": "change"} to='/' onClick={handleClick}>HomePage</NavLink></h3>
    <h3><NavLink className={clicked? "active": "change"} to='/authors' onClick={handleClicked}>Authors</NavLink></h3>
    <h3><NavLink className={clicks? "active": "change"} to='/login' onClick={handleClicks}>Login</NavLink></h3>
    <h3><NavLink className={clicking? "active": "change"} to='/books' onClick={handleClicking}>Books</NavLink></h3>
    </div>
</div>
    </div>
    
  )
}

export default Header
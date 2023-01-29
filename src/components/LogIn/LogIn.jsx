import React, {useState} from 'react'
import Header from '../Header/Header'
import './LogIn.css'
import Body from '../Body/Body'


function LogIn() {
  const[text, setText]= useState(' ')
  const  handleChange=(event)=>{
    setText(event.target.value)
  }
  return (
    <div> 
      <Header/>
      <div class='section'>
      <div class= 'form'>
        <h1><span class='first'>L</span>ogIn <span class='second'>Here</span></h1>
      <input type='text' class='inp' value={text} onChange={handleChange} placeholder={'Enter your email here'}/><br/>
      <input type='text'class='inp' value={text} onChange={handleChange} placeholder={'Enter your password here'}/><br/>
      <button type='submit' class='sub'>LogIn</button>
      </div>
    <div class='settle'>
    <Body/>
    </div>
    </div>
    </div>
  )
}

export default LogIn
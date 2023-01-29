import React, {useState} from 'react'
import './Book.css'
import Header from '../Header/Header'
import Body from '../Body/Body'

function Book() {
    const[input, setInput]= useState(' ')
  const  handleonChange=(event)=>
    setInput(event.target.value)
  return (
    <div> <Header/>
    <div class='container'>
      <div class= 'form-design'>
        <h1>Publish <span>Book</span></h1>
      <input type='text' class='area' value={input} onChange={handleonChange} placeholder={'Enter your email here'}/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder={'Enter your password here'}/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder={'Enter your password here'}/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder={'Enter your password here'}/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder={'Enter your password here'}/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder={'Enter your password here'}/><br/>
      <button type='submit' class='submit'>Submit</button>
      </div>
    
    <Body/>
    </div></div>
  )
}

export default Book
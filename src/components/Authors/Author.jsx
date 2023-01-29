import React, { useState } from 'react';
import './Author.css'
import Header from '../Header/Header'
import Body from '../Body/Body'

function Author() {
    const [input, setInput] = useState({
        title: "",
        name: "",
        phone: "",
        email: "",
        password: ""
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch('https://localhost:5000/authors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
          <Header/>
    <div className='container'>
      <div className= 'form-design'>
        <h1>Create <span>Account</span></h1>
            <form method="POST" >
                <input type='text'className='area' name="title" value={input.title} onChange={handleInput} placeholder='Enter your title here' /><br />
                <input type='text'className='area' name="name" value={input.name} onChange={handleInput} placeholder='Enter your name here' /><br />
                <input type='text' className='area' name="phone" value={input.phone} onChange={handleInput} placeholder='Enter your mobile no. here' /><br />
                <input type='text' className='area' name="email" value={input.email} onChange={handleInput} placeholder='Enter your email here' /><br />
                <input type='text' className='area' name="password" value={input.password} onChange={handleInput} placeholder='Enter your password here' /><br />
                <button type="submit" className='submit' onSubmit={handleSubmit} >Submit</button>
            </form> </div>
            <Body/>
    </div>
            
        </div>
    );
}

export default Author;













































// import React , {useState} from 'react'
// import './Author.css'
// import Header from '../Header/Header'
// import Body from '../Body/Body'


// function Author() {
//     const[input, setInput]= useState({
//       title:"", name:"", phone:"", email:"", password:"" })
     
//   let name, value;
//   const handleInput=(event)=>{
//     name= event.target.name;
//     value= event.target.value;
//     setInput({...input, [name]:value})
//   } 

// const PostData = async (event) =>{
// event.preventDefault();
//   const {name, email, phone, title, password}= input
// const res=await fetch("https://localhost:5000/authors", {
//   method:"POST",
//   headers:{
// "Content-Type":"application/json"
//   },
//   body:JSON.stringify({
//     name:name, email:email, phone:phone, title:title, password:password
//   }) 
//  })
//  await res.json()
// }
//   // }).then((res)=>{
//   //   alert("successfully registered")}).catch((err)=>{alert(err.response.data.message+ err.response.status+"Error")})}


  

//   return (
//     <div> <Header/>
//     <div className='container'>
//       <div className= 'form-design'>
//         <h1>Create <span>Account</span></h1>
//         <form method="POST" >
        
//       <input type='text' className='area' name="title" value={input.title} onChange={handleInput} placeholder='Enter your title here'/><br/>
//       <input type='text'className='area' name="name" value={input.name} onChange={handleInput} placeholder='Enter your name here'/><br/>
//       <input type='text'className='area' name="phone" value={input.phone} onChange={handleInput} placeholder='Enter your mobile no. here'/><br/>
//       <input type='text'className='area' name="email" value={input.email} onChange={handleInput} placeholder='Enter your email here'/><br/>
//       <input type='text'className='area' name="password" value={input.password} onChange={handleInput} placeholder='Enter your password here'/><br/>
//       <input type='submit' className='submit'  onSubmit= {PostData} value="Register"></input>
//       </form>
//       </div>
    
//     <Body/>
//     </div></div>
//   )
// }

// export default Author
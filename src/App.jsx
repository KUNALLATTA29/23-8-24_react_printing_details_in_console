import { useState } from 'react'
import '../src/App.css'



function App() {
  const [name,setname] = useState('');
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');

  const handlename = (e) => {
    setname(e.target.value);
  }

  const handleemail = (e) =>{
    setemail(e.target.value)
  }

  const handlepassword = (e) => {
    setpassword(e.target.value)
  }

  const handelbtn = ()=>{
    console.log(`name : ${name}`)
    console.log(`email : ${email}`)
    console.log(`password : ${password}`)
  }

  return (
      <>
        <label>Name</label><br/>
        <input
          placeholder='Username'
          onChange={handlename}
        /><br/>
        <label>Email</label><br/>
        <input
          placeholder='email'
          onChange={handleemail}
        /><br/>
        <label>Password</label><br/>
        <input
          placeholder='password'
          onChange={handlepassword}
        /><br/>
        <button onClick={handelbtn}>submit</button>
      </>
  )
}

export default App

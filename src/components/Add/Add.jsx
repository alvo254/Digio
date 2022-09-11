import React, { useState } from 'react'
import "./Add.css"
import { Link } from 'react-router-dom'
import axios from 'axios'


const Add = () => {



  const [data, setData] = useState({
    name: "",
    email:"",
    grades:""
  })
  

  const handleChange = (e) =>{
    const {name, value} = e.target
    setData({...data, [name]:value})  
  }


  const submit = (event) =>{
    event.preventDefault()
    // console.log(data)
    axios.post("http://localhost:9292/student",{
      name: data.name,
      email: data.email,
      grades: data.grades
    })
    // setData({
    //   name: "",
    //   email:"",
    //   grades:""
    // })

     .then((recv) => {console.log(recv)})
     .then(err => console.log(err))
  }

  return (
    <div>
      <h1>Add Student</h1>
        <form className="editTm">
  <div class="form-group">
    <label>Name</label>
    <input name='name' onChange={handleChange} class="form-control" aria-describedby="emailHelp" placeholder="Enter name"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input name='email' type="email" onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label >Student grades</label>
    <input name='grades' onChange={handleChange} class="form-control"  placeholder="Enter grades"/>
  </div>

  <button type="submit" onClick={submit} class="btn btn-primary" style={{width:"90px", marginTop:"20px"}}>Add</button>

  <Link class="btn btn-primary mr-2" to="/Students" style={{background:"gray", border:"none", width:"90px", height:"40px"}}>
                    Back
                  </Link>

  <Link class="btn btn-primary mr-2" to="/Students" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    Cancel
                  </Link>
</form>
        
    </div>
    
  )
}

export default Add
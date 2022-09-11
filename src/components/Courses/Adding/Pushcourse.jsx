import axios from 'axios'
import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'


const Pushcourse = () => {
  

  const [data, setData] = useState({
    course_name: "",
    description:"",
  })


  const handleChange = (e) =>{
    const {name, value} = e.target
    setData({...data, [name]:value})  
  }

  const submit = (event) =>{
    event.preventDefault()
    // console.log(data)
    axios.post("https://digio-backend.herokuapp.com/description",{
      course_name: data.course_name,
      description: data.description,
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
      <h1>Courses</h1>
        <form className="editTm">
  <div class="form-group">
    <label >Enter Course Name</label>
    <input name='course_name' onChange={handleChange} class="form-control"  aria-describedby="emailHelp" placeholder="Enter course name"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>

  <div class="form-group">
    <label>Decription</label>
  
    <textarea name='description' onChange={handleChange} type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter course description"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  {/* <div class="form-group">
    <label for="exampleInputPassword1">Specialization</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div> */}

  <button type="submit" onClick={submit} class="btn btn-primary" style={{width:"90px"}}>Add</button>
  <Link class="btn btn-primary mr-2" to="/courses" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    back
                  </Link>

  <Link class="btn btn-primary mr-2" to="/courses" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    Cancel
                  </Link>
</form>
        
    </div>
    
  )
}

export default Pushcourse
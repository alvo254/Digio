import React, { useState } from 'react'
import "./Edit.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const Edit = () => {
  
  const { id } = useParams()

  const [data, setData] = useState({
    name: "",
    email:"",
    speciality:""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setData({...data, [name]:value})
  }

  const submit = (event) =>{
    event.preventDefault()
    console.log(data)
    axios.patch(`http://localhost:9292/tms/${id}`,{
      name: data.name,
      email: data.email,
      speciality: data.speciality
    })
     .then((recv) => {console.log(recv)})
     .then(err => console.log(err))
  }

  return (
    <div>
      <h1>Edit Tm</h1>
        <form className="editTm">
  <div class="form-group">
    <label>Name</label>
    <input onChange={handleChange} class="form-control" name="name"  placeholder="Edit name"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input onChange={handleChange} type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label>Specialization</label>
    <input onChange={handleChange}  class="form-control"  name="speciality" placeholder="speciality"/>
  </div>

  <button onClick={submit} type="submit" class="btn btn-primary">update</button>

  <Link class="btn btn-primary mr-2" to="/Tm" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    Cancel
                  </Link>
</form>
        
    </div>
    
  )
}

export default Edit
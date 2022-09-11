import React, { useEffect, useState } from 'react'
// import "./Add.css"
import { Link } from 'react-router-dom'
import axios from 'axios'


const Edit = ({id}) => {

  const  [gettings, setGetting] = useState([""])

  useEffect(()=> {
    axios("https://digio-backend.herokuapp.com/tms")
    .then((resv) => setGetting(resv.data))
  },[])
  // console.log(gettings)


  const [data, setData] = useState({
    name: "",
    email:"",
    speciality:""
  })
  

  const handleChange = (e) =>{
    const {name, value} = e.target
    setData({...data, [name]:value})
    
  }

  const handleUpdate = (e, id) =>{
    e.preventDefault()
    
    console.log(`id is ${id}`)
  }




  const submit = (event, id) =>{
    event.preventDefault()
    console.log(data)
    axios.patch(`https://digio-backend.herokuapp.com/tms/${id}`,{
      name: data.name,
      email: data.email,
      speciality: data.speciality
    })
     .then((recv) => {console.log(recv.id)})
     .then(err => console.log(err))
    //  setData({
    //   name: "",
    //   email:"",
    //   speciality:""
    // })
     
  }




  return (
    <div>
      <h1>Edit Students</h1>
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
    <label >Specialization</label>
    <input name='speciality' onChange={handleChange} class="form-control"  placeholder="grades"/>
  </div>

  <button onClick={handleUpdate} type="submit" class="btn btn-primary" style={{width:"90px"}}>Update</button>
  <Link class="btn btn-primary mr-2" to="/Tm" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    Back
                  </Link>

  <Link class="btn btn-primary mr-2" to="/Tm" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    Cancel
                  </Link>
</form>
        
    </div>
    
  )
}

export default Edit
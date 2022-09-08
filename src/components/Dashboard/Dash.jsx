import React, { useEffect, useState } from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Dash = () => {

    const [tminfo, setTminfo] = useState({
      name: "",
      email:"",
      speciality:""
    })

    const handleChange = (e) =>{
      const {name, value} = e.target
      setTminfo({...tminfo, [name]:value})
    }

    // useEffect(()=> {
    //   axios.post("http://localhost:9292/tms",{
    //     name: tminfo.name,
    //     email: tminfo.email,
    //     speciality: tminfo.speciality
    //   })
    // },[])


    const submit = (event) =>{
      event.preventDefault()
      console.log(tminfo)
      axios.post("http://localhost:9292/tms",{
        name: tminfo.name,
        email: tminfo.email,
        speciality: tminfo.speciality
      })
       .then((recv) => {console.log(recv)})
       .then(err => console.log(err))
    }


  return (
    <div className='formation'>
      <form action="">
        <div className='info'>
        <label>Name</label>
        <input name="name" type="text" placeholder='enter name' value={tminfo.name} onChange={handleChange}/> 
        {/* onChange={(event) => {setJina(event.target.value)}} or onChange={(e) => setTminfo({...tminfo, name: e.target.value})}*/}
        <label>Email</label>
        <input name="email" type="text" placeholder='enter name' value={tminfo.email} onChange={handleChange}/>
        <label>Speciality</label>
        <input name="speciality" type="text" placeholder='enter name' value={tminfo.speciality} onChange={handleChange}/>
        <button onClick={submit}> submit</button>
        <button>Delete</button>
        <Link to="/">Cancel</Link>

        </div>

      </form>

    </div>
  )
}

export default Dash
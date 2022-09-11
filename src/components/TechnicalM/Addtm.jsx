import axios from 'axios'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'


const Addtm = () => {

  // const handleClick = (id) =>{
  //   axios.delete(`http://localhost:9292/tms/#{id}`)
  //   .then((resv) => {console.log(resv.data)})
  // }

    const [data, setData] = useState([""])

    // useEffect(()=> {
    //     axios("http://localhost:9292/tms")
    //     .then((recv) => {setData(recv.data)})

        
    // },[])

    const fetching = () => {
      axios("https://digio-backend.herokuapp.com/tms")
      .then((recv) => setData(recv.data))
    }

    const Fetching = () => {
      useEffect(()=> {
        axios("https://digio-backend.herokuapp.com/tms")
        .then((recv) => {setData(recv.data)})

        
    },[])

    }
    Fetching()



    const Deleter = (id) =>{

     axios.delete(`https://digio-backend.herokuapp.com/tms/${id}`)
    //  console.log(data)
     alert("Deleted")
     window.location.reload(false);
    }

    const handleUpdate = (id) =>{
      console.log(`id is ${id}`)
    }



  return (
    <div>
      <h1>Technical mentors</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Specialization</th>
      <Link class="btn btn-primary mr-2" to="/Add" style={{background:"Black", border:"none", width:"90px", height:"40px"}}>
                    Add
                  </Link>
      {/* <button style={{background:"black", width:"100px"}} class="btn btn-primary mr-2 btn-dark">Add</button> */}

    </tr>
  </thead>
  <tbody>
    
      <th scope="row">1</th>
      {
        data.map((resv, index) => (
          
            <tr>
                <th scope='row'>{index + 1}</th>
                <td>{resv.name}</td>
                <td>{resv.email}</td>
                <td>{resv.speciality}</td>
                <Link onClick={() => handleUpdate(resv.id)} to='/Edit' class="btn btn-primary mr-2"  style={{background:"gray", border:"none", width:"90px", height:"40px"}}>
                    Edit
                  </Link>



                <button onClick={()=>Deleter(resv.id)}  style={{border:"none", background:"Red", width:"90px", marginBottom:"1.2rem", marginLeft:"10px"}} type="button" class="btn btn-dark">Delete</button>


            </tr>
        ))
      }
     
  </tbody>
</table>
    </div>
  )
}

export default Addtm

import axios from 'axios'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'

const Addcourses = () => {

    const [data, setData] = useState([""])

    const remover = (id) =>{
      axios.delete(`https://digio-backend.herokuapp.com/description/${id}`)
      alert("Deleted please refresh")
    }

    useEffect(()=> {
        axios("https://digio-backend.herokuapp.com/description")
        .then((recv) => {setData(recv.data)})
    },[])
    // console.log(data)

  return (
    <div>
      <h1>Manage courses</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      {/* <th scope="col">Specialization</th> */}
      <Link class="btn btn-primary mr-2" to="/Pushcourse" style={{background:"Black", border:"none", width:"90px", height:"40px"}}>
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
                <td style={{width:"240px"}}>{resv.course_name}</td>
                <td style={{width:"680px"}}>{resv.description}</td>
                {/* <td>{resv.speciality}</td> */}
                <Link class="btn btn-primary mr-2" to="/CourseEdit" style={{background:"gray", border:"none", width:"90px", height:"40px"}}>
                    Edit
                  </Link>

                  {/* <Link class="btn btn-primary mr-2" to="/Edit" style={{background:"red", border:"none", width:"90px", height:"40px"}}>
                    Delete
                  </Link> */}

                <button onClick={() => remover(resv.id)} style={{border:"none", background:"Red", width:"90px", marginBottom:"1.2rem", marginLeft:"10px"}} type="button" class="btn btn-dark">Delete</button>


                {/* <button class="btn btn-primary mr-2"></button> */}


            </tr>
        ))
      }
     
  </tbody>
</table>
    </div>
  )
}

export default Addcourses

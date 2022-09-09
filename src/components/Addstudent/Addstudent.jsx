import axios from 'axios'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import Edit from '../Edit/Edit'


const Addstudent= () => {



    const [data, setData] = useState([""])

    useEffect(()=> {
        axios("http://localhost:9292/student")
        .then((recv) => {setData(recv.data)})
    },[])
    // console.log(data.map((resv) => 
    //   console.log(resv)
    // ))

    // const editstu = data.map((thing) => ( 

    // ))
    

    const remover = () =>{
      axios.delete(`http://localhost:9292/student/`)
    }



  return (
    <div>
      <h1>Students</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Grades</th>
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
                <td>{resv.grades}</td>


                <Link class="btn btn-primary mr-2" to="/Edit" style={{background:"gray", border:"none", width:"90px", height:"40px"}}>
                    Edit
                  </Link>

                  {/* <Link class="btn btn-primary mr-2" to="/Edit" style={{background:"red", border:"none", width:"90px", height:"40px"}}>
                    Delete
                  </Link> */}

                <button onClick={remover} style={{border:"none", background:"Red", width:"90px", marginBottom:"1.2rem", marginLeft:"10px"}} type="button" class="btn btn-dark">Delete</button>


            </tr>
        ))
      }
     
  </tbody>
</table>
    </div>
  )
}

export default Addstudent


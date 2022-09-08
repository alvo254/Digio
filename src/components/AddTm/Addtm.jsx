import axios from 'axios'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'

const Addtm = () => {

    const [data, setData] = useState([""])

    useEffect(()=> {
        axios("http://localhost:9292/tms")
        .then((recv) => {setData(recv.data)})
    },[])
    // console.log(data)

  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Specialization</th>
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
                <button class="btn btn-primary mr-2">delete</button>
                <button class="btn btn-primary mr-2 btn-dark">edit</button>
                <button type="button" class="btn btn-dark">Dark</button>
                <button type="button" class="btn btn-danger">Dark</button>
                {/* <button class="btn btn-primary mr-2"></button> */}
                {/* <Link class="btn btn-primary mr-2" to={`/courses/${courses.id}`}>
                    View
                  </Link> */}

            </tr>
        ))
      }
      {/* <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td> */}
    
  </tbody>
</table>
    </div>
  )
}

export default Addtm

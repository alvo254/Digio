import axios from 'axios'
import "./Home.css"
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [course, setCourse] = useState([""])

  useEffect(() => {
    axios("https://digio-backend.herokuapp.com/description")
    .then((resp) => setCourse(resp.data))


  },[])

  return (
    <div>


      <h1>
        Courses
      </h1>
      <div className="card" style={{width:"18rem"}}>
        {course.map((item) => (
          
           <div className="card-body">
           <h5 className="card-title">{item.course_name}</h5>
           {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
           <p className="card-text">{item.description}</p>
       
         </div>

         
        ))}

</div>
      
    </div>
  )
}

export default Home
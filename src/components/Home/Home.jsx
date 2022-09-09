import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [course, setCourse] = useState([""])

  useEffect(() => {
    axios("http://localhost:9292/courses")
    .then((resp) => setCourse(resp.data))


  },[])

  return (
    <div>


      <h1>
        Courses
      </h1>
      <div class="card" style={{width:"18rem"}}>
        {course.map((item) => (
          
           <div class="card-body">
           <h5 class="card-title">{item.course_name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
           <p class="card-text">{item.description}</p>
       
         </div>
        ))}
  {/* <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div> */}
</div>
      
    </div>
  )
}

export default Home
import React from 'react'
import "./Edit.css"
import { Link } from 'react-router-dom'


const Edit = () => {
  return (
    <div>
        <form className="editTm">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Specialization</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary">update</button>

  <Link class="btn btn-primary mr-2" to="/Tm" style={{background:"gray", border:"none", width:"90px", height:"40px", marginTop:"20px", marginLeft:"1rem"}}>
                    Cancel
                  </Link>
</form>
        
    </div>
    
  )
}

export default Edit
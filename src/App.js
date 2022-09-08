import {   BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Nav from './components/Nav/Nav';
import Dash from './components/Dashboard/Dash';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import AddTm from './components/AddTm/Addtm'
import Addstudent from './components/Addstudent/Addstudent';
import Edit from './components/Edit/Edit';
import Add from './components/Add/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav/>
      

      <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dash />}/>
      <Route path='/reviews' element={<Reviews />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/Tm' element={<AddTm />}/>
      <Route path='/students' element={<Addstudent />}/>
      <Route path='/Edit' element={<Edit />}/>
      <Route path='/Add' element={<Add />}/>

      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

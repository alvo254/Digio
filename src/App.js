import {   BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Nav from './components/Nav/Nav';
import Dash from './components/Dashboard/Dash';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav/>
      

      <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dash />}/>

      

      
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

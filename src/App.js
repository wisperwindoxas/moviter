import React, {useContext} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import TrailPopup from './components/TrailPopup'
import Home from './Home'
import {currentPages} from './components/contextApi'


function App() {

  const [currentPage,] = useContext(currentPages)

  

  return (
    <div className="App">
        <Routes>
          <Route index path="/" element={<Home currentPage={currentPage}/>} excet />
          <Route path="popular/:id" element={<TrailPopup/>} excet />
          <Route path="popular/*" element={<TrailPopup/>}  />
          
      </Routes>
        
    </div>
  );
}

export default App;

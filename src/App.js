import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import TrailPopup from './components/TrailPopup'
import Home from './Home'

import SearchResult from './components/SearchResult';
import Genres from './components/Genres';




function App() {

 

  return (
    <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} excet />
          <Route  path="/page/:id" element={<Home />} excet />
          <Route path="/popular/:id" element={<TrailPopup/>} excet />
          <Route path="/page/:id/popular/:id" element={<TrailPopup/>} excet />
          <Route path="/:id" element={<TrailPopup/>}  excet/>
          <Route path="/search/:id" element={<SearchResult/>}  excet />
          <Route path="/movies/:id/:slug" element={<Genres/>}  excet />
          <Route path="/movies/:id/:slug/popular/:id" element={<TrailPopup/>}  excet />        
      </Routes>
        
    </div>
  );
}

export default App;

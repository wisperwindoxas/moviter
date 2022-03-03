import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import TrailPopup from './components/TrailPopup'
import Home from './Home'
function App() {

  


  const [currentPage, setCurrentPage] = React.useState(1)
  const [page,] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home currentPage={currentPage}/>} excet />
          <Route path="popular/:id" element={<TrailPopup/>} excet />
          <Route path="popular/*" element={<TrailPopup/>}  />
      </Routes>
    <div className="container">
      	<div className="pagination ">
			{page.map(page => {
				return <p onClick={() => setCurrentPage(page)} key={page}>{page}</p>
			})}
			
		</div>
    </div>
    </div>
  );
}

export default App;

import './App.css';
import {Routes, Route} from 'react-router-dom'
import TrailPopup from './components/TrailPopup'
import Home from './Home'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} excet />
          <Route path="/:id" element={<TrailPopup/>} />
      </Routes>
    </div>
  );
}

export default App;

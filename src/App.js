import './App.css';
import Login from './components/Login';
import Logo from './components/Logo';
import Search from './components/Search';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
          <header>
            <Logo/>
            <Search/>
            <Login/>
          </header>

          <Slider/>
    </div>
  );
}

export default App;

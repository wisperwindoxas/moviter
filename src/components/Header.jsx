import React from 'react'
import Search from './Search';
import Login from './Login';
import Logo from './Logo';
import usaFlag from './img/usa.png'
import rusFlag from './img/rus.png'
import {Language} from './contextApi'
import Categories from './Categories';
export default function Header() {

  const [, setLanguage] = React.useContext(Language)
  const [menu, setMenu] = React.useState(false)
  const selectEng = () => {
    setLanguage("eng")
    localStorage.setItem('language', 'eng')
  }

  const selectRus = () => {
    setLanguage("rus")
    localStorage.setItem('language', 'rus')
  }




  return (
    <header>
      <div className="container">
        <div className="full_page">
     
          <Logo />
          <Search />
          <Login />
        
     
        <div className="language">
            <span onClick={selectEng}>
              <img src={usaFlag} alt="ENG" />
              ENG
            </span>
            <span onClick={selectRus}>
              <img src={rusFlag} alt="RUS" />
              RUS
            </span>
        </div>
        </div>
     
    
      <div className="mobil_page">
        
        <svg style={menu ? {opacity:0, transform:"translateX(140px)"} : {opacity: 1}} onClick={() => setMenu(true)}  className='menu' fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="32px" height="32px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
      
          <Logo/>
         <svg className='searchBtns'  fill="#fff" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
      </div>
      </div>

      <div style={menu ? {transform: "translateX(0)"}: {transform: "translateX(-100%)"}} className="menu_left">
        
      <svg style={menu ? {opacity:1} : {opacity: 0,  transform:"translateY(-180px)"}} onClick={() => setMenu(false)}  className='close' fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="25px" height="25px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
          <div className="mobile_categories">
             <Categories/>
          </div>
      </div>
    </header>
  );
}

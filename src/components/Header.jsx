import React from 'react'
import Search from './Search';
import Login from './Login';
import Logo from './Logo';
import usaFlag from './img/usa.png'
import rusFlag from './img/rus.png'
import {Language} from './contextApi'
export default function Header() {

  const [, setLanguage] = React.useContext(Language)

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
    </header>
  );
}

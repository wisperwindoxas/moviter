import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {currentPages, Language} from './components/contextApi'

function Apps (){

   const [currentPage, setCurrentPage] = React.useState(1)
   const [language, setLanguage] = React.useState('eng')

  return (
      <currentPages.Provider value={[currentPage, setCurrentPage]}>
      <Language.Provider value={[language, setLanguage]}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
      </Language.Provider>
      </currentPages.Provider>
  )
}

ReactDOM.render(
   <React.StrictMode>
      <Apps/>
   </React.StrictMode>
 ,
  document.getElementById('root')
);


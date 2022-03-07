import React from 'react'
import Header from './components/Header';
import MoviesBlock from './components/MoviesBlock';
import Paginations from './components/Pagination';
import Slider from './components/Slider';



export default function Home({currentPage}) {
  return (
    <div className='home'>
      
        <Header/>
          <Slider/>

          <MoviesBlock currentPage={currentPage}/>
         <Paginations/>
    </div>
  )
}

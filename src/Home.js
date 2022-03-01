import React from 'react'
import Header from './components/Header';

import MoviesBlock from './components/MoviesBlock';

import Slider from './components/Slider';

export default function Home() {
  return (
    <div className='home'>
      
        <Header/>
          <Slider/>

          <MoviesBlock/>
    </div>
  )
}

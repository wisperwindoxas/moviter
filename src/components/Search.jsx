import React from 'react'
import {Link} from 'react-router-dom'


export default function Search() {

  const [isValueLength, setIsValueLength] = React.useState('')



  function getValueInfo(e) {
      setIsValueLength(e.target.value)
  }

  const enterSearch = (e) => {
  
      if(e.code === 'Enter'){
        setIsValueLength(e.target.value)
        console.log(isValueLength);
      }else{
        setIsValueLength("")
      }
  }
  
  return (
      <div className="wrapper">
         <form action={`/search/${isValueLength}`}>
        <div className='search'>
         
            
         
            <svg  fill="gray" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
            
            <input   onInput={(e) => getValueInfo(e)} type="search"  placeholder='Search for Movies,TV Series, Celebrities & more' required={true}/>
            
            {isValueLength.length > 1 ? <Link  onKeyDown={(e) =>  enterSearch(e)} to={`/search/${isValueLength}`}><input    className='searchBtn' type="button" value="Search" /></Link> : <button  className='searchBtn'>Search</button>}
        </div>
          
        </form>
    </div>
  )
}
import React from 'react'
import axios  from 'axios'
import {Link} from 'react-router-dom'

export default function Search() {

  const searchValue = React.useRef(null)

  const [searchs, setSearchs] = React.useState('')
  const [result, setResult] = React.useState([])

  React.useEffect(() => {
     async function getSearchResult(){
          const search = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60413a5f672cfb8007082bc512040ca2&language=${localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'}&query=${searchs}&page=1&include_adult=false`)
          setResult(search.data)
      }

      return getSearchResult()
  }, [searchs])


  const searchMovies = (e) => {
      setSearchs(searchValue.current.value)
  }

  console.log(result);


  return (
      <div className="wrapper">
        <div className='search'>
            <svg  fill="gray" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
            <input ref={searchValue} type="search"  placeholder='Search for Movies,TV Series, Celebrities & more'/>
            <Link to="/search"><button onClick={(e) => searchMovies(e)} className='searchBtn'>Search</button></Link>
        </div>
    </div>
  )
}

import React from 'react'
import { Language } from './contextApi'
import { Link } from 'react-router-dom';
import axios from 'axios'


export default function Categories() {


    const [categories, setCategories] = React.useState([])
    const [language] = React.useContext(Language)

    React.useEffect(() => {
        async function getGenres() {
          const response = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=60413a5f672cfb8007082bc512040ca2&language=${localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
            }&include_adult=true`
          );
    
          setCategories(response.data.genres);
        }
    
        return getGenres()
      }, [setCategories, language])




  return (
    <div className="categories">
        {categories.map((categorie) => {
        return <Link key={categorie.id} to={`/movies/${categorie.id}/${categorie.name}`}><p >{categorie.name}</p></Link>;
        })}
    </div>
  )
}

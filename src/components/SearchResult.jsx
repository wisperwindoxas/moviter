import React from 'react'
import Header from './Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';


export default function SearchResult() {
    const { id } = useParams()
    const [result, setResult] = React.useState([])

    console.log(result);

    React.useEffect(() => {
        async function getSearchResult() {
            const search = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60413a5f672cfb8007082bc512040ca2&language=${localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'}&query=${id}&page=1&include_adult=false`)
            setResult(search.data.results)
        }

        return getSearchResult()
    }, [id])



    return (
        <div className='movies_reasult'>
            <Header />
            <div className="container">
                <div className="movies_block">
               
                       { result.map(film => {
                            return (
                               <div key={film.id} className="movies_container">
                               <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                               <div className="movies_search_info">
                                   <h1>{film.title}</h1>
                                   <p>{film.overview}</p>
                                   <strong>{film.release_date}</strong>
                                   <button className='btnWatch'>Watch</button>
                               </div>
                            </div>
                            )
                        })
                }

                </div>
            </div>
        </div>
    )
}

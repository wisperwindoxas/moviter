import React, {useContext} from 'react'
import Header from './Header'
import {Link, useParams} from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import axios from 'axios'
import {Language} from './contextApi'
import ScrollToTop from 'react-scroll-to-top';
import {animateScroll as scroll } from "react-scroll";

export default function Genres() {

    const {id,slug} = useParams()
    const {language} = useContext(Language)



    const [genres, setGenres] = React.useState([])
    const [pageCurrent, setPageCurrent] = React.useState(1);
    const [page, setPage] = React.useState(1);

    function getCurrenPages(num){
        setPage(num);
      
    }
    const scrollHandler = () => {
        scroll.scrollToTop(500);
       
      }
    

    React.useEffect(() => {
            async function getGenresResult(){
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=60413a5f672cfb8007082bc512040ca2&language=${
                    localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
                  }&page=${page}&with_genres=${id}`)
                setGenres(response.data.results)
                setPageCurrent(response.data.total_pages)
            }

            return getGenresResult()
    }, [id,page,language])


  return (
    <div className='genres'>
        <ScrollToTop top="0" smooth color="#6f00ff" />;
        <Header/>
        <div className="container">
        <h1 className='genre_name'>{slug}</h1>
        <div className="wrapper_categories">
        
        {genres.map(film => {
            return (
            <Link  key={film.id} to={`popular/${film.id}`}>
            <div
               
                className="movies_blocks"
                 style={{
                    background: `url(https://image.tmdb.org/t/p/w500/${film.poster_path})`,
                  
                    
                }}
            >
                <div className="top_screen"></div>
                <div className="movies_blocks_info">
                    <h3>{film.title}</h3>
                    <p>genres</p>
                    <div className="title_movies">
                        <div className="time_data">
                            <strong>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208 114.86 0 208-93.14 208-208 0-114.69-93.31-208-208-208zm108 240H244a4 4 0 01-4-4V116a4 4 0 014-4h24a4 4 0 014 4v140h92a4 4 0 014 4v24a4 4 0 01-4 4z"></path></svg>
                                14:50
                            </strong>
                            <strong>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path></svg>
                                {film.release_date}
                            </strong>
                        </div>
                    </div>
                   
                </div>
            </div>
            </Link>
            )
            
        })}

        
            
            </div>
            <div className="pagin">
          <Pagination
              onChange={(_, num) => getCurrenPages(num)}
              onClick={() => scrollHandler()}
              count={pageCurrent}
              page={page}
              size="large"
              defaultPage={1}
              color="warning"
            />
          </div>
        </div>
    </div>
  )
}

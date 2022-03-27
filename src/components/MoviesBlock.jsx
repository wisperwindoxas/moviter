import React from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios'
import {Language} from './contextApi'
import ScrollToTop from 'react-scroll-to-top';


export default function MoviesBlock({currentPage}) {
  const [films, setFilms] = React.useState([]);
  const [categories, setCategories] = React.useState([])
  const [language] = React.useContext(Language)

  React.useEffect(() => {
    async function getFilmsPoster() {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=60413a5f672cfb8007082bc512040ca2&language=${
          localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
        }&page=${currentPage}`
      )
        .then((res) => res.json())
        .then((json) => setFilms(json.results));
    }

    return getFilmsPoster();
  }, [currentPage, language]);


  React.useEffect(() => {
      async function getGenres(){
         const response = await axios.get(
           `https://api.themoviedb.org/3/genre/movie/list?api_key=60413a5f672cfb8007082bc512040ca2&language=${
             localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
           }`
         );

         setCategories(response.data.genres);
      }

      return getGenres()
  },[setCategories, language])

  
  return (
    <div className="container">
      <div className="wrapper_movies">
        <ScrollToTop smooth color="#6f00ff" />;
        <div className="categories">
          {categories.map((categorie) => {
            return <p key={categorie.id}>{categorie.name}</p>;
          })}
        </div>
        <div className="movies_cards">
          {films.map((film) => {
            return (
              <Link key={film.id} to={`popular/${film.id}`}>
                <div
                  style={{
                    background: `url(https://image.tmdb.org/t/p/w500${film.poster_path})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                  className="card"
                >
                  <div className="title">
                    <h3>{film.title}</h3>

                    <div className="info_movies">
                      <div className="rating">
                        <img src="./imbd.png" alt="" />
                        <p>{film.vote_average}</p>
                      </div>
                      <div className="time">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="20px"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                        </svg>
                        <p>{film.filmLength} m</p>
                      </div>
                      <div className="calendar">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"></path>
                        </svg>
                        <p>{film.release_date}</p>
                      </div>
                    </div>

                    <button className="watch">
                      смотреть
                      <svg
                        stroke="currentColor"
                        fill="#fff"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="20px"
                        width="30px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

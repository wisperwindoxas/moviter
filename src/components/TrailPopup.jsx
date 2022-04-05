import React from 'react';
import {useParams} from 'react-router-dom'
import Header from './Header';
import axios from 'axios'
import Recommendations from './Recommendations';
import Modal from './Modal';
import {animateScroll as scroll } from "react-scroll";

import {Language} from './contextApi'

export default function TrailPopup() {

  const [movieInfo, setMovieInfo]  = React.useState([])
  const [genres, setGenres]  = React.useState([])
  const [cast, setCast]  = React.useState([])
  const [modal, setModal]  = React.useState(false)
  const [movieVideo, setMovieVideo]  = React.useState(false)
  const {id} = useParams()
  const [language] = React.useContext(Language)

  React.useEffect(() => {
    async function getMovieInfo() {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=60413a5f672cfb8007082bc512040ca2&language=${
            localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
          }`
        );

        setMovieInfo(response.data)
        setGenres(response.data.genres)
    }

    return getMovieInfo()
  }, [id, language])

  React.useEffect(() => {
    async function getMoviesCast(){
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=60413a5f672cfb8007082bc512040ca2&language=${
          localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
        }`
      );

      setCast(response.data.cast)
    }
    getMoviesCast()
  }, [id,language])

  React.useEffect(() => {
    async function getMoviesVideo(){
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=60413a5f672cfb8007082bc512040ca2&language=${
          localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
        }`
      );

      setMovieVideo(response.data.results)
    }
    getMoviesVideo()
    //
  }, [id, language])

  
  const scrollHandler = () => {
    scroll.scrollToTop();
    scroll.scrollTo(0,{
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  }

  return (
    <div className="trail">
      <Header />

      <div
        className="videoTrail"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
        }}
      >
        <div className="movieBlock">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt=""
            />
          </div>
          <div className="movies_info">
            <h1>{movieInfo.title}</h1>
            <div className="movie_genres">
              <p>{movieInfo.release_date} </p>
              <ul className="genres">
                {genres.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
            <h3>{language === 'eng' ? 'Overview' : 'Описания'}</h3>
            <p className="overview">{movieInfo.overview}</p>
            <button onClick={() => setModal(true)} className="watchBtn">
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
              </svg>
              {language === 'eng' ? 'Watch Trial' : 'Посмотреть Трейлер'}
            </button>
            {modal ? <Modal video={movieVideo} setModal={setModal} /> : ''}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cast">
          <h3>Top Billed Cast</h3>
          <div className="castPeople">
            {cast.map((cast) => {
              return (
                <div key={cast.id} className="castActories">
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                    alt=""
                  />
                  <div className="  ">
                    <strong>{cast.name}</strong>
                    <p>{cast.character}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Recommendations id={id} onClick={scrollHandler} />
    </div>
  );
}

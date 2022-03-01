import React from 'react';
import {useParams} from 'react-router-dom'
import Header from './Header';
import axios from 'axios'


export default function TrailPopup({setPopup }) {

  const [movieInfo, setMovieInfo]  = React.useState([])
  const [genres, setGenres]  = React.useState([])
  const {id} = useParams()





  React.useEffect(() => {
   async function getFilmsId() {
      
         await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=60413a5f672cfb8007082bc512040ca2&language=en-US`
        )
          .then((res) => res.json())
          .then((json) => GetVideo(json));
      
    }

    return getFilmsId();
  }, [id]);

  React.useEffect(() => {
    async function getMovieInfo() {
        const response =  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=60413a5f672cfb8007082bc512040ca2&language=ru-RU`)

        setMovieInfo(response.data)
        setGenres(response.data.genres)
    }

    return getMovieInfo()
  }, [id])

  console.log(movieInfo);

  const GetVideo = ({results}) => {
	  return (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${results[0].key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
	  )
  }




  return (
    <div className="trail">
      <Header/>
      
      <div className="videoTrail" style={
        {
          backgroundImage:`url(https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path})`,
          backgroundSize:"60%",
          backgroundRepeat:"no-repeat",
          backgroundPosition:'top right'
      }
        }>
         <div className="movieBlock">
          <div className="poster">
              <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt="" />
            </div>
            <div className="movies_info">
                  <h1>{movieInfo.title}</h1>
                  <div className="movie_genres">
                    <p>{movieInfo.release_date} </p>
                    <ul className='genres'>
                          {genres.map(item => {
                            return <li>{item.name}</li>
                          })}
                    </ul>
                  </div>
                <p className='overview'>
                  <h3>описания</h3>
                  {movieInfo.overview}
                </p>
            </div>
         </div>
      </div>
    
    </div>
  );
}

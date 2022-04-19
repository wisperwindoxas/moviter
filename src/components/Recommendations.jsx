import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import {Language} from './contextApi'


export default function Recommendations({onClick}) {
 const {id} = useParams()
 const [language] = React.useContext(Language)

  const [recoment, setRecoment] = React.useState([]);
  React.useEffect(() => {
    async function getRecomintion() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=60413a5f672cfb8007082bc512040ca2&language=${
          localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
        }&page=1`
      );
      const { results } = response.data;
      setRecoment(results);
    }
    return getRecomintion();
  }, [id, language]);

  return (
    <div className="container">
      <h3 style={{ textAlign: 'left' }}>Recomendatsiya</h3>
      <div className="recomendtion">
        {recoment.map((recoment) => {
          return (
            <Link onClick={() => onClick()} key={recoment.id}  to={`/${recoment.id}`}>
              <div
                key={recoment.id}
                className="movies_recoment"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w200/${recoment.poster_path}) no-repeat`,
                  backgroundSize: 'cover',
                  backgroundPosition: '100%',
                }}
              >
                <div className="overview_info">
                    <h3>{recoment.title}</h3>
                    <p>{recoment.overview}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

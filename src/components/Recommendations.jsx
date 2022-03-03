import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
export default function Recommendations() {
 const {id} = useParams()
 console.log(id);

  const [recoment, setRecoment] = React.useState([]);
  React.useEffect(() => {
    async function getRecomintion() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=60413a5f672cfb8007082bc512040ca2&language=ru-RU&page=1`
      );
      const { results } = response.data;
      setRecoment(results);
    }
    return getRecomintion();
  }, [id]);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'left' }}>Recomendatsiya</h1>
      <div className="recomendtion">
        {recoment.map((recoment) => {
          return (
            <Link key={recoment.id}  to={`${recoment.id}`}>
              <div
                key={recoment.id}
                className="movies_recoment"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w200/${recoment.poster_path}) no-repeat`,
                  backgroundSize: 'cover',
                  backgroundPosition: '100%',
                }}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

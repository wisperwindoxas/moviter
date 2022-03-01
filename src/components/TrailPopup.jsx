import React from 'react';

export default function TrailPopup({ id, setPopup }) {
  

  React.useEffect(() => {
    async function getFilmsId() {
      setTimeout(() => {
         fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=60413a5f672cfb8007082bc512040ca2&language=en-US`
        )
          .then((res) => res.json())
          .then((json) => GetVideo(json));
      }, 1000);
    }

    return getFilmsId();
  }, [id]);

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
      <div className="close" onClick={() => setPopup(false)}>
        <svg
          stroke="currentColor"
          fill="#fff"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="40px"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
        </svg>
      </div>
      <div className="videoTrail">


      </div>
      <div className="movies_info"></div>
    </div>
  );
}

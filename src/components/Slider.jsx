import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { currentPages, Language } from './contextApi';
import { Link } from 'react-router-dom';
export default function Slider() {


  const [sliderImg, setSliderImg] = React.useState([]);
  const [currentPage] = React.useContext(currentPages);
  const [language] = React.useContext(Language)
  React.useEffect(() => {
    async function getFilmsPoster() {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=60413a5f672cfb8007082bc512040ca2&language=${localStorage.getItem('language') === 'eng'
          ? "en-US":"ru-RU"}&page=${currentPage}`
      )
        .then((res) => res.json())
        .then((json) => setSliderImg(json.results));
    }

    return getFilmsPoster();
  }, [currentPage, language]);


  return (
    <div className="container">
      <div className="slider">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={35}
        >
          {sliderImg.map((slider) => {
            return (
              <Link key={slider.id} to={`popular/${slider.id}`}>
                <div
                  key={slider.id}
                  className="slider_img"
                  style={{ margin: '10px' }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${slider.poster_path}`}
                    alt={slider.title}
                  />
                  <p className="legend">{slider.title}</p>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

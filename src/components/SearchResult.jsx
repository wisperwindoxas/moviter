import React from 'react';
import Header from './Header';
import axios from 'axios';
import ScrollToTop from 'react-scroll-to-top';
import { useParams, Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { animateScroll as scroll } from "react-scroll";
import { Language } from './contextApi';
import { motion } from "framer-motion"



export default function SearchResult() {
  const {language} = React.useContext(Language)
  const { id } = useParams();
  const [result, setResult] = React.useState([]);
  const [pageCurrent, setPageCurrent] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    async function getSearchResult() {
      const search = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=60413a5f672cfb8007082bc512040ca2&language=${localStorage.getItem('language') === 'eng' ? 'en-US' : 'ru-RU'
        }&query=${id}&page=${page}&include_adult=true`
      );
      setResult(search.data.results);
      setPageCurrent(search.data);
    }

    return getSearchResult();
  }, [id, page, language]);


  function getCurrenPages(num) {
    setPage(num);

  }


  const scrollHandler = () => {
    scroll.scrollToTop();
    scroll.scrollTo(0, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  }



  return (
    <div className="movies_reasult">
      <Header />
      <ScrollToTop smooth color="#6f00ff" />
      <div className="container">
        <div className="movies_block">
          {result.map((film) => {
            return (
              <Link key={film.id} to={`/popular/${film.id}`}>
                <motion.div 
                initial={{ opacity: 0, x:-1800 }}
                whileInView={{ opacity: 1, x:0 }}
                 animate={{ x: 0 }}
                 transition={{ type: "tween", stiffness: 100 }}
                className="movies_container"
                >
                  
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title}
                  />
                  <div className="movies_search_info">
                    <h1>{film.title}</h1>
                    <p>{film.overview}</p>
                    <strong>{film.release_date}</strong>
                    <button className="btnWatch">Watch</button>
                  </div>
                </motion.div>
              </Link>
            );
          })}
          <div className="pagination ">
            <Pagination
              onChange={(_, num) => getCurrenPages(num)}
              onClick={() => scrollHandler()}
              count={pageCurrent.total_pages}
              page={page}
              size="large"
              defaultPage={1}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

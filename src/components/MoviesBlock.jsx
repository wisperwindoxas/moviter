import React from 'react'



export default function MoviesBlock() {

	 const [films, setFilms] = React.useState([]);
	 const [page,] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
	 const [currentPage, setCurrentPage] = React.useState(1)


  React.useEffect(() => {
    async function getFilmsPoster() {
      await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`,
        {
          method: 'GET',
          headers: {
            'X-API-KEY': 'd64340e7-4400-466a-a78d-c00ed515f575',
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((json) => setFilms(json.films));
    }

    return getFilmsPoster();
  }, [setFilms, currentPage]);




  return (
	<div className="container">
		<div className="wrapper_movies">
			
			<div className="categories">
					<p>аниме</p>
					<p>биографический</p>
					<p>боевик</p>
					<p>вестерн</p>
					<p>военный</p>
					<p>детектив</p>
					<p>детский</p>
					<p>документальный</p>
					<p>драма</p>
					<p>исторический</p>
					<p>кинокомикс</p>
					<p>комедия</p>
					<p>концерт</p>
					<p>короткометражный</p>
					<p>криминал</p>
					<p>мелодрама</p>
					<p>мистика</p>
					<p>музыка</p>
					<p>мультфильм</p>
					<p>мюзикл</p>
					<p>научный</p>
					<p>нуар</p>
					<p>приключения</p>
					<p>реалити-шоу</p>
					<p>семейный</p>
					<p>спорт</p>
					<p>ток-шоу</p>
					<p>триллер</p>
					<p>ужасы</p>
					<p>фантастика</p>
					<p>фэнтези</p>
			</div>

			<div className="movies_cards">
				{films.map(film => {
					return (
					<div style={
						{background:`url(${film.posterUrlPreview})`,
						backgroundRepeat:"no-repeat",
						backgroundSize:"cover"}
					} key={film.filmId} className="card">
					
					<div className="title">
							<h3>{film.nameRu}</h3>
							<p>{film.genres[0].genre}</p>
							
							<div className="info_movies">
								<div className="rating">
									<img src="./imbd.png" alt="" />
									<p>{film.rating}</p>
								</div>
								<div className="time">
									<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
									<p>{film.filmLength} m</p>
								</div>
								<div className="calendar">
									<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"></path></svg>
									<p>{film.year}</p>
								</div>
							</div>

							<button className="watch">
								смотреть
								<svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
							</button>
					</div>

				</div>
					)
				})}
				
			</div>
			
		</div>
		

		<div className="pagination">
			{page.map(page => {
				return <p onClick={() => setCurrentPage(page)} key={page}>{page}</p>
			})}
			
		</div>
	</div>
  )
}

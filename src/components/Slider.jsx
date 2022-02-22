import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function Slider() {

    const [filmsSlider, setFilmsSlider] = React.useState([])

    React.useEffect(() => {
        async function getFilmsPoster() {
            await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=3', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'd64340e7-4400-466a-a78d-c00ed515f575',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => setFilmsSlider(json))
        }

        return getFilmsPoster()
    }, [setFilmsSlider])


    console.log(filmsSlider);

    return (
        <div className="container">
            <div className="slider">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                            <div>
                                <img src="https://anons.uz/media/news/medium/dzhent-fon_watermarked.jpeg" alt={"Джентльмены"} />
                                <p className="legend">Джентльмены</p>
                            </div>
                            <div>
                                <img src="https://www.5zvezd.ru/engine/cache/images/1de64901add4a881f29e36d4dbdc4808.jpg" alt={"Мистер Нокаут"} />
                                <p className="legend">Мистер Нокаут</p>
                            </div>
                            <div>
                                <img src="https://i.ytimg.com/vi/aNuhGEGh_40/maxresdefault.jpg" alt={"Пламенное сердце"} />
                                <p className="legend">Пламенное сердце</p>
                            </div>
                            <div>
                                <img src="https://s74794.cdn.ngenix.net/m/c13a/9141/a386/4570/9969/90d6/d8da/a1c2/1600_1000_max.jpeg" alt={"Бэтмен (2022)"} />
                                <p className="legend">Бэтмен (2022)</p>
                            </div>
                            <div>
                                <img src="https://www.tvtomsk.ru/uploads/images/2022/01/31/c4ae889b591006.jpg" alt={"Непослушник"} />
                                <p className="legend">Непослушник</p>
                            </div>
                            
                </Carousel>
            </div>
        </div>
    )
}

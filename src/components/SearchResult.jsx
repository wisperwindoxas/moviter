import React from 'react'
import Header from './Header'

export default function SearchResult() {
    return (
        <div className='movies_reasult'>
            <Header />
            <div className="container">
                <div className="movies_block">
                    <div className="movies_container">
                        <img src="https://image.tmdb.org/t/p/w500/1pCx1fyB4w0tCtuhTFfMxqhiHZa.jpg" alt="" />
                        <div className="movies_search_info">
                            <h1>Stranger</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed inventore dolore ratione voluptatibus labore ipsum magni iusto sequi, optio repudiandae id quo, minus tempora, amet accusantium voluptate modi tenetur fuga officia nesciunt velit fugiat beatae. Porro explicabo odit inventore nisi dicta distinctio totam rem.</p>
                            <strong>2022-03-10</strong>
                            <button className='btnWatch'>Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

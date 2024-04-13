import React, { useEffect, useState } from 'react'
import { MoviesWrapper } from '../movies.modules'
import axios from "axios";
import { epDiscover } from '../endpoints';

interface MovieDto {

    id:number;
    title: string;
    release_date: string;
    poster_path: string;
}

const Movies = () => {

    const [showMovies, setShowMovies] = useState<MovieDto[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        const fetchMovies = async () => {
            try{
                const response = await axios.get(epDiscover, {
                    params: {
                        page: currentPage
                    }
                });
                const {results, total_pages} = response.data;
                setShowMovies(results);
                setTotalPages(total_pages);
                console.log(results);
            } catch (error) {
                console.error("something went wrong", error);
            }
        }

        fetchMovies();
    }, [currentPage]);

    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage((prev) => prev -1)
        }
    }

    const nextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage((next) => next +1)
        }
    }

  return (
    <MoviesWrapper>

        <h1>TMDB Code Challenge</h1>
        <div className="movieCard">
        {showMovies.map( (items) => {
            return (
                <div className="movie" key={items.id}>
                    <div className="movieImg">
                        <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt='img' />
                    </div>
                    <div className="movieInfo">
                        <h4>{items.title}</h4>
                        <p>{items.release_date}</p>
                    </div>
                </div>
            )
        })}
        </div>
        <div className="buttons">
            {currentPage > 1 && (
                <button className='btnPrev' onClick={prevPage}>Back</button>
            )}
            <p>Page | {currentPage}</p>
            {currentPage < totalPages && (
                <button className='btnNext' onClick={nextPage}>Next</button>
            )}
        </div>
    </MoviesWrapper>
  )
}

export default Movies
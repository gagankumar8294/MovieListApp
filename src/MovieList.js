import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {

        const { movies , increaseStars , decreaseStars, favToggle, toggleCart} = props;
        
        return (
            <>
                {movies.map((movie , index) => 
                    <MovieCard key={index} 
                    movies = {movie}  
                    increaseStars = {increaseStars}
                    decreaseStars = {decreaseStars}
                    favToggle = { favToggle }
                    toggleCart = { toggleCart}
                    />
                )}
            </>
        )
    }

export default MovieList;
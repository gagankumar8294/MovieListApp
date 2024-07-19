import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {

    render() {

        const { movies , increaseStars , decreaseStars, favToggle, toggleCart} = this.props;
        
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
}

export default MovieList;
import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {

    constructor() {
        super();
        this.state = {
            title : 'Avengers',
            plot: 'Supernatural powers',
            price: 99,
            rating : 8.9,
            stars : 0,
            fav : true,
        }
    }

    render() {
        return (
            <>
                <MovieCard movies={this.state}/>
            </>
        )
    }
}

export default MovieList;
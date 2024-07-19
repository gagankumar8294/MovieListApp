import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {

    constructor() {
        super();
        this.state = {
            movies : [
                {
                    "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
                    "title": "Inception",
                    "plot": "Dream manipulation",
                    "price": 120,
                    "rating": 9.1,
                    "stars": 0,
                    "fav": false,
                    "isInCart": false,
                },
                {
                    "image": "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
                    "title": "The Dark Knight",
                    "plot": "Vigilante justice",
                    "price": 110,
                    "rating": 9.0,
                    "stars": 0,
                    "fav": false,
                    "isInCart": false,
                },
                {
                    "image": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
                    "title": "Interstellar",
                    "plot": "Space exploration",
                    "price": 130,
                    "rating": 8.6,
                    "stars": 0,
                    "fav": false,
                    "isInCart": false,
                },
                {
                    "image": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
                    "title": "The Matrix",
                    "plot": "Virtual reality",
                    "price": 99,
                    "rating": 8.7,
                    "stars": 0,
                    "fav": false,
                    "isInCart": false,
                }
            ]
        }
    }

    handleIncStars = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);
        
        if (movies[movieId].stars >= 5) {
            return;
        }
        movies[movieId].stars += 0.5;
        this.setState({
            movies: movies,
        })
    }

    handleDecStars = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);
        
        if (movies[movieId].stars <= 0) {
            return;
        }
        movies[movieId].stars -= 0.5;
        this.setState({
            movies: movies,
        })
    }

    handleToggleFav = (movie) => {
        const { movies } = this.state;

        const movieId = movies.indexOf(movie);
        movies[movieId].fav = !movies[movieId].fav;
        this.setState({ movies });
    }

    handleToggleCart = (movie) => {
        const { movies } = this.state;
        const movieId = movies.indexOf(movie);
        movies[movieId].isInCart = !movies[movieId].isInCart;
        this.setState({ movies });
    }

    render() {

        const { movies } = this.state;
        
        return (
            <>
                {movies.map((movie , index) => 
                    <MovieCard key={index} 
                    movies = {movie}  
                    increaseStars = {this.handleIncStars}
                    decreaseStars = {this.handleDecStars}
                    favToggle = { this.handleToggleFav }
                    toggleCart = { this.handleToggleCart}
                    />
                )}
            </>
        )
    }
}

export default MovieList;
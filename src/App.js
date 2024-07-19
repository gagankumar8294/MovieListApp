import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            movies : movies,
            cartCount : 0,
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
        let { movies , cartCount } = this.state;
        const movieId = movies.indexOf(movie);
        movies[movieId].isInCart = !movies[movieId].isInCart;
        if(movies[movieId].isInCart ){
            cartCount += 1;
        }
        else {
            cartCount -= 1;
        }
        this.setState({ movies, cartCount });
    }

    render() {

        const { movies , cartCount} = this.state

        return (
            <>
                <Navbar cartCount = {cartCount}/>
                <MovieList movies={movies}
                increaseStars = {this.handleIncStars}
                decreaseStars = {this.handleDecStars}
                favToggle = { this.handleToggleFav }
                toggleCart = { this.handleToggleCart}/>
            </>
        )
    }
}

export default App;
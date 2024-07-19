import React from "react";

class MovieCard extends React.Component {

    render() {
        const { movies , decreaseStars , increaseStars , favToggle , toggleCart } = this.props;
        const { title, image , plot, price, rating, stars, fav, isInCart } = this.props.movies;
        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={image} />
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>
                    
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            
                            <img className="str-btn" 
                            alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                            onClick={() => {decreaseStars(movies)}}/>

                            <img className="str-btn" 
                            alt="star-icon" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                            
                            <img className="str-btn" 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                            onClick={() => {increaseStars(movies)}}/>
                            
                            <span className="starCount">{stars}</span>
                        </div>
                        <button className="favourite-btn" onClick={() => favToggle(movies)}>
                                {fav ? 'Un-Favourite' : 'Favourite'}
                            </button>
                            <button className="cart-btn" onClick={() => toggleCart(movies)}>
                                {isInCart ? 'Remove from cart' : 'Add to cart'}
                            </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard;
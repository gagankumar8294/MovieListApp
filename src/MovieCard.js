import React from "react";

class MovieCard extends React.Component {

    render() {
        const { image , title , plot , price , rating , stars } = this.props.movies

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
                            onClick={() => {this.props.removeStars(this.props.movies)}}/>

                            <img className="str-btn" 
                            alt="star-icon" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                            
                            <img className="str-btn" 
                            alt="increase" 
                            src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                            onClick={() => {this.props.addStars(this.props.movies)}}/>
                            
                            <span className="starCount">{stars}</span>
                        </div>
                         <button className="favourite-btn" >Favourite</button>
                         <button className="favourite-btn">Un-Favourite</button>
                        
                        <button className="cart-btn" >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard;
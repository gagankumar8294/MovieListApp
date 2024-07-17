import React from "react";

class MovieCard extends React.Component {
    
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

    handleDecrease = () => {
        if(this.state.stars > 0) {
            this.setState((prevState) => ({
                stars : prevState.stars -= 0.5,
            }));
        }
    }

    addStars = () => {
        if(this.state.stars < 5) {
            this.setState((prevState) => ({
                stars: prevState.stars += 0.5,
            }));
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            fav : !prevState.fav,
        }))
    }

    render() {
        const { title , plot , price , rating , stars } = this.state
        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src="data:image/jpeg;base64,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" />
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>
                    
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" onClick={this.handleDecrease}/>
                            <img className="str-btn" alt="star-icon" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                            <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={this.addStars.bind(this)}/>
                            <span className="starCount">{stars}</span>
                        </div>
                        {this.state.fav ? <button className="favourite-btn" onClick={this.handleClick}>Favourite</button> :
                         <button className="favourite-btn" onClick={this.handleClick}>Un-Favourite</button>}
                        
                        <button className="cart-btn" >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard;
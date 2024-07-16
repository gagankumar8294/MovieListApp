import React from "react";

class MovieCard extends React.Component {
    
    constructor() {
        super();
        this.state = {
            title : 'Avengers',
            plot: 'Supernatural powers',
            stars : 0,
        }
    }

    addStars = () => {
        this.state.stars += 0.5;
    }


    render() {
        const { title , plot , stars } = this.state
        return (
            <>
                <h2>Movie Component</h2>
                <div></div>
            </>
        )
    }
}

export default MovieCard;
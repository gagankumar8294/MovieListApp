import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
               <MovieList />
            </>
        )
    }
}

export default App;
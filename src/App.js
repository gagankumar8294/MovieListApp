import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <h2>App Component</h2>
               <MovieList />
            </>
        )
    }
}

export default App;
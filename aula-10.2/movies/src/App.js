import React from "react";
import Title from "./components/Title";
import "./App.css";
import MovieCard from "./components/MovieCard";
import series from './data';

class App extends React.Component {
  render() {
    // console.log(series)
    return (
      <>
        <Title titulo="Continue a assistir Séries." />
        <article>
          {series.map((value) => {
            return <MovieCard serie = {value} key = {value.id} />
          })}
        </article>
      </>
    );
  }
}

export default App;

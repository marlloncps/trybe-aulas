import React from "react";
class MovieCard extends React.Component {
  render() {
    const { serie } = this.props;
    return (
      <section>
        <h2>{serie.name}</h2>
        <p>{serie.genre}</p>
        <img src={serie.image} alt=""></img>
        <h3>Personagens</h3>
        <ul>
        <li>{serie.characters[0]}</li>
        <li>{serie.characters[1]}</li>
        </ul>
      </section>
    );
  }
}

export default MovieCard;

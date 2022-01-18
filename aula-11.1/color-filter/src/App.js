import Ract, { Component } from "react";
import "./App.css";

import colors from "./data/colors";
import Text from './components/Text';

export class App extends Component {

  constructor () {
    super();

    this.state = {
      textoDigitado: 'Digite uma cor'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);

    this.setState({ textoDigitado: event.target.value });
  }

  render() {
    const { textoDigitado } = this.state;
    return (
      <main>
        <input
          type="text"
          value={textoDigitado}
          onChange={this.handleChange}
          />
          <Text text={textoDigitado} />
        <ul>
          {colors
          .filter((color) => color.name.includes(textoDigitado))
          .map((color) => (
            <li key={color.hex}>
              <div
                className="display-color"
                style={{ backgroundColor: color.hex }}
              />
              {color.name}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;

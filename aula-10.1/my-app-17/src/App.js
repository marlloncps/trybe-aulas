import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div>
//       <div className="App">
//         Hello, World.
//       </div>
//       <div>
//         Outro Texto
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">Hello, World.</div>
        <div>Outro Texto</div>
      </>
    );
  }
}

export default App;

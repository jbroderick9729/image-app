import React, { Component } from "react";
import "./App.css";
import ImageGrid from "./ImageGrid/ImageGrid";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => {
        const images = data.slice(0, 25);
        this.setState({
          images
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Images App</h1>
        </header>
        <ImageGrid images={this.state.images} />
      </div>
    );
  }
}

export default App;

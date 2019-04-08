import React, { Component } from "react";
import "./ImageGrid.css";

export default class ImageGrid extends Component {
  static defaultProps = {
    images: []
  };

  render() {
    const { images } = this.props;

    const gridItems = images.map(img => (
      <img className="grid-item" src={img.url} alt="placeholder" key={img.id} />
    ));

    return <div className="grid">{gridItems}</div>;
  }
}

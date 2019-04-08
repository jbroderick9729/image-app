import React, { Component } from "react";
import './ImageGrid.css';

export default class ImageGrid extends Component {
    static defaultProps = {
        images: []
    }
    
    render() {
    const images = this.props.images.map(img => <img className="images" src={img.url} alt="placeholder" key={img.id}/>);

    return <div className="image-grid">{images}</div>;
  }
}
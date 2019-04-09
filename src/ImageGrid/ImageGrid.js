import React, { Component } from "react";
import "./ImageGrid.css";
import DescriptionForm from "../DescriptionForm/DescriptionForm";

export default class ImageGrid extends Component {
  static defaultProps = {
    images: []
  };

  state = {
    show: "false",
    url: "",
    description: "",
    id: ""
  };

  handleOpenModal = img => {
    this.setState({
      show: "true",
      url: img.url,
      title: img.title,
      id: img.id
    });
  };

  handleCloseModal = () => {
    this.setState({
      show: "false",
      url: "",
      description: "",
      id: ""
    });
  };

  handleEnterDescription = description => {
    this.setState({
      description
    });
  };

  handleSubmitDescription = event => {
    event.preventDefault();

    const { id, description } = this.state;
    window.localStorage.setItem(id, description);

    this.setState({
      description: ""
    });
  };

  render() {
    const { images } = this.props;

    const gridItems = images.map(img => (
      <img
        className="grid-item"
        src={img.thumbnailUrl}
        alt="placeholder"
        key={img.id}
        onClick={() => this.handleOpenModal(img)}
      />
    ));

    return (
      <main>
        {/* grid items, opacity decreased when modal is open */}
        <div
          className={this.state.show === "false" ? "grid" : "grid modal-open"}
        >
          {gridItems}
        </div>

        {/* modal - show when image is clicked */}
        <div className={this.state.show === "false" ? "hidden" : undefined}>
        
            <div className="modal" show={this.state.show}>
              <img src={this.state.url} alt="placeholder" />
              <div className="modal-right">
                <button
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0"
                  }}
                  onClick={this.handleCloseModal}
                >
                  Close
                </button>
                <div>
                  <h2>Title: </h2>
                  <p>{this.state.title}</p>
                </div>
                <hr />

                {/* show description if id's in localStorage, otherwise show form */}
                {!window.localStorage.getItem(this.state.id) ? (
                  <DescriptionForm
                    handleSubmitDescription={this.handleSubmitDescription}
                    handleEnterDescription={this.handleEnterDescription}
                  />
                ) : (
                  <div>
                    <h2>Description: </h2>
                    <p>{window.localStorage.getItem(this.state.id)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
      
      </main>
    );
  }
}

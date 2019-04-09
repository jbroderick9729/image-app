import React, { Component } from "react";
import "./DescriptionForm.css";

export default class DescriptionForm extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.handleSubmitDescription(e)}>
        <label>
          Enter a description
          <textarea
            id="description"
            name="description"
            onChange={e => this.props.handleEnterDescription(e.target.value)}
          />
        </label>
        <button type="submit">Submit description</button>
      </form>
    );
  }
}

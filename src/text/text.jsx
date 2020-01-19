import React from "react";
import PropTypes from "prop-types";
import css from "./text.css";

export class Text extends React.Component {
  render() {
    return <p className="text">{this.props.text}</p>;
  }
}
Text.propTypes = {
  text: PropTypes.string
};

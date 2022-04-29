import React, { Component, Fragment } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      sampleText:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    };
  }
  render() {
    return (
      <Fragment>
        <div className="footer">
          <div className="footer-content">
            <p>{this.state.sampleText}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Footer;
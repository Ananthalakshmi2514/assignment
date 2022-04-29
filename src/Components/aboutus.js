import React, { Component, Fragment } from "react";
import Button from "@mui/material/Button";
class Aboutus extends Component {
  constructor() {
    super();
    this.state = {
      sampleText:
        "Sample text. Click to select the text box. Click again or doubleclick to start editing the text.",
    };
  }
  render() {
    return (
      <Fragment>
        <div className="aboutus">
          <div className="abtus-left">
            <h4>ABOUT US</h4>
            <h2>We work at all scales and in all sectors.</h2>
            <p>
              We create transformative cultural, corporate, residential and
              other spaces that work in synchronicity with their surrondings.
            </p>
          </div>
          <div className="abtus-right">
            <h4>The future of how we live, work and play</h4>
            <p>{this.state.sampleText}</p>
            <h5>Look toward the future</h5>
            <p>{this.state.sampleText}</p>
            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "112px",
                backgroundColor: "rgb(255, 208, 0)",
                textTransform: "lowercase",
                fontWeight: "bold",
                color: "#000",
                marginTop: "15px",
              }}
            >
              learn more
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Aboutus;

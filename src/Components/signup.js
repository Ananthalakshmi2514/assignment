import React, { Component, Fragment } from "react";
import image11 from "../images/download.jfif";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
class Signup extends Component {
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
        <div className="signup">
          <img src={image11} alt="Construction Paln" className="image11" />

          <div className="Ex-offrs">
            <h2>Sign Up for Exclusive Offers</h2>
            <p>{this.state.sampleText}</p>
            <div className="fields">
              <TextField
                className="outline outlined-name"
                label="Enter Your Name"
                variant="outlined"
                style={{
                  width: 200,
                  borderRadius: 20,
                  background: "#aaa",
                }}
              />
              <TextField
                className="outline outlined-email"
                label="Enter a valid Email address"
                variant="outlined"
                style={{
                  width: 200,
                  borderRadius: 20,
                  background: "#aaa",
                }}
              />
              <TextField
                className="outline outlined-number"
                label="Telephone number"
                variant="outlined"
                type="number"
                style={{
                  width: 200,
                  borderRadius: 20,
                  background: "#aaa",
                }}
              />
            </div>
            <div className="message-field">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={9}
                placeholder=" Enter Your Message"
                style={{
                  width: 640,
                  borderRadius: 10,
                  marginTop: 20,
                  background: "#aaa",
                }}
              />
            </div>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                width: 600,
                borderRadius: 100,
                backgroundColor: "rgb(255, 208, 0)",
                color: "#000",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Sign Up
            </Button>
            <p>
              Images from <a href="#">Freepik</a>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Signup;

import React, { Component, Fragment } from "react";
import image11 from "../images/signup.jpg";
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
          <img src={image11} alt="" className="image11" />

          <div className="Ex-offrs">
            <h2>Sign Up for Exclusive Offers</h2>
            <p>{this.state.sampleText}</p>
            <div className="fields">
              <TextField
                className="outlined-name"
                label="Enter Your Name"
                variant="outlined"
                style={{
                  height:50,
                  width: 250,
                  borderRadius:30,
                  background:"lightgray",
                }}
              />
              <TextField
                className="outlined-email"
                label="Enter a valid Email address"
                variant="outlined"
                style={{
                  height:50,
                  width: 250,
                  borderRadius:30,
                  background: "lightgray",
                }}
              />
              <TextField
                className="outlined-number"
                label="mobile number"
                variant="outlined"
                type="number"
                style={{
                  height:50,
                  width: 250,
                  borderRadius:40,
                  background: "lightgray",
                }}
              />
            </div>
            <div className="message-field">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={9}
                placeholder=" Enter Your Message"
                style={{
                  width:780,
                  borderRadius:20,
                  marginTop: 20,
                  background: "lightgray",
                }}
              />
            </div>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                width:780,
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

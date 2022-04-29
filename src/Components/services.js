import React, { Component, Fragment } from "react";
import image8 from "../images/download4.jfif";
import image9 from "../images/download7.jpg";
import image10 from "../images/download9.jfif";
import Button from "@mui/material/Button";

class Serivce extends Component {
  render() {
    return (
      <Fragment>
        <div className="service">
          <div className="ser-left"></div>
          <div className="ser-right"></div>
          <img
            src={image8}
            alt="crop architecture opening"
            className="image8"
          />
          <img src={image10} alt="Conference" className="image10" />
          <img src={image9} alt="low angle building" className="image9" />
          <div className="wwd">
            <h3>WHAT WE DO</h3>
            <h2>
              Full service architecture design studio with offices in Brooklyn,
              New York and Richmond
            </h2>
            <p>
              Images from <a href="#">Freepik</a>
            </p>
            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "112px",
                backgroundColor: "rgb(2, 23, 72)",
                textTransform: "lowercase",
                fontWeight: "bold",
                color: "#fff",
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

export default Serivce;

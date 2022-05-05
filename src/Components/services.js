import React, { Component, Fragment } from "react";
import image8 from "../images/serviceimage.jpg";
import image9 from "../images/download9.jfif";
import image10 from "../images/download7.jpg";
import Button from "@mui/material/Button";

class Serivce extends Component {
  render() {
    return (
      <Fragment>
        <div className="service">
          <div className="service-left"></div>
          <div className="service-right"></div>
          <img src={image8} alt="" className="image8"/>
          <img src={image10} alt="" className="image10" />
          <img src={image9} alt="" className="image9" />
          <div className="wwd">
            <h3>WHAT WE DO</h3>
            <h2>
              Full service<br/> architecture design <br/>studio with offices in <br/>Brooklyn,
              New York <br/>and Richmond
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

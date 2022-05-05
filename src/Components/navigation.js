import React, { Component, Fragment } from "react";
import image1 from "../images/building1.jpg";
import image2 from "../images/building2.jpg";
import image3 from "../images/building3.jpg";
import Button from "@mui/material/Button";
class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="MM">
          <div className="main">
            <div className="left-main"></div>
            <div className="right-main"></div>
          </div>
          <div className="images">
            <img src={image1} className="image1" alt=""/>
            <img src={image2}  className="image2"  alt=""/>
            <img src={image3} className="image3"  alt=""/>
            <div className="ofc-content">
              <h1>WHAT WE DO</h1>
              <p className="ofc-con-1">
                Integrated design practice of architecture, landscape, interiors
              </p>
              <p className="ofc-con-2">
                image from <a href="#">Freepik</a>
              </p>

              <Button
                variant="contained"
                style={{
                  borderRadius: "100px",
                  width: "112px",
                  backgroundColor: "rgb(3, 7, 64)",
                  textTransform: "lowercase",
                  fontWeight: "bold",
                }}
              >
                learn more
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;

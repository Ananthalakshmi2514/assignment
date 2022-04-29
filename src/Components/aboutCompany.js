import React, { Component, Fragment } from "react";
import apartment from "../images/download2.jfif";
import Button from "@mui/material/Button";
class AboutComp extends Component {
  constructor() {
    super();
    this.state = {
      abtcmp:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    };
  }
  render() {
    return (
      <Fragment>
        <div className="AboutComp">
          <div className="AboutComp-left"></div>
          <div className="AboutComp-right">
            <div className="abtcmp-R">
              <h3>About Company</h3>
              <p>{this.state.abtcmp}</p>
              <p>
                image from <a href="#">Freepik</a>
              </p>
              <Button
                variant="contained"
                style={{
                  borderRadius: "100px",
                  width: "120px",
                  backgroundColor: "rgb(3, 7, 64)",
                  textTransform: "lowercase",
                  fontWeight: "bold",
                }}
              >
                read more
              </Button>
            </div>
          </div>
          <img src={apartment} alt="Apartment" className="apartment" />
        </div>
      </Fragment>
    );
  }
}
export default AboutComp;

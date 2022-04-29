import React, { Fragment, Component } from "react";
import image4 from "../images/download6.jfif";
import image5 from "../images/download7.jpg";
import image6 from "../images/download11.jfif";
import Button from "@mui/material/Button";
import ArchitectureIcon from "@mui/icons-material/Architecture";
class Embedded extends Component {
  constructor() {
    super();

    this.state = {
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      styles: {
        backgroundColor: "rgb(255, 208, 0)",
        borderRadius: "50%",
        fontSize: "70px",
      },
    };
  }
  render() {
    return (
      <Fragment>
        <div className="embedded">
          <div className="em-top"></div>
          <div className="em-bottom"></div>
          <img src={image4} alt="low angle building" className="image4" />
          <img src={image5} alt="young girl" className="image5" />
          <img
            src={image6}
            alt="crop architecture opening"
            className="image6"
          />
          <div className="emarch">
            <ArchitectureIcon style={this.state.styles} />
            <h2>We Create embedded architecture</h2>
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex.Suspendisse rhoncus laoreet purus
              quis elementum. Phasellus sed efficitur dolor, et ultricies sapien
            </p>
            <p>
              images from <a href="#">Freepik</a>
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
              learn more
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Embedded;
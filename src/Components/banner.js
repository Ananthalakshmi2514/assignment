import React, { Component, Fragment } from "react";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { Apartment, EmojiObjects, SquareFoot } from "@mui/icons-material";

class Banner extends Component {
  constructor() {
    super();

    this.state = {
      info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      styles: {
        backgroundColor: "rgb(255, 208, 0)",
        borderRadius: "50%",
        fontSize: "60px",
      },
    };
  }
  render() {
    return (
      <Fragment>
        <div className="Arch">
          <div className="Arch-hpg">
            <div className="Arch-heading">Architecture & Interior Design</div>
            <div className="Arch-pg">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </div>
          </div>
          <div className="Arch-apur">
            <div className="apur-A ar">
              <ArchitectureIcon style={this.state.styles} />
              <p>Architecture</p>
              <article>{this.state.info}</article>
            </div>
            <div className="apur-P ar">
              <SquareFoot style={this.state.styles} />
              <p>Planning</p>
              <article>{this.state.info}</article>
            </div>
            <div className="apur-U ar">
              <Apartment style={this.state.styles} />
              <p>Urban Design</p>
              <article>{this.state.info}</article>
            </div>
            <div className="apur-R ar">
              {" "}
              <EmojiObjects style={this.state.styles} />
              <p>Research</p>
              <article>{this.state.info}</article>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Banner;


       
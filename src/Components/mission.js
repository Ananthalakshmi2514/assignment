import React, { Component, Fragment } from "react";
import image7 from "../images/smilygirl.jpg";
import Button from "@mui/material/Button";
import { FormatQuote } from "@mui/icons-material";

class Mission extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:" We belive design should have a positive impact on people's lives and the environment" ,ischange:true

    }
  }
  clickHandler=()=>{
    if(this.state.ischange){
      this.setState({first:"sucess is not final",ischange:false})
    }
    else{
      this.setState({first:"We belive design should have a positive impact on people's lives and the environment",ischange:true})
    }
  }
  render() {
    return (
      <Fragment>
        <div className="smilygirl">
          <div className="smimage"></div>
          <img src={image7} alt="" className="image7" />
          <div className="smimage-info">
            <h2>
              {this.state.first }
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
              }} onClick={()=>this.clickHandler()}
            >
              learn more
            </Button>
          </div>
          <div className="quote">
            <FormatQuote
              style={{
                fontSize: "40px",
                transform: "rotate(180deg)",
                marginBottom: "-30px",
              }}
            />
            <p className="quotation">
              Success is not final; failure is not fatal: it is the courage to
              continue that counts
            </p>
            <p className="author">- Winston Churchill</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Mission;

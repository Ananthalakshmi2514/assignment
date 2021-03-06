import React, { Component, Fragment } from "react";
import image12 from "../images/download (1).jfif";
import Button from "@mui/material/Button";

class Middle1 extends Component {
  constructor() {
    super();
    this.state = {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, such in culpa qui officia deserunt mollit anim id est laborum.",ischange:true
    }
  }
  clickHandler=()=>{
    if(this.state.ischange){
      this.setState({text:"here more about our company" , ischange:false}) 
    }
      else{this.setState({text:"Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, such in culpa qui officia deserunt mollit anim id est laborum.",ischange:true})

      }
    }
  
  render() {
    return (
      <Fragment>
        <div className="middle1-main">
          <div className="color"></div>
          <img src={image12} className="image12" alt="" />
          <div className="middle1-content">
            <h2>Who are the best 100 architecture firms in the world?</h2>
            <p>{this.state.text}</p>
            <p>image from</p>
            <a href="#">Freepik</a>
            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "120px",
                backgroundColor: "rgb(3, 7, 64)",
                textTransform: "lowercase",
                fontWeight: "bold",
                marginTop: "15px",
              }} onClick={()=>this.clickHandler()}
            >
              read more
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Middle1;
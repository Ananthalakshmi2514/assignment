import React, { Component, Fragment } from "react";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

class Aboutus extends Component {
  constructor() {
    super();
    this.state = {
      sampleText:
        "Sample text. Click to select the text box. Click again or doubleclick to start editing the text.",ischange:true,
      aboutUs:
      "we work at all scales and in all sectors",
      info:
      " We create transformative cultural, corporate, residential and,other spaces that work in synchronicity with their surrondings.",
     righth4:
     "The future of how we live ,work and play",
     abtright2:
     " Look toward the future"
    }
  }
  clickHandler=()=>{
    if(this.state.ischange){
      this.setState({sampleText:'start eding the text',ischange:false})
    }
    else{
      this.setState({sampleText:" Sample text. Click to select the text box. Click again or doubleclick to start editing the text." ,ischange:true})
    }
  }
  render() {
    return (
      <Fragment>
        <div className="aboutus">

           <div className="abtus-left">
            <h4>ABOUT US</h4>
            <h2>{this.state.aboutUs}</h2>
            <p>{this.state.info}</p>
          </div>
          <div className="abtus-right">
            <h4>{this.state.righth4}</h4>
            <p>{this.state.sampleText}</p>
            <h5>{ this.state.abtright2}</h5>
            <p>{this.state.sampleText}</p>
<Grid container spacing={2}>
  <Grid item className="abtus-left" xs={12} sm={12} md={6} lg={2} xl={2}>
 
  </Grid>
  <Grid item className="abtus-right" xs={12} sm={12} md={6} lg={2} xl={2}></Grid>
</Grid>



            <Button
              variant="contained"
              style={{
                borderRadius: "100px",
                width: "112px",
                backgroundColor: "rgb(255, 208, 0)",
                textTransform: "lowercase",
                fontWeight: "bold",
                color: "#000",
                marginTop: "15px",
              }} onClick={()=> this.clickHandler()}
            >
              learn more
            </Button>
          </div>
        
        </div>
      </Fragment>
    );
  }
}
export default Aboutus;

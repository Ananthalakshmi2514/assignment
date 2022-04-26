import React, { Component , Fragment} from "react";
import image1 from "../images/download9.jfif";
import image2 from "../images/download2.jfif";
import image3 from "../images/download11.jfif";
import button from "@mui/material/Button";


class Navigation extends Component{
    render(){
    return(
        <Fragment>
            <div className="main-nav">
                <div className="nav">
                <div className="left-nav"></div>
                <div className="right-nav"></div>
                </div>
            <div className="images">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                </div>
                <div className="content-nav">
                    <h2>WHAT WE DO </h2>
                    <p className="cont1-nav">
                        Integrated design practice of architecture, landscape, interiors
                    </p>
                    <p className="cont1-nav"> image from <a href="#" > freepik</a></p>
                    <button variant="contained" style={{ borderRadius: "100px",
                    width: "1oopx",
                    backgroundColor:"blue" ,
                    textTransform:"lowercase",
                    fontWeight: "bold"}}>learn more</button>
                </div>
               </div>
            </Fragment>
    )
    


        }
    
}
export default Navigation;
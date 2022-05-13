import React, { Component ,Fragment, useState} from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from'@mui/icons-material/Menu';

class Header extends Component{

  render(){
        return(
            <Fragment>
                <div className="header">
<Toolbar
sx={{backgroundColor:"#fff" ,}}>
<Typography
variant="h6"
component="div"
sx={{flexGrow:4,color:"#999",fontFamily:"cursive",fontWeight:"bold",fontSize:"30px,"}}>logo
             </Typography>
    
             <IconButton 
             size="small" 
             edge="end" 
             color="inherit" 
             aria-label="menu"
             sx={{color:"#333",}} 
              >
                <ul className="header-links">
                     <li><a href="navigation" element="<Navigation/>"> Home</a></li>
                     <li><a href="services.js">services</a></li>
                     <li><a href="aboutus.js">Aboutus</a></li>
                 </ul>
                 
                   <MenuIcon>
                   
                   </MenuIcon>
             </IconButton>
               </Toolbar>
                </div>
            </Fragment>

        );
    }
}
export default Header;
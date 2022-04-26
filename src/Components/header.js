import React, { Component ,Fragment} from "react";
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
             sx={{color:"#333",}}>
                 <MenuIcon/>
             </IconButton>
               </Toolbar>
                </div>
            </Fragment>

        );
    }
}
export default Header;
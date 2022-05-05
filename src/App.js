/*import logo from './logo.svg';*/
import Button from '@mui/material/Button';
import Header from"./Components/header";
import { Grid } from '@mui/material';

import './App.css';
import Banner from './Components/banner';
import Aboutus from './Components/aboutus';
import Middle1 from './Components/middle1';
import AboutComp from './Components/aboutCompany';
import Embedded from './Components/embedded';
import Mission from './Components/mission';
import Serivce from './Components/services';
import Signup from './Components/signup';
import Footer from './Components/footer';
import Navigation from './Components/navigation';


function App() {
  return (
    <div className="App">
<Header/>
<Navigation/>
<Banner/>
<Aboutus/>
<Middle1/>
<AboutComp/>
<Embedded/>
<Mission/>
<Serivce/>
<Signup/>
<Footer/>

    </div>
  );
}

export default App;

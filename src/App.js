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
import {
  Routes,
  Route,
} from "react-router-dom";


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
<Routes>
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/navigation" element={<Navigation />} />
          <Route exact path="/banner" element={<Banner />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/middle1" element={<Middle1 />} />
          <Route exact path="/aboutcomp" element={<AboutComp />} />
          <Route exact path="/Embedded" element={<Embedded/>} />
          <Route exact path="/mission" element={<Mission />} />
          <Route exact path="/service" element={<Serivce />} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/footer" element={<Footer/>} />
    </Routes>
    </div>
  );
}

export default App;

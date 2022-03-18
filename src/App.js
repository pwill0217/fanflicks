import './App.css';
//import ReactCardSlider from 'react-card-slider-component';
import './components/Navbar/NavbarElements'
import './components/Navbar/index'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Navbar from './components/Navbar/';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Browse from "./pages/browse";

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/browse" element={<Browse/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;

  





// import ReactCardSlider from './components/ReactCardSlider';




//function App() {
  //const sliderClick = (slider)=>{
    
  //}
    

  
  //const slides = [
   // {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    //{image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    //{image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    //{image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    //{image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    //{image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    //{image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  //]
  //return (
    //<div id="body">
      //<ReactCardSlider slides={slides}/>
    //</div>
  //);
//}

//export default App;

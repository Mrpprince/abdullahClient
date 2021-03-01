import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Components/Home/Home';
import WhoWeAre from './Components/whoWeAre/WhoWeAre';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import Currentproduct from './Components/CurrentProduct/Currentproduct';
import RecentProduct from './Components/CurrentProduct/RecentProduct/RecentProduct';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/whoWeAre/AboutUs/AboutUs';
import MdMessage from './Components/whoWeAre/MdMessage/MdMessage';
import OurOffice from './Components/whoWeAre/OurOffice/OurOffice';
import Service from './Components/WhatWeDo/Service/Service';
import Quality from './Components/WhatWeDo/Quality/Quality';
import Sustainability from './Components/WhatWeDo/Sustainability/Sustainability';
import Ethics from './Components/WhatWeDo/Ethics/Ethics';
import Success from './Components/ContactUs/Success';
import MensClothings from './Components/OurProduct/MensClothing/MensClothings';
import WoMensClothing from './Components/OurProduct/WoMensClothing/WoMensClothing';
import KidsClothings from './Components/OurProduct/KidsClothings/KidsClothings';
import ShowMenClothDetails from './Components/OurProduct/MensClothing/ShowMenClothDetails';
import Dashboad from './Components/Admin/Dashboad';
import ShowKidsCloth from './Components/OurProduct/KidsClothings/ShowKidsCloth';
import NotFoud from './NotFoud';
import ShowWomensClothDetail from './Components/OurProduct/WoMensClothing/ShowWomensClothDetail';
import ShowPic from './Components/PicDetails/ShowPic';



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/WhatWeDO">
            <WhatWeDo></WhatWeDo>
          </Route>

          <Route path="/currentProduct">
            <Currentproduct></Currentproduct>
          </Route>
          <Route path="/recentProduct">
            <RecentProduct></RecentProduct>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path='/messageMd'>
            <MdMessage></MdMessage>
          </Route>
          <Route path='/ourOffice'>
            <OurOffice></OurOffice>
          </Route>
          <Route path='/service'>
            <Service></Service>
          </Route>
          <Route path='/quality'>
            <Quality></Quality>
          </Route>
          <Route path='/sustainability'>
            <Sustainability></Sustainability>
          </Route>
          <Route path="/ethics">
            <Ethics></Ethics>
          </Route>
          <Route path="/success">
            <Success></Success>
          </Route>
          <Route path='/mensclothing'>
            <MensClothings></MensClothings>
          </Route>
          <Route path='/womensclothing'>
            <WoMensClothing></WoMensClothing>
          </Route>
          <Route path='/kidsclothing'>
            <KidsClothings></KidsClothings>
          </Route>
          <Route path='/mensclothingDetails/:Code'>
            <ShowMenClothDetails></ShowMenClothDetails>
          </Route>
          <Route path='/womensclothingDetails/:Code'>
            <ShowWomensClothDetail></ShowWomensClothDetail>
          </Route>
          <Route path='/kidsclothingDetails/:Code'>
            <ShowKidsCloth></ShowKidsCloth>
          </Route>
          {/* <Router path='/admin'>
                  <Dashboad></Dashboad>
                </Router> */}
          <Route path='/mensClothPicture/:PicCode'>
            <ShowPic></ShowPic>
          </Route>
          <Route path='/woMensClothPicture/:PicCode'>
            <ShowPic></ShowPic>
          </Route>
          <Route path='/kidsClothPicture/:PicCode'>
            <ShowPic></ShowPic>
          </Route>
          <Route path="*">
            <NotFoud></NotFoud>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

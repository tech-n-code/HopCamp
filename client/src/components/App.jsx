import { useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentCampsite from "./CurrentCampsite/CurrentCampsite.jsx";
import AvailableSites from "./AvailableSites/AvailableSites.jsx";
import Header from "./Header/Header.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import CampingSpots from "./CampingSpots/CampingSpots.jsx";
import PhotoGallery from "./PhotoGallery/PhotoGallery.jsx";
import TentSite from "./TentSite/TentSite.jsx";
import CampingLocation from "./CampingLocation/CampingLocation.jsx";
import Host from "./Host/Host.jsx";
import CampSafety from "./CampSafety/CampSafety.jsx";
import CampsiteInfo from "./CampsiteInfo/CampsiteInfo.jsx";
import SafetyPartners from "./SafetyPartners/SafetyPartners.jsx";
import ThingsNearby from "./ThingsNearby/ThingsNearby.jsx";
import TentSiteMap from "./TentSite/TentSiteMap.jsx";
import CampersAlso from "./CampersAlso/CampersAlso.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const popupCalenderEl = useRef(null);
  const handleClick = (event) => {
    const popUpCalender = popupCalenderEl.current;
    if (popUpCalender && !popUpCalender.contains(event.target))
      if (popUpCalender.classList.contains("show"))
        popUpCalender.classList.toggle("show");
  };

  return (
    <>
      <Header />
      <div className="contentWrapper" onClick={handleClick}>
        <CurrentCampsite />
        <PhotoGallery />
        <CampsiteInfo />
        <AvailableSites popupCalenderEl={popupCalenderEl} />
        <div className={`tentsites-map-container | container text-center`}>
          <div className="row align-items-start">
            <div className={`tentsites-left| col`}>
              <TentSite />
            </div>
            <div className={`map-right | col `}>
              <TentSiteMap className={``} />
            </div>
          </div>
        </div>
        <CampingLocation />
        <Host />
        <Ratings />
        <ThingsNearby />
        <CampingSpots />
        <CampersAlso />
        <CampSafety />
        <SafetyPartners />
        <Footer />
      </div>
    </>
  );
}

export default App;

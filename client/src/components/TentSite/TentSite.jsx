import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useRef } from "react";
import "./TentSite.css";
import IndividualTentSite from "./IndividualTentSite";

const TentSite = () => {
  const defaultSiteAmnt = 3;
  const [defaultTentCount, setDefaultTentCount] = useState(defaultSiteAmnt);
  const [tentsiteData, setTentSiteData] = useState([]);
  const [lodgingData, setlodgingData] = useState([]);
  const allSiteAmnt = tentsiteData.length;

  const handleShowMore = () => {
    if (defaultTentCount === defaultSiteAmnt) {
      setDefaultTentCount(allSiteAmnt - 1);
    } else {
      setDefaultTentCount(defaultSiteAmnt);
    }
  };

  useEffect(() => {
    fetch("/api/tentsites")
      .then((responses) => responses.json())
      .then((result) => {
        let rvArr = [];
        let lodgingArr = [];
        for (let element of result) {
          if (element.type === "Lodging") lodgingArr.push(element);
          else rvArr.push(element);
        }
        setTentSiteData(rvArr);
        setlodgingData(lodgingArr);
      });
  }, []);
  useEffect(() => {
    // console.log(defaultTentCount);
  }, [defaultTentCount]);
  return (
    <div
      className="d-flex"
      style={{ postion: "relative" }}
      id="currentCampSites"
    >
      <div>
        <div className="tent-sites" id="campSites">
          <div className="tent-sites-title">
            <div id="tentsite-title">Tent sites</div>
            <div id="tentsite-availability">
              {" "}
              {tentsiteData.length} available
            </div>
          </div>
          {tentsiteData.slice(0, defaultTentCount).map((element, index) => (
            <IndividualTentSite key={index} data={element} />
          ))}
          <button className="show-more-btn" onClick={handleShowMore}>
            {defaultTentCount === defaultSiteAmnt ? "Show More" : "Show Less"}
          </button>
        </div>
        <div className="tent-sites">
          <div className="tent-sites-title">
            <div id="tentsite-title">Lodging</div>
            <div id="tentsite-availability">
              {" "}
              {lodgingData.length} available
            </div>
          </div>
          {lodgingData.map((element, index) => (
            <IndividualTentSite key={index} data={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TentSite;

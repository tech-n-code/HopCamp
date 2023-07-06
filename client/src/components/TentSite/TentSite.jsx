import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useRef } from "react";
import "./TentSite.css";
import IndividualTentSite from "./IndividualTentSite";

const TentSite = () => {
  const [defaultTentCount, setDefaultTentCount] = useState(3);
  const [tentsiteData, setTentSiteData] = useState([]);
  const [lodgingData, setlodgingData] = useState([]);
  const allSiteAmnt = tentsiteData.length;

  const handleShowMore = () => {
    if (defaultTentCount === 3) {
      setDefaultTentCount(allSiteAmnt - 1);
    } else {
      setDefaultTentCount(3);
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
          {tentsiteData.slice(0, defaultTentCount).map((element) => (
            <IndividualTentSite key={element.id} data={element} />
          ))}
          <button className="show-more-btn" onClick={handleShowMore}>
            {defaultTentCount === 3 ? "Show More" : "Show Less"}
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
          {lodgingData.map((element) => (
            <IndividualTentSite key={element.id} data={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TentSite;

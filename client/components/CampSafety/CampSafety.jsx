import React, { useState, useEffect } from "react";
import "./CampSafety.css";

function CampSafety() {
  
  return (
    <div className="safety-component-container">
      <div className="safety-heading">Safety at Hopcamp</div>
      <div className="safety-card-container">
        <div className="top">
          <div className="safety-card1">
            <div className="safety-card-content">
              <img
                src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_auto/internal/inclusion_policy_text_standard.png"
                className="safety-card-image"
                style={{ width: "70%" }}
              ></img>
              <div className="logo">
                <img
                  src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_auto/hipcamp_hand_hexqba.png"
                  className="hipcamp-hand"
                />
              </div>
            </div>
            <a
              className="safety-card-button"
              href="https://support.hipcamp.com/hc/en-us/articles/360049636632/"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="d-flex gap-4 p-0 m-0 " style={{ width: "100%" }}>
          <div
            className="safety-card p-0 m-0 flex-fill"
            data-card-name="bottom2"
          >
            <div className="safety-card-content ">
              <img
                src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_auto/internal/hosting_standards_text.png"
                className="safety-card-image"
                style={{ width: "50%" }}
              ></img>
            </div>
            <a
              className="safety-card-button"
              href="https://www.hipcamp.com/en-US/hoststandards"
              style={{ marginBottom: "0px", marginTop: "0px" }}
            >
              Learn More
            </a>
          </div>
          <div
            className="safety-card p-0 m-0 flex-fill"
            data-card-name="bottom2"
          >
            <div className="safety-card-content">
              <img
                src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_1120,q_auto/internal/hipcamper_standards_text_wide.png"
                className="safety-card-image"
              ></img>
            </div>
            <a
              className="safety-card-button"
              href="https://www.hipcamp.com/journal/company-news/fire-safety-introducing-national-weather-service-integration"
              style={{ marginTop: "30px" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampSafety;

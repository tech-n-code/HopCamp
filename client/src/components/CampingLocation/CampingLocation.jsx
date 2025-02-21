import React, { useState, useEffect } from "react";
import "./CampingLocation.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import CustomMarker from "./assets/campsite_marker.png";

function CampingLocation() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>...Loading</div>;
  return <Map />;
}

function Map() {
  const mapOptions = {
    zoom: 12,
    center: {
      lat: 38.353,
      lng: -123.0024,
    },
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.park",
        stylers: [{ visibility: "on" }],
      },
    ],
    zoomControl: true,
    maxZoom: 12,
    minZoom: 4,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeID: "terrain",
    fullscreenControl: false,
    scaleControl: false,
    rotateControl: false,
    draggableCursor: "default",
  };

  const center = mapOptions.center;
  // console.log(center);

  const [markerSize, setMarkerSize] = useState({
    width: 100, // Replace with your desired width in pixels
    height: 100, // Replace with your desired height in pixels
  });

  return (
    <>
      <div className="campingLocation-footnote-title">
        <span>Location</span>
      </div>
      <GoogleMap options={mapOptions} mapContainerClassName="map-container">
        <MarkerF
          position={center}
          anchorPoint={new window.google.maps.Point(0, 0)}
          options={{
            text: "Salmon Creek Ranch",
            icon: {
              url: CustomMarker,
              scaledSize: new window.google.maps.Size(
                markerSize.width,
                markerSize.height
              ),
              scale: 1,
            },
          }}
        />
      </GoogleMap>
      <div className="campingLocation-footnote-container">
        <span className="campingLocation-footnote">Bodega Bay, California, United States</span>
        <span>To respect the Host's privacy, the precise address of this land will be provided after booking</span>
      </div>
    </>
  );
}

export default CampingLocation;

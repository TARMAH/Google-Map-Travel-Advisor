import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles.js";

const Map = () => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={{ lat: 51, lng: 0 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

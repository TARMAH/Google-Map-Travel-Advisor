import React, { useState, useEffect } from "react";

import "./styles.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index";

import { Grid } from "@material-ui/core";

export default function App() {
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating, places]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
    console.log(navigator.geolocation.getCurrentPosition);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [bounds, type]);

  return (
    <div className="App">
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{}}>
          <Map
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

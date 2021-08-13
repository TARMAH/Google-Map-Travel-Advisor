import "./styles.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { Grid } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} style={{}}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat
      },
      headers: {
        "x-rapidapi-key": "42c5618ed6msh27c067d097c019fp1cbf85jsn97f3c9a1cb16",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

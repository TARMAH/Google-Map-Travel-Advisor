import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat
        },
        headers: {
          "x-rapidapi-key":
            "42c5618ed6msh27c067d097c019fp1cbf85jsn97f3c9a1cb16",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
        }
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";

const url = "https://covid19.mathdro.id/api/";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate }
    } = await axios.get(url);

    const modifiedData = {
      confirmed,
      deaths,
      recovered,
      lastUpdate
    };

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

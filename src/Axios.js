import axios from "axios";
import { useEffect, useState } from "react";
export default function Axios() {
  const [data, setData] = useState([]);
  
  const config = {
    method: "get",
    url: "https://pizza-and-desserts.p.rapidapi.com/pizzas",
    headers: {
      "X-RapidAPI-Key": "afcf03daecmsh332d331623c055ep1f32d9jsn24c164ac086e",
      "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
    },
  };

  // export const client = axios(config)
  //   .then((response) => {
  //     const data = JSON.stringify(response.data);
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  const getData = async () => {
    try {
      const daata = await axios.get(config);
      console.log(daata);
    } catch (error) {
      console.error("There is an error fetching the data from API.");
    }
  };
}

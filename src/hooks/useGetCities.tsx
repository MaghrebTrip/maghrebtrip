import axios from "axios";
import links from "../data/links";
import { useState, useEffect } from "react";

interface City {
  id: number;
  name: string;
  image: string;
  about: string;
  rating: number;
}

function useGetCities() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get(links.cities);
      setCities(response.data);
    };

    fetchCities();
  }, []);

  return cities;
}

export default useGetCities;
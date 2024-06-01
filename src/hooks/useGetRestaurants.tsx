import axios from "axios";
import links from "../data/links";
import { useState, useEffect } from "react";

interface Restaurant {
  id: number;
  cityId: number;
  name: string;
  image: string;
  type: string;
  description: string;
  schedules: string[];
  location: string;
  rating: number;
  sponsored: boolean;
  cuisineType: string;
  affordability: string;
}

function useGetRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get(links.restaurants);
      setRestaurants(response.data);
    };

    fetchRestaurants();
  }, []);

  return restaurants;
}

export default useGetRestaurants;
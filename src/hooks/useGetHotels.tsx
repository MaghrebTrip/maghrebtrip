import axios from "axios";
import links from "../data/links";
import { useState, useEffect } from "react";

interface Hotel {
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
  amenities: string[];
  roomTypes: string[];
}

function useGetHotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await axios.get(links.hotels);
      setHotels(response.data);
    };

    fetchHotels();
  }, []);

  return hotels;
}

export default useGetHotels;
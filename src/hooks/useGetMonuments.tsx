import axios from "axios";
import links from "../data/links";
import { useState, useEffect } from "react";

interface Monument {
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
}

function useGetMonuments() {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  useEffect(() => {
    const fetchMonuments = async () => {
      const response = await axios.get(links.monuments);
      setMonuments(response.data);
    };

    fetchMonuments();
  }, []);

  return monuments;
}

export default useGetMonuments;
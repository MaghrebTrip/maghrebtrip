import axios from "axios";
import links from "../data/links";
import { useState, useEffect } from "react";

interface Tourist {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nationality: string;
  preferences: string[];
}

function useGetTourists() {
  const [tourists, setTourists] = useState<Tourist[]>([]);

  useEffect(() => {
    const fetchTourists = async () => {
      const response = await axios.get(links.tourists);
      setTourists(response.data);
    };

    fetchTourists();
  }, []);

  return tourists;
}

export default useGetTourists;

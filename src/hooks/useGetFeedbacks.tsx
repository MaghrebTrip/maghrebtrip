import axios from "axios";
import links from "../data/links";
import { useState, useEffect } from "react";

interface Feedback {
  id: number;
  touristId: number;
  attractionId: number;
  attractionType: string;
  rating: number;
  comment: string;
  date: string;
  edited: boolean;
}

function useGetFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await axios.get(links.feedbacks);
      setFeedbacks(response.data);
    };

    fetchFeedbacks();
  }, []);

  return feedbacks;
}

export default useGetFeedbacks;

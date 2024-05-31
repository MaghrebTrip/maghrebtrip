import { useState, useEffect } from "react";
import links from "../../data/links";
import {
  BiHotel,
  BiRestaurant,
  BiUser,
  BiMessageSquareDetail,
  BiBuildingHouse,
  BiMap,
} from "react-icons/bi";

interface Statistics {
  tourists: number;
  cities: number;
  hotels: number;
  restaurants: number;
  monuments: number;
  feedbacks: number;
  [key: string]: number;
}

function DashboardPage() {
  const [statistics, setStatistics] = useState<Statistics>({
    tourists: 0,
    cities: 0,
    hotels: 0,
    restaurants: 0,
    monuments: 0,
    feedbacks: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      const tourists = await fetch(links.tourists);
      const cities = await fetch(links.cities);
      const hotels = await fetch(links.hotels);
      const restaurants = await fetch(links.restaurants);
      const monuments = await fetch(links.monuments);
      const feedbacks = await fetch(links.feedbacks);

      const touristsData = await tourists.json();
      const citiesData = await cities.json();
      const hotelsData = await hotels.json();
      const restaurantsData = await restaurants.json();
      const monumentsData = await monuments.json();
      const feedbacksData = await feedbacks.json();

      setStatistics({
        tourists: touristsData.length,
        cities: citiesData.length,
        hotels: hotelsData.length,
        restaurants: restaurantsData.length,
        monuments: monumentsData.length,
        feedbacks: feedbacksData.length,
      });
    };

    fetchStatistics();
  }, []);

  return (
    <>
      <section id="dashboard" className="dashboard p-5">
        <div className="container">
          <h2>Dashboard</h2>
          <div className="row mt-5">
            {Object.keys(statistics).map((key) => (
              <div key={key} className="col-md-4">
                <div className="card text-white bg-secondary p-3 mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h1 className="display-4">{statistics[key]}</h1>
                        <h5 className="card-title">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </h5>
                      </div>
                      <div className="col-auto">
                        {key === "tourists" && <BiUser size={50} />}
                        {key === "cities" && <BiMap size={50} />}
                        {key === "hotels" && <BiHotel size={50} />}
                        {key === "restaurants" && <BiRestaurant size={50} />}
                        {key === "monuments" && <BiBuildingHouse size={50} />}
                        {key === "feedbacks" && <BiMessageSquareDetail size={50} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardPage;

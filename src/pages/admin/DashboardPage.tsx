import { useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);
import useGetTourists from "../../hooks/useGetTourists";
import useGetCities from "../../hooks/useGetCities";
import useGetHotels from "../../hooks/useGetHotels";
import useGetRestaurants from "../../hooks/useGetRestaurants";
import useGetMonuments from "../../hooks/useGetMonuments";
import useGetFeedbacks from "../../hooks/useGetFeedbacks";
import {
  BiUser,
  BiMap,
  BiHotel,
  BiRestaurant,
  BiBuildingHouse,
  BiMessageSquareDetail,
} from "react-icons/bi";

interface Totals {
  totalTourists: number;
  totalCities: number;
  totalHotels: number;
  totalRestaurants: number;
  totalMonuments: number;
  totalFeedbacks: number;
  [key: string]: number;
}

// interface Nationalities {
//   [key: string]: number;
// }

function DashboardPage() {
  const tourists = useGetTourists();
  const cities = useGetCities();
  const hotels = useGetHotels();
  const restaurants = useGetRestaurants();
  const monuments = useGetMonuments();
  const feedbacks = useGetFeedbacks();

  const [totals, setTotals] = useState<Totals>({
    totalTourists: 0,
    totalCities: 0,
    totalHotels: 0,
    totalRestaurants: 0,
    totalMonuments: 0,
    totalFeedbacks: 0,
  });
  // const [nationalities, setNationalities] = useState<Nationalities>({});

  useEffect(() => {
    setTotals({
      totalTourists: tourists.length,
      totalCities: cities.length,
      totalHotels: hotels.length,
      totalRestaurants: restaurants.length,
      totalMonuments: monuments.length,
      totalFeedbacks: feedbacks.length,
    });
  }, [tourists, cities, hotels, restaurants, monuments, feedbacks]);

  // useEffect(() => {
  //   const nationalities = tourists.reduce((acc: Nationalities, tourist) => {
  //     if (acc[tourist.nationality]) {
  //       acc[tourist.nationality]++;
  //     } else {
  //       acc[tourist.nationality] = 1;
  //     }
  //     return acc;
  //   }, {});
  //   setNationalities(nationalities);
  //   console.log(Object.keys(nationalities), Object.values(nationalities));
  // }, [tourists]);

  return (
    <>
      <section id="dashboard" className="dashboard p-5 overflow-auto" style={{ height: "100vh" }}>
        <div className="container">
          <h2>Dashboard</h2>
          <div className="row mt-5">
            {Object.keys(totals).map((key) => (
              <div key={key} className="col-md-4">
                <div className="card text-white bg-secondary p-3 mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h1 className="display-4">{totals[key]}</h1>
                        <h5 className="card-title">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </h5>
                      </div>
                      <div className="col-auto">
                        {key === "totalTourists" && <BiUser size={50} />}
                        {key === "totalCities" && <BiMap size={50} />}
                        {key === "totalHotels" && <BiHotel size={50} />}
                        {key === "totalRestaurants" && (
                          <BiRestaurant size={50} />
                        )}
                        {key === "totalMonuments" && (
                          <BiBuildingHouse size={50} />
                        )}
                        {key === "totalFeedbacks" && (
                          <BiMessageSquareDetail size={50} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row mt-5">
            <div className="col-md-6">
              <Pie
                data={{
                  labels: Object.keys(nationalities),
                  datasets: [
                    {
                      label: "Nationalities",
                      data: Object.values(nationalities),
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Nationalities",
                    },
                  },
                }}
              />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default DashboardPage;

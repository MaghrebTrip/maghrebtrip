import React, { useState, useEffect } from "react";
import axios from "axios";
import links from "../../data/links";

function Dashboard({ section }) {
  // const link = links.tourists;
  // const link = links.cities;
  // const link = links.hotels;
  // const link = links.restaurants;
  // const link = links.monuments;
  const link = links[section];
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  // const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get(link).then((response) => {
      console.log("data: ", response.data);
      setData(response.data);
      console.log("keys: ", Object.keys(response.data[0]));
      setKeys(Object.keys(response.data[0]));
      // data.map((row) => {
      //   values.push(Object.values(row));
      // });
      // console.log("values: ", values);
      // setValues(values);
    });
  }, [section]);
  return (
    <section id="tourists-management" className="tourists-management">
      <div className="container p-5">
        <h2 className="title">Tourists Management</h2>
        <table className="table">
          <thead>
            <tr>
              {keys && keys.map((key, index) => <th key={index}>{key}</th>)}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((row, index) => (
                <tr key={index}>
                  {keys.map((key, index) => (
                    <td key={index}>
                      {key === "image"
                        ? "image base 64"
                        : key === "about"
                        ? row[key].substring(0, 50) + "..."
                        : key === "description"
                        ? row[key].substring(0, 50) + "..."
                        : key === "password"
                        ? "********"
                        : key === "date"
                        ? new Date(row[key]).toLocaleString()
                        : row[key]}
                    </td>
                  ))}
                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;

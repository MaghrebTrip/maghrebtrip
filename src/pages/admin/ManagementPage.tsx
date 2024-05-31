import React, { useState, useEffect } from "react";
import axios from "axios";
import links from "../../data/links";

interface ManagementPageProps {
  section: keyof typeof links;
}

interface DataRow {
  [key: string]: any;
}

const ManagementPage: React.FC<ManagementPageProps> = ({ section }) => {
  const link = links[section];
  const [data, setData] = useState<DataRow[]>([]);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    axios.get(link).then((response) => {
      setData(response.data);
      if (response.data.length > 0) {
        setKeys(Object.keys(response.data[0]));
      }
    });
  }, [section, link]);

  return (
    <section id="admin-management" className="admin-management p-5">
      <div className="container">
        <div className="d-flex mb-4 justify-content-between align-items-center">
          <h2 className="title">
            {section.charAt(0).toUpperCase() + section.slice(1)} Management
          </h2>
          <button className="btn">Add New</button>
        </div>
        <div className="card py-3 overflow-auto" style={{ height: "70vh" }}>
          <table className="table">
            <thead>
              <tr>
                {keys.map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {keys.map((key, cellIndex) => (
                    <td key={cellIndex}>
                      {key === "image"
                        ? "image base 64"
                        : key === "about" || key === "description"
                        ? row[key]?.substring(0, 50) + "..."
                        : key === "password"
                        ? "********"
                        : key === "date"
                        ? new Date(row[key]).toLocaleString()
                        : row[key]}
                    </td>
                  ))}
                  <td>
                    <button className="btn me-2">Edit</button>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManagementPage;

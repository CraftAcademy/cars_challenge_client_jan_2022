import React, { useEffect, useState } from "react";
import axios from "axios";

const LuxCars = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const result = await axios.get("http://localhost:3000/api/lux-cars");
    setCars(result.data.cars);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <h2>Luxury cars</h2>
      <div data-cy="lux-cars-list">
        {cars.map((cars) => (
          <div style={{ display: "grid", gridTemplateColumns: "30vw 30vw" }}>
            <div key={cars.id}>
              <h3>
                {cars.brand} | {cars.model}
              </h3>
              <h4>{cars.year}</h4>
              <p>{cars.created_at} | {cars.updated_at}</p>
              <hr />
            </div>
            <div>
              <h2 style={{ paddingTop: 5 + "%" }}>€ {cars.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LuxCars;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const result = await axios.get("http://localhost:3000/api/cars");
    setCars(result.data.cars);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <h2>Menu</h2>
      <div data-cy="cars-list">
        {cars.map((cars) => (
          <div style={{ display: "grid", gridTemplateColumns: "30vw 30vw" }}>
            <div key={cars.id}>
              <h4>
                {cars.brand} | {cars.model}
              </h4>
              <p>{cars.year}</p>
              <hr />
            </div>
            <div>
              <h2 style={{ paddingTop: 5 + "%" }}>{cars.price} €</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;

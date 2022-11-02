import React from 'react';
import CarList from './CarList';


function CarListApp() {
  let header_str = "자동차 목록";
  return (
    <div className="CarListApp">
      <h1>{header_str}</h1>
      <CarList />
    </div>
  );
}

export default CarListApp;

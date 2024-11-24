// src/components/CardItem.jsx
import React from 'react';

const CardItem = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{value}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default CardItem;

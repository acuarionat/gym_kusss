import React from 'react';
import './Graph.css';

const Graph = () => {
  const data = [
    { month: 'Ene', value: 65 },
    { month: 'Feb', value: 50 },
    { month: 'Mar', value: 55 },
    { month: 'Abr', value: 60 },
    { month: 'May', value: 50 },
    { month: 'Jun', value: 20 },
    { month: 'Jul', value: 70 },
    { month: 'Ago', value: 40 },
    { month: 'Sep', value: 30 },
    { month: 'Oct', value: 40 },
    { month: 'Nov', value: 10 },
  ];

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="graph-container">
      <div className="y-axis">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="y-axis-label">
            {Math.round(maxValue - (maxValue / 5) * i)}kg
          </div>
        ))}
      </div>
      <div className="graph">
        {data.map((item, index) => (
          <div key={index} className="bar-container">
            <div className="bar" style={{ height: `${(item.value / maxValue) * 100}%` }}>
              <span className="bar-value">{item.value}kg</span>
            </div>
            <div className="x-axis-label">{item.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;

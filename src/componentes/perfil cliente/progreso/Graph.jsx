import React, { useEffect, useState } from "react";
import "./Graph.css";

const Graph = () => {
	const [data, setData] = useState([]);

	// Simular la llamada a una API para obtener los datos
	useEffect(() => {
		const fetchData = async () => {
			const response = await new Promise((resolve) => {
				setTimeout(() => {
					resolve([60, 50, 50, 60, 40]);
				}, 1000);
			});
			setData(response);
		};

		fetchData();
	}, []);

	return (
		<div className="graph-container">
			<div className="y-axis">
				{Array.from({ length: 8 }, (_, i) => (
					<div key={i} className="y-label">
						{70 - i * 10}kg
					</div>
				))}
			</div>
			<div className="bars">
				{data.map((value, index) => (
					<div
						key={index}
						className="bar"
						style={{ height: `${(value / 70) * 100}%` }}
					>
						<span className="bar-label">{value}kg</span>
					</div>
				))}
			</div>
			<div className="x-axis">
				{[
					"Ene",
					"Feb",
					"Mar",
					"Abr",
					"May",
					"Jun",
					"Jul",
					"Ago",
					"Sep",
					"Oct",
					"Nov",
				].map((month, index) => (
					<div key={index} className="x-label">
						{month}
					</div>
				))}
			</div>
		</div>
	);
};

export default Graph;

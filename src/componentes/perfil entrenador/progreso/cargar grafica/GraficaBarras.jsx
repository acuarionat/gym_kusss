import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./GraficaBarras.css";

const GraficaBarras = ({ data, selectedOption }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        const formatOption = (option) => option.toLowerCase().replace(/ /g, '_');

        const filteredData = data.filter(item => item[formatOption(selectedOption)] !== undefined);

        const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

        // Initialize data for all months with null values
        const monthData = Array(12).fill(null);

        // Populate monthData with actual values from filteredData
        filteredData.forEach(item => {
            const monthIndex = parseInt(item.fecha_seguimiento.split("-")[1], 10) - 1;
            monthData[monthIndex] = item[formatOption(selectedOption)];
        });

        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: monthNames,
                datasets: [
                    {
                        label: selectedOption,
                        data: monthData,
                        backgroundColor: "#eaafaf",
                        borderColor: "#f0f0f0",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#f0f0f0",
                        },
                        grid: {
                            color: "#a0a0a0",
                        },
                    },
                    x: {
                        ticks: {
                            color: "#f0f0f0",
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, selectedOption]);

    return (
        <div className="grafica">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default GraficaBarras;

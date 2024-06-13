import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./GraficaBarras.css"; 

const GraficaBarras = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        const weightData = Array(11).fill(0);
        data.forEach(item => {
            const month = new Date(item.date).getMonth();
            weightData[month] = item.weight;
        });

        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov"],
                datasets: [
                    {
                        label: "Kilogramos",
                        data: weightData,
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
                            callback: function(value) {
                                return value + ' kg';
                            }
                        },
                        title: {
                            display: false,
                        },
                        grid: {
                            color: "#a0a0a0", 
                        },
                    },
                    x: {
                        ticks: {
                            color: "#f0f0f0",
                        },
                        title: {
                            display: false,
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
    }, [data]);

    return (
        <div className="grafica">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default GraficaBarras;
import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Legend,
  Tooltip,
 
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "light section",
        data: [80, 100, 80, 50, 50, 60],
        backgroundColor: "#a9dfd8",

        barThickness: 25,
        borderRadius: Number.MAX_VALUE,
      },
      {
        label: "dark section",
        data: [70, 90, 70, 70, 55, 35],
        backgroundColor: "#2b2b36",
        hoverBackgroundColor: "#f2c8ed",
        barThickness: 25,
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };
  const options = {
    responsive: true,
    layout: {
      padding: {
        bottom: 30,
      },
    },

    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            let dataset = tooltipItem.dataset;
            let value = dataset.data[tooltipItem.dataIndex];
            let total = dataset.data.reduce((acc, val) => acc + val, 0);
            let percentage = ((value / total) * 100).toFixed(2);
            return `${percentage}%`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: { display: false },
      },
      y: {
        stacked: true,
        display: false,
        grid: { display: false },
      },
    },
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-5 w">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
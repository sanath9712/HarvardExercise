import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ScatterPlot = () => {
  const [data, setData] = useState({
    datasets: [],
  });

  const options = {
    responsive: false,  // Now set to true to handle manual canvas size
    maintainAspectRatio: false,  // Continue to not maintain aspect ratio
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'UMAP-1'
        }
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'UMAP-2'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/umap_coordinates.csv');
        const rawData = await response.text();

        const parsedData = rawData.split('\n').slice(1).filter(line => line.trim()).map(row => {
          const [x, y] = row.split(',');
          return { x: parseFloat(x), y: parseFloat(y) };
        });

        setData({
          datasets: [{
            label: 'UMAP Coordinates',
            data: parsedData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }]
        });
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Scatter 
      data={data} 
      options={options}
      width={1000}  // Directly setting width on the canvas
      height={800}  // Directly setting height on the canvas
    />
  );
};

export default ScatterPlot;

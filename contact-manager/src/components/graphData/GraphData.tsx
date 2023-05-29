import React, { FC } from 'react';
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns"; // Import the date-fns adapter
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Title } from "chart.js";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./GraphData.css"
Chart.register(
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title
);
interface GraphDataProps {
    historicalData: {
        cases: Record<string, number>;
    };
}

const GraphData: FC<GraphDataProps> = ({ historicalData }) => {

    // Prepare data for the line graph
    const chartData = {
        labels: Object.keys(historicalData?.cases || {}),
        datasets: [
            {
                label: "Total Cases",
                data: Object.values(historicalData?.cases || {}),
                borderColor: "rgb(255,99,132)",
                backgroundColor: 'rgba(255,99,132,0.5)',
            }
        ]
    };
    return (
        <div className='graphData__container'>
            <h3>Graph Data :- </h3>
            <Line data={chartData} />
        </div>
    )
}

export default GraphData
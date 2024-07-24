import React, { useState } from 'react';
import { useGetKpisQuery } from "@/state/api";

function PredictionComponent() {
    const {data} = useGetKpisQuery();
    console.log(data)
    const [predictions, setPredictions] = useState([]);

    const fetchData = async () => {
        // Fetch data from backend or load sample data
        const data1 = { data };
        // Send data to server-side endpoint
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });

        // Receive predictions from server
        const responseData = await response.json();
        setPredictions(responseData.predictions);
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Predictions</button>
            <ul>
                {predictions.map((prediction, index) => (
                    <li key={index}>{prediction}</li>
                ))}
            </ul>
        </div>
    );
}

export default PredictionComponent;

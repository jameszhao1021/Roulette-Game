import React, { useRef, useEffect } from "react";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function RoulleteWheel({ setMyChart }) {
    const wheel = useRef(null);
    let myChart = null; // Declare a variable to store the chart instance

    //Data size
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const innerData = [1, 1, 1, 1, 1, 1, 1, 1]

    //Background color for each piece of the wheel
    const pieColors = ['green', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black']
    const innerPieColors = ['rgb(120, 36, 36)']

//
useEffect(() => {
    if (wheel.current) {
        if (myChart) {
            myChart.destroy(); // Destroy the existing chart instance if it exists
        }

        const ctx = wheel.current.getContext('2d');
        ctx.canvas.width = 0;
        ctx.canvas.height = 0;

        myChart = new Chart(ctx, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
                labels: ['0', '28', '9', '26', '30', '11', '7', '20', '32', '17', '5', '22', '34', '15', '3', '24', '36', '13', '1', '00', '27', '10', '25', '29', '12', '8', '19', '31', '18', '6', '21', '33', '16', '6', '23', '35', '14', '2'],
                datasets: [
                    {
                        backgroundColor: pieColors,
                        data: data,
                    },
                    {
                        backgroundColor: innerPieColors,
                        data: innerData,
                        datalabels: {
                            display: false,
                        
                        },
                        rotation: 4.737,
                    },
                ],
            },
            options: {
                responsive: true,
                animation: { duration: 0 },
                plugins: {
                    tooltip: false,
                    legend: { display: false },
                    datalabels: {
                        display: true,
                        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                        anchor: 'end',
                        align: 'end',
                        offset: -40,
                        color: '#ffffff',
                        font: { size: 16, weight: 'bold' },
                        rotation: (context) =>
                                 context.dataIndex * (360 / context.chart.data.labels.length) +
                                360 / context.chart.data.labels.length / 2+
                                 context.chart.options.rotation,
                    },
                },
            },
        });

        // Call setMyChart to pass the myChart instance to the parent component
        setMyChart(myChart);

        // Adjust canvas size to accommodate labels
        ctx.canvas.width = wheel.current.offsetWidth;
        ctx.canvas.height = wheel.current.offsetHeight;
    }
}, []);

return <canvas className='canvas' ref={wheel} style={{ display: 'block', width: '100%', height: '100%' }} />;
}

export default RoulleteWheel;


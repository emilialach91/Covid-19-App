import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => { 
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChartConfirmed = (
        dailyData.length 
        ? (
            <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets:[{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label:'infected',
                    borderColor:'#3333ff',
                    fill: true,
                    marginBottom: '50px',
                }, 
                ],
            }}
         /> ) : null
    );

    const lineChartDeaths = (
        dailyData.length 
        ? (
            <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets:[{
                    data: dailyData.map(({ deaths }) => deaths),
                    label:'deaths',
                    borderColor:'#000',
                    fill: true,
                }, 
            ],
                
            }}
         /> ) : null
    );

    const barChart= (
     confirmed 
        ? (
            <Bar 
                 data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{ 
                        label: 'People',
                        backgroundColor:[ 
                            'rgb(255, 0, 0, 0.6)',
                            'rgb(0, 128, 0 , 0.6)',
                            'rgb(0, 0, 0, 0.6)',
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                 }}
    
                 option={{
                     legend: {display: false},
                     title: {display: true, text:`Current state in ${country}`},
                 }}
            />
        ) :null 
    );

    
    return (
        <div className={styles.container}>
            <div>
                 {country && barChart}  
            </div>
            <div className={styles.confirmed}>
                {!country && lineChartConfirmed}  
            </div>
            <div className={styles.deaths}>
                {!country && lineChartDeaths}
            </div>
        </div>
    )
}



export default Chart

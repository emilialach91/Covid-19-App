import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {

    const [dailyData, setDailyData] = useState({ });

    useEffect(() => {
        const fetchAPI = async () => { 
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);

        fetchAPI();
    });

    const lineChart = (
        dailyData[0]
        ? (
            <line 
            data={{
                labels: dailyData(({ date }) => date),
                datasets:[{
                    data: dailyData(({ confirmed }) => confirmed),
                    label:'infected',
                    borderColor:'#3333ff',
                    fill: true,
                }, 
                {
                    data: dailyData(({ deaths }) => deaths),
                    label: 'deaths',
                    borderColor:'red',
                    backgroundColor: 'rgb(255, 0, 0, 0.6)',
                    fill: true,
                }],
            }}
         /> ) : null

    );

    
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart

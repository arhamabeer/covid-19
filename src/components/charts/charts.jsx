import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './charts.module.css'

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);
// console.log('chart>>', confirmed)
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchApi();
        // console.log('dailyData>>>>' , dailyData.length)
    },[]);

    const lineChart = (
        dailyData
            ? (

                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#ad0000',

                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: '#000',
                            backgroundColor: '#282927',
                            fill: true
                        }]
                    }}
                />
            )
            :
            null
    );


    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Confirmed', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                '#b16060',
                                '#819c6e',
                                'rgb(112, 98, 98)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current condition of ${country}` }
                    }}
                />
            ) : null
    )
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
            {/* {lineChart} */}
        </div>
    )
}

export default Charts;
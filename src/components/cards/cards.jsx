import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core'
import styles from './cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log('cards=>', lastUpdate)
    if (!confirmed) {
        return 'Loading ...'
    }
    var date = new Date(lastUpdate).toDateString()
    // console.log('date>>> ', date)
    return (
        <div className={styles.container}>
            <Grid container className='main-grid-cov' spacing={3} justify='center'>
                <Grid item component={Card} xs={10} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color='textSecondary' variant='h6' gutterBottom  >Infected</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0} end={confirmed.value} duration={3} />
                        </Typography>
                        <Typography>as of: {date}</Typography>
                        <Typography variant='body2'>Total Number of Cases in Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={10} md={3} component={Card} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color='textSecondary' variant='h6' gutterBottom  >Recovered</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0} end={recovered.value} duration={3} /></Typography>
                        <Typography>as of: {date}</Typography>
                        <Typography variant='body2'>Number of Recovered Cases in Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={10} md={3} component={Card} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color='textSecondary' variant='h6' gutterBottom  >Deaths</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0} end={deaths.value} duration={3} /></Typography>
                        <Typography>as of: {date}</Typography>
                        <Typography variant='body2'>Number of Deaths in Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
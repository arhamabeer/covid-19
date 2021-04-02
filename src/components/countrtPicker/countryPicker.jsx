import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './countryPicker.module.css'
import { fetchCountry } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountry())
        }

        fetchAPI();

    }, [setCountries])
    // console.log(countries)
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countries.map((v, i) => <option key={i} value={v}>{v}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
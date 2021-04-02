import React from 'react';
import styles from './App.module.css'
import { fetchData } from './api'
import { Cards, Charts, CountryPicker } from './components'


class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {

    const data = await fetchData();
    this.setState({
      data: data
    })
    // console.log(data)
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({
      data: data,
      country: country
    })
    console.log(data)

  }
  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img style={{width: 150, marginTop: 10}} src={'https://pngimg.com/uploads/coronavirus/coronavirus_PNG93660.png'} /> 
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <div className={styles.createdAAA}>
          <h4 >Created by AAA</h4>
        </div>
      </div>
    );
  }
}

export default App;

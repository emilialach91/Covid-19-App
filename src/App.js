
import React from 'react';
import { Cards, Chart, CountryPicker, Symptoms} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaLogo from './images/Covid-logo.png';



class App extends React.Component{
  
  state = {
    data: {},
    country: '',
    showing: false,
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data : fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
   
    this.setState({ data : fetchedData, country: country })
    
  }


    render () {
    const { data, country } = this.state;
    const { showing } = this.state;

      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <img className={styles.image} src={coronaLogo} />
            <button onClick={() => this.setState({ showing : !showing })}>SYPMTOMS</button>
            { showing 
                ? <Symptoms />
                : null
            }  
        </div>  
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
        </div>
      );
    }
}

export default App;

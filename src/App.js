
import React from 'react';
import { Cards, Chart, CountryPicker, LearnMore} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaLogo from './images/Covid-logo.png';



class App extends React.Component{
  
  state = {
    data: {},
    country: '',
    color: '#0e1b46',
    showing: false,
    text: 'Learn More'
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data : fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
   
    this.setState({ data : fetchedData, country: country })
    
  }

  onChange= () => {
    this.setState({ 
      color: 'red',
      showing: true,
      text: 'Statistics'
    });
 }

    render () {
    const { data, country } = this.state;
    const { showing, color, text} = this.state;


      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <img className={styles.image} src={coronaLogo} />
            <button style={{ backgroundColor: this.state.color}} onClick={this.onChange}>{text}</button>
            { showing 
                ? <LearnMore />
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



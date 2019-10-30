import React from 'react';
import Header from './componentes/header';
import Filters from './componentes/filters';
import Hotels from './componentes/hotels';
import Moment from 'moment'

import 'moment/locale/es';

import './App.css';
import 'bulma';
import hotelsService from './services/hotelsApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();
    const todayFormatted = Moment(today).format('YYYY-MM-DD')
    const nextMonthFormatted = Moment(today).add(1, 'month').format('YYYY-MM-DD')

    this.state =  {
      fetching: true,
      hotels: [],
      hotelsFiltered: [],

      filters: {
      dateFrom: todayFormatted, 
      dateTo: nextMonthFormatted,
      country: undefined, 
      price: undefined,
      rooms: undefined,
      },
    };

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(payload) {
    console.log(payload)
    const hotelsFiltered = hotelsService.filterHotels(this.state.hotels, payload);
    this.setState({
      filters: payload,
      hotelsFiltered,
    })

    console.log(this.state);
  }

  componentDidMount() {
    hotelsService.getHotels().then(hotels => this.setState({ hotels, hotelsFiltered: hotels, fetching: false}));

    console.log(this.state.hotels);
  }

  /*async componentDidMount() {
    try {
      const response = await fetch(
        "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
      );
      
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log({ hotels: json, fetching: true });
      this.setState({ 
        hotels: json, 
        hotelsLoaded: true });
      }
      
      catch (err) {
      console.log(err);
    }
    /*this.filterHotels().then(hotels => this.setState({hotels, hotelsFiltered: hotels}))
  }*/


  /*handleFilterChange(payload) {
    const hotelsFiltered = this.filterHotels(this.state.hotels, payload)
    this.setState({
      filters: payload,
      hotelsFiltered,
    })
    console.log(hotelsFiltered)
  }*/
  

  /*filterHotels (hotels, payload) {
    let {dateFrom, dateTo, country, price, rooms} = payload
    return hotels.filter(hotels => {
      return Moment(hotels.availabilityFrom).format('YYYY-MM-DD') >= dateFrom
      && Moment(hotels.availabilityTo).format('YYYY-MM-DD') <= dateTo
      && hotels.rooms === (rooms !== 'select' ? rooms : hotels.rooms)
      && hotels.price === (price !== 'select' ? parseInt(price) : hotels.price)
      && hotels.country.trim().toLowerCase() === (country !== 'select' ? country.trim().toLowerCase() : hotels.country.trim().toLowerCase())
    })
  }*/
 
  render() {
    const { hotelsFiltered, filters } = this.state;
    
    return (
      <div>
        <Header filters = { filters }/>
        <Filters filters = { filters } onFilterChange={ this.handleFilterChange } />
        <Hotels hotelsFiltered = { hotelsFiltered } /> 
      </div>
    );
  }
}

export default App;





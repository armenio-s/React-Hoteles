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

    this.state =  {
      fetching: true,
      hotels: [],
      hotelsFiltered: [],

      filters: {
      dateFrom: Moment(today).format('YYYY-MM-DD'), 
      dateTo: Moment(today).add(1, 'month').format('YYYY-MM-DD'),
      country: '', 
      price: '',
      rooms: '',
      },
    };

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(payload) {
    const hotelsFiltered = hotelsService.filterHotels(this.state.hotels, payload);
    this.setState({
      filters: payload,
      hotelsFiltered: hotelsFiltered,
    })

    console.log(this.state);
  }

  componentDidMount() {
    hotelsService.getHotels().then(hotels => this.setState({ 
      hotels, 
      hotelsFiltered: hotels, 
      fetching: false, 
      })
    );

    console.log(this.state.filters);
  }
 
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





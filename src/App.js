import React from 'react';
import Header from './componentes/header';
import Filters from './componentes/filters';
import Hotel from './componentes/hotel';
import './App.css';
import 'bulma';

class App extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state =  {
      filters: {
      dateFrom: today, 
      dateTo: new Date(today.valueOf() + 86400000),
      country: undefined, 
      price: undefined,
      rooms: undefined,
      hotels: []
      },
    };

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
      );
      
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log({ hotels: json, hotelsLoaded: true });
      } 
      
      catch (err) {
      console.log(err);
      }
  }

 handleFilterChange(payload) {
  this.setState({
    filters: payload
  })
}
 
  render() {
    return (
      <div>
        <Header filters = {this.state.filters}/>
        <Filters filters = {this.state.filters} onFilterChange={ this.handleFilterChange } />
        <Hotel hotels = {this.state.hotels} />
      </div>
    );
  }
}

export default App;





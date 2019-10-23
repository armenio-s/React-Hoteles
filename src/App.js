import React from 'react';
import Header from './componentes/header';
import './App.css';
import 'bulma'



const today = new Date()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
          dateFrom: today, 
          dateTo: new Date(today.valueOf() + 86400000),
          country: undefined, 
          price: undefined,
          rooms: undefined
      }
    };
  }

  render() {
    return (
      <div>
        <Header filters = {this.state.filters}/>
      </div>
    );
  }
}

export default App;

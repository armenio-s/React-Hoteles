import React from 'react';
import DateFilter from './datefilter';
import OptionsFilter from './optionsfilter';

import 'moment/locale/es';

class Filters extends React.Component {
    constructor(props) {
      super(props)
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      let payload = this.props.filters
      payload[event.target.name] = event.target.value

      this.props.onFilterChange(payload)
    }
  
    render() {
      return (
        <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
          <div className="navbar-item">
            <DateFilter
              date={ this.props.filters.dateFrom }
              onDateChange={ this.handleInputChange }
              name="dateFrom"
              icon="sign-in-alt" />
          </div>
          <div className="navbar-item">
            <DateFilter
              date={ this.props.filters.dateTo }
              onDateChange={ this.handleInputChange }
              name="dateTo"
              icon="sign-out-alt" />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              onOptionChange={ this.handleInputChange }
              options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
              selected={ this.props.filters.country }
              name="country"
              icon="globe" />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              onOptionChange={ this.handleInputChange }
              options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
              selected={ this.props.filters.price }
              name="price"
              icon="dollar-sign" />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              onOptionChange={ this.handleInputChange }
              options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
              selected={ this.props.filters.rooms }
              name="rooms"
              icon="bed" />
          </div>
        </nav>
      )
    }
  }

export default Filters;
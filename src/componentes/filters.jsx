import React from 'react';
import DateFilter from './datefilter';
import OptionsFilter from './optionsfilter';

class Filters extends React.Component {
    constructor(props) {
      super(props)
  
        /*this.onDateDesdeChange = this.onDateDesdeChange.bind(this);
        this.onDateHastaChange = this.onDateHastaChange.bind(this);*/
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    /*onDateDesdeChange = (event) => {
        console.log(event)
        this.setState( {dateFrom: (event.target.value)} )
    }
    
    onDateHastaChange = (event) => {
        console.log(event)
        this.setState({dateTo: (event.value)})
    }*/

    handleDateChange(event) {
      let payload = this.props.filters
      payload[event.target.name] = event.target.value

      this.props.onFilterChange(payload)
    }
  
    handleOptionChange(event) {
      let payload = this.props.filters
      payload[event.target.name] = event.target.value
        
      console.log(payload)
      this.props.onFilterChange(payload)
    }
  
    render() {
      return (
        <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
          <div className="navbar-item">
            <DateFilter
              date={ this.props.filters.dateFrom }
              onDateChange={ this.handleDateChange }
              name="dateFrom"
              icon="sign-in-alt" />
          </div>
          <div className="navbar-item">
            <DateFilter
              date={ this.props.filters.dateTo }
              onDateChange={ this.handleDateChange }
              name="dateTo"
              icon="sign-out-alt" />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              onOptionChange={ this.handleOptionChange }
              options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
              selected={ this.props.filters.country }
              name="country"
              icon="globe" />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              onOptionChange={ this.handleOptionChange }
              options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
              selected={ this.props.filters.price }
              name="price"
              icon="dollar-sign" />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              onOptionChange={ this.handleOptionChange }
              options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
              selected={ this.props.filters.rooms }
              name="rooms"
              icon="bed" />
          </div>
        </nav>
      )
    }
  }




/*const today = new Date();




class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            dateFrom: today, 
            dateTo: new Date(today.valueOf() + 86400000),
            country: undefined, 
            price: undefined,
            rooms: undefined,
        }

        this.onDateDesdeChange = this.onDateDesdeChange.bind(this);
        this.onDateHastaChange = this.onDateHastaChange.bind(this);
    }

    onDateDesdeChange = (event) => {
        console.log(event)
        this.setState({dateFrom: new Date(event)})
    }
    
    onDateHastaChange = (event) => {
        console.log(event)
        this.setState({dateTo: new Date(event)})
    }

    render() {
        return(
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter date={this.state.dateFrom} onDateChange={this.onDateDesdeChange}
                    icon="sign-in-alt"/>
                </div>

                <div className="navbar-item">
                    <DateFilter date={this.state.dateTo} onDateChange={this.onDateHastaChange}
                    icon="sign-out-alt"/>
                </div>

                <div className="navbar-item">
                    <OptionsFilter
                        options={ [ 
                            {value: undefined, name: 'Todos los países'}, 
                            {value: 'Argentina', name: 'Argentina'}, 
                            {value: 'Brasil', name: 'Brasil'}, 
                            {value: 'Chile', name: 'Chile'}, 
                            {value: 'Uruguay', name: 'Uruguay'} 
                        ] }
                        selected={ this.props.filters.country }
                        name="country" 
                        icon="globe"
                    />
                </div>

                <div className="navbar-item">
                    <OptionsFilter 
                    icon="dollar-sign"/>
                </div>

                <div className="navbar-item">
                    <OptionsFilter 
                    icon="bed"/>
                </div>
            </nav>
        )
    }
}*/

export default Filters;
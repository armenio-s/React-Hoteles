import React from 'react';

class OptionsFilter extends React.Component {
    constructor(props) {
      super(props)
      this.handleOptionChange = this.handleOptionChange.bind(this)
    }
  
    handleOptionChange(event) {
      this.props.onOptionChange(event)
    }
  
    render() {
      let i = 0;
      return (
        <div className="field">
          <div className="control has-icons-left">
            <div className="select" style={ {width: '100%'} }>
              <select onChange={ this.handleOptionChange } 
                value={ this.props.selected } 
                style={ {width: '100%'} } 
                name={ this.props.name }
                >
                { this.props.options.map((option) => <option 
                value={ option.value || '' } 
                key={ i++ }>
                { option.name }
                </option> ) }
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className={ `fas fa-${this.props.icon}` }></i>
            </div>
          </div>
        </div>
      )
    }
  }
  

export default OptionsFilter;
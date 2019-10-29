import React from 'react';
import DataTag from './dataTag';
import PriceTag from './priceTag';

class Hotel extends React.Component {

    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.children.photo} alt="" />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.name}</p>
                    <p></p>
                    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                        <DataTag icon="globe"></DataTag>
                        <DataTag icon="bed"></DataTag>
                        <PriceTag></PriceTag>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="aa" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        )
    }
}

export default Hotel;
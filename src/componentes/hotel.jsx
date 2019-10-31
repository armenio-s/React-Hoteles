import React from 'react';
import DataTag from './dataTag';
import PriceTag from './priceTag';

class Hotel extends React.Component {

    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.hotel.photo} alt={this.props.hotel.slug} />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.hotel.name}</p>
                    <p>{this.props.hotel.description}</p>
                    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                        <DataTag icon="globe">{this.props.hotel.city}</DataTag>
                        <DataTag icon="bed">{this.props.hotel.rooms}</DataTag>
                        <PriceTag price={this.props.hotel.price}></PriceTag>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={()=>{ alert("Aún no tenemos disponible esta funcionalidad"); }} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</button>
                </div>
            </div>
        )
    }
}

export default Hotel;
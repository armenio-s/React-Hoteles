import React from 'react';
import Hotel from './hotel';

class Hotels extends React.Component {
   
    render() {
        let i = 0;
        return(
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                <p className="resultados">Se han encontrado: {this.props.hotels.length} hoteles</p>
                    <div className="columns is-multiline">
                        { this.props.hotels.length ? (
                            this.props.hotels.map(hotel => 
                                (
                                    <div className="column is-one-third" key={ i++ }>
                                        <Hotel hotel={ hotel } />
                                    </div>
                                )
                            )
                        ) : (
                            <article className="message is-warning">
                                <div className="message-body">
                                    No se han encontrado hoteles que conincidan con tu busqueda
                                </div>
                            </article>
                        )}
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Hotels;
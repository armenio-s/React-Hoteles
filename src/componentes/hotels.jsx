import React from 'react';
import Hotel from './hotel';

class Hotels extends React.Component {
   
    render() {
        return(
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        { this.props.children.length ? (
                            this.props.children.map(hotels => (
                                console.log(hotels),
                                <div className="column is-one-third">
                                    <Hotel data={ hotels } />
                                </div>
                            ))
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
import React from 'react';

class Hotel extends React.Component {
    

    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://commons.wikimedia.org/wiki/File:Chuck_Norris_May_2015.jpg" alt="la puta que te pario" />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4"></p>
                    <p></p>
                    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                        
                    </div>
                </div>
                <div className="card-footer">
                    <a href="clarin.com" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        )
    }
}

export default Hotel;
import React from 'react';
import Moment from 'moment'

import 'moment/locale/es';

class Header extends React.Component {
    render() {
        let {filters} = this.props
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Hoteles</h1>
                        <h2 className="subtitle">
                            desde el <strong>{ Moment(filters.dateFrom).format('LL') } </strong> 
                            hasta el <strong>{ Moment(filters.dateTo).format('LL') }</strong>
                        </h2>
                        <p className="subtitle">
                            { filters.country !== '' ? ` en ${filters.country} ` : '' }
                            { filters.price !== '' ? ` por ${'$'.repeat(filters.price)}` : '' }
                            { filters.rooms !== '' ? ` de hasta ${filters.rooms} habitaciones` : '' }
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;


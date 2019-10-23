import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Hoteles</h1>
                        <h2 className="subtitle">
                            desde el <strong>{this.props.filters.dateFrom.toLocaleString('es-AR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} </strong> 
                            hasta el <strong>{this.props.filters.dateTo.toLocaleString('es-AR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                        </h2>
                        <p>
                            { this.props.filters.country ? ` en ${this.props.filters.country}` : '' }
                            { this.props.filters.price ? ` por ${'$'.repeat(this.props.filters.price)}` : '' }
                            { this.props.filters.rooms ? ` de hasta ${this.props.filters.rooms} habitaciones` : '' }
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;


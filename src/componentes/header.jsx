import React from 'react';

class Header extends React.Component {
    render() {
        let {filters} = this.props
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Hoteles</h1>
                        <h2 className="subtitle">
                            desde el <strong>{filters.dateFrom.toLocaleString('es-AR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} </strong> 
                            hasta el <strong>{filters.dateTo.toLocaleString('es-AR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                        </h2>
                        <p>
                            { filters.country ? ` en ${filters.country}` : '' }
                            { filters.price ? ` por ${'$'.repeat(filters.price)}` : '' }
                            { filters.rooms ? ` de hasta ${filters.rooms} habitaciones` : '' }
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;


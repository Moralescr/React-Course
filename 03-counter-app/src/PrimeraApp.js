// Functional components 

import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo }) => {



    return (
        <Fragment>
            <h1> { saludo } </h1>
            <p>Esta es una aplicación</p>
            <p> { subtitulo } </p>
        </Fragment>
        // <>
        //     <h1>Hola Mundo</h1>
        //     <p>Esta es una aplicación</p>
        // </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
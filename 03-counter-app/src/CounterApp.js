//Para crear todo el componente se coloca rafcp

import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ( { numero = 10} ) => {

    const [counter, setCounter ] = useState(numero);

    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSubtract = () =>{
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( numero );
    }

    return (
        <>
            <h1> CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick = { handleAdd }> +1 </button>
            <button onClick = { handleReset }> Reset </button>
            <button onClick = { handleSubtract }> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number
}

export default CounterApp;

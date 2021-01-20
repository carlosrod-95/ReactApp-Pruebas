import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);
    
    //handleAdd
    const handleAdd = () => {
        // console.log(e);
        // setCounter( counter + 1)
        setCounter( (c) => c + 1);
    }

    //handleRest
    const handleRest = () => {
        setCounter( counter - 1);
    }

    //handleReset
    const handleReset = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRest}>-1</button>
        </>
    )
}

// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired
// }

export default CounterApp

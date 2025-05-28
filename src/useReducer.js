
// the useReducer hook is similar to useState, but it is more powerful and flexible.
// it allows for custome state logic and is more suitable for complex state management scenarios.

//Syntax: useReducer(reducer, initialState) useReducer hook accepts two arguments: a reducer function and an initial state value.
//
// reducer function contains your custome state logic and the instalState can be simaple value or an object.
//Counter  

import React, { useReducer } from 'react';
const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}


const CounterAppWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState); // reducer function and initial state

    return (
        <div> 
            <h2>Counter value:{state.count} </h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

        </div>
    );

}

export default CounterAppWithUseReducer;

/*
Add
update
delete 

*/
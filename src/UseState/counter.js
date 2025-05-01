//useState
// useState is a hook that allows you to add state to functional components.
//class and functional components 

// const [state, setState] = useState(initialValue); // number, string, boolean, object, array, function
//initialValue is the initial state value.
//state is the current state value.
//setState is a function that allows you to update the state value.
import React, { use, useState } from 'react';
const CounterComponent = () => {
    //const [state, setState] = useState(initialValue)
    const [count,setCount] = useState(0);
    //intialvalue is 0
    return (
        <div>
            <h2>Counter Component</h2>
             <p> Counter Value is {count}</p>
             <button onClick={() => setCount(count + 1)}>Incement</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </div>
    );

}
export default CounterComponent;
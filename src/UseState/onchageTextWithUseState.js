//
import React,{useState} from 'react';
const OnchangeTextWithUseState = () => {
    const [value,setValue] = useState('');
    return (
        <div>
            <h2>OnchangeTextWithUseState</h2>
            <input type="text"
             value={value}
             placeholder="Enter data"
             onChange={(e) => setValue(e.target.value)} />
             <p>Value is {value}</p>
        </div>
    );
}

export default OnchangeTextWithUseState;
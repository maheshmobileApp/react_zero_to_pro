
import React, { useState } from 'react';

const ObjectStateComponent = () => {
    const [user, setUser] = useState({name:'',email:''});
    //setUser({...user, name: e.target.value})
    return (
        <div>
            <h2>Object state component</h2>
            <input
            type='text'
            value={user.name}
            placeholder='Enter Name'
            onChange={(e) => setUser({...user, name:e.target.value}) }
            
            ></input>
            <input
                type='text'
                value={user.email}
                placeholder='Enter Email'
                onChange={(e) => setUser({...user, email: e.target.value })}
            ></input>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );


    

}
//spread  operator, ...user , copy the existing object and update the value

export default ObjectStateComponent;
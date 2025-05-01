//Array sate

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoTaskComponent = () => {
    const [tasks, setTasks] = useState([]); //0, '', [], {}, null, undefined, false
     const [value,setValue] = useState('');

     const addTask = () => {
        if(value.trim() !== '') {
            const newTask = {
                id: uuidv4(),
                task: value
            }
            setTasks([...tasks, newTask]);
            setValue('');
        }
     }

    return (
        <div>
            <h2>Todo Task Component</h2>
            <input type="text"
            value={value}
              placeholder='Enter Task'
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <button onClick={addTask}>Add Task</button>
            <ul> { 
                tasks.map((task, index) => {
                    return <li key={task.id}>Task Name: {task.task}</li>
                })}

            </ul>
        </div>
    );

}
export default TodoTaskComponent;
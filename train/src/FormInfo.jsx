import React from 'react';
import { useState } from 'react';

const FormInfo = ({ onClickAdd }) => {
    const [value, setValue] = useState('');

    const handleInputChange = e => {
        setValue(e.target.value);
    }

    const handleOnClicked = () => {
        const newCourse = {
            id: Math.floor(Math.random() * 1000),
            title: value,
        }
        onClickAdd({ type: 'ADD', course: newCourse })
        setValue('')
    }
    return ( 
        <div>
            <input type="text" onChange={handleInputChange} value={value} />
            <button onClick={handleOnClicked}>Dodaj pozycje</button>
        </div>
     );
}
 
export default FormInfo;
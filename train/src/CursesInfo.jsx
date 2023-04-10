import React from 'react';

const CursesInfo = ({ id, title, onClickHandler }) => {
    
    const handleOnClick = () => onClickHandler({id, type: 'REMOVE'})
    return (
        <div>
            <p>{title}</p>
            <button onClick={handleOnClick}>Usuń pozycje</button>
        </div>
      );
}
 
export default CursesInfo;
import { useState } from 'react';
import './App.css';


const App = () => {

  const [value, setValue] = useState('');

  const handleOnChange = event => {
   setValue(event.target.value);
  }

  const handleOnClick = () => {
    setValue('');
  }


  return ( 
    <>
      <input type="text" value={value} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Reset</button>
      <h1>{value}</h1>
    </>
   );
}
 
export default App;


















// const App = () => {

//   const [text, setText] = useState('',)
  
//   const handleButton = () => {
//     setText(`${text}a`)
//   }


//   return ( 
//     <>
//       <button onClick={handleButton}>Dodaj a</button>
//       <h1>{text}</h1>
//     </>
//    );
// }
 
// export default App;














// const App = () => {

//   const [items] = useState({
//     items1: 'pizza',
//     items2: 'ham',
//     items3: 'cookie',
//     items4: 'coca-cola',
//   })




//   return (
//     <div className="App">
//       <h1>Lista zakupów</h1>
//       <ul>
//         <ListItem name={items.items1} example={2 + 2} />
//         <ListItem name={items.items2}/>
//         <ListItem name={items.items3}/>
//         <ListItem name={items.items4}/>
//       </ul>
//     </div>
//   );
// }

// const ListItem = ({ name, example }) => (
//   < li > {name} : {example}</li>
// );

// export default App;

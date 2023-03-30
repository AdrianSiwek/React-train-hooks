import { useState } from 'react';
import './App.css';

const SUBSTRACTION = 'substraction';
const RESET = 'reset';
const ADDITION = 'addition';

const App = (props) => {

  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBSTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === RESET) {
      setCount(count + 1);
      setResult('0');
    } else if (type === ADDITION) {
      setCount(count + 1);
      setResult(result + number);
    }
  }


  return ( 
    <>
      <MathButton
        name='-10'
        number={10}
        type={SUBSTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name='-1'
        number={1}
        type={SUBSTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name='Reset'
        type={RESET}
        click={handleMathClick}
      />
      <MathButton
        name='+10'
        number={10}
        type={ADDITION}
        click={handleMathClick}
      />
      <MathButton
        name='+1'
        number={1}
        type={ADDITION}
        click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </>
   );
}

const MathButton = ({ click, number, type, name }) => {
  const handleOnClick = () => click(type, number) 
  return (
    <button onClick={handleOnClick}>{name}</button>
  )
}

const ResultPanel = ({ count, result }) => {
  const additionInformation = count > 10 ?
    (<span>.Przeciążenie procesora</span>) : null
  
  return (
    <>
      <h2>Liczba kliknięć: {count}{additionInformation}</h2>
      <h2>Wynik: {result}</h2>
    </>
  )
}
 
export default App;

















// const App = () => {

//   const [value, setValue] = useState('');

//   const handleOnChange = event => {
//    setValue(event.target.value);
//   }

//   const handleOnClick = () => {
//     setValue('');
//   }


//   return ( 
//     <>
//       <input type="text" value={value} onChange={handleOnChange} />
//       <button onClick={handleOnClick}>Reset</button>
//       <h1>{value}</h1>
//     </>
//    );
// }
 
// export default App;


















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

import { useState } from 'react';
import './App.css';

const App = () => {

  const [items] = useState({
    items1: 'pizza',
    items2: 'ham',
    items3: 'cookie',
    items4: 'coca-cola',
  })




  return (
    <div className="App">
      <h1>Lista zakupów</h1>
      <ul>
        <ListItem name={items.items1} example={2 + 2} />
        <ListItem name={items.items2}/>
        <ListItem name={items.items3}/>
        <ListItem name={items.items4}/>
      </ul>
    </div>
  );
}

const ListItem = ({ name, example }) => (
  < li > {name} : {example}</li>
);

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import {SearchBox} from './components/search-box/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json() )
    .then(users => setMonsters(users))
  }, []);

   const  handleChange = (e) =>  {
    setSearchField(e.target.value)
    }
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        handleChange={handleChange} 
        placeholder='Search Monsters...'  />
        <CardList monsters={filteredMonsters} />
       </div>
      );
    }

export default App;

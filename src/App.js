import React from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import {SearchBox} from './components/search-box/SearchBox';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     monsters: [],
     searchField: ''
    } 
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json() )
    .then(users => this.setState({monsters: users}) )
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
    render() {
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        handleChange={this.handleChange} 
        placeholder='Search Monsters...'  />
        <CardList monsters={filteredMonsters} />
       </div>
      );
    }} 

export default App;

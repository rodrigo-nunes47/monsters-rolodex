import React, { Component } from 'react';
import { CardList } from './componente/card-list/card-list.component';
import { SearchBox } from './componente/search-box/search-box.component'
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    //Add the this keyword scope to the function
    //Use arrow functions aproach is a better choice because they bind the this context wich they are defined
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()
    ).then(
      users => this.setState({ monsters: users })
    )
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox           
          placeholder='search monsters' 
          handleChange={ this.handleChange }
        />
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react"
import "./App.css"

import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      peoples: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ peoples: users }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { peoples, searchField } = this.state
    const filteredPeoples = peoples.filter(people =>
      people.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className='App'>
        <h1>Peoples Rolodex </h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList peoples={filteredPeoples} />
      </div>
    )
  }
}

export default App

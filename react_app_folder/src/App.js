import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


function PeopleRender(props) {
    const people = props;

    const PeopleList  = people.map(person =>
        <li>{person.name}</li>
    );

    return(
        <ul>{PeopleList}</ul>
    );
}

class App extends Component {

  render() {
    const people = [{name: "john", id: 1}, {name: "alice", id: 2}]
    return (
        <PeopleRender people={people}/>
    );
  }
}

export default App;

let store = createStore(actions)
render(
    <Root store={store} />,
    document.getElementById('root')
)
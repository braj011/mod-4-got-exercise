import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterContainer from './CharacterContainer';
import CharacterDetails from './CharacterDetails';

class App extends Component {

  state = {
    house: [],
    memberUrls: [],
    members: [],
    filter: '',
    sortClick: false

  }

  componentDidMount() {
    return fetch('https://anapioficeandfire.com/api/houses/362')
      .then(resp => resp.json())
      .then(house => {
        this.setState({
            house: house,
            memberUrls: house.swornMembers
        })
      }).then(() => this.getCharacters())
      // .then(resp => console.log(resp))
      // then - always needs a callback function in it
      // this means that the function inside will only execute once the 'then' is actually reached  
  }

  

  getCharacters = () => {
    let membersArray = this.state.memberUrls
    membersArray.forEach(url => fetch(url)
    .then(resp => resp.json())
    // .then(resp => console.log(resp))
    .then(member  => {
        this.setState({
          members: this.state.members.concat(member)
        })
    })
    )}

    handleFilter = (e) => {
      this.setState({
        filter: e.target.value
      })
    }

    sortMembers = (arr) => {
      // console.log("hi")
      // this.state.sortClick ? arr = arr.reverse() : null
      // return arr
      if(this.state.sortClick){
        return arr.sort((a,b) => a.name.localeCompare(b.name))
      }
      else{
        return arr
      }
    }

    sortClickState = () => {
      this.setState({ sortClick: !this.state.sortClick})
    }


  render() {
    const { getCharacters } = this
    const { sortClick } = this.state
    let filteredMembers = this.state.members.filter(member => member.name.includes(this.state.filter))
    return (
      <div className="App">
        GOT COMING SOON
        <input onChange={this.handleFilter}/> 
        <button onClick={this.sortClickState}> Sort by Name </button>
        <CharacterDetails className="CharDetails" /> 
        <CharacterContainer members={this.sortMembers(filteredMembers)} /> 

      </div>
    );
  }
}

export default App;

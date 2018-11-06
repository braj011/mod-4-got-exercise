import React, { Component } from 'react';
import CharacterCard from './CharacterCard';


class CharacterContainer extends Component {


  render() {
    return (
      <div className="CharacterContainer">
        {
        this.props.members.map(char =>  <CharacterCard char={char} key={char.url} /> )
        }
      </div>
    );
  }
}

export default CharacterContainer;
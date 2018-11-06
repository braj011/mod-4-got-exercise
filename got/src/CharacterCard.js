import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class CharacterCard extends Component {

  state = {
    clicked: false
  }


  render() {
    const {char} = this.props
    return (
      <div className="Card" onClick={() => this.setState( {clicked: !this.state.clicked})}>
        { char.name }

        { !!this.state.clicked ? 
            char.titles.length > 0  ? 
                <div> {char.titles} </div>
                : 
                null
            : 
            null
        } 

      </div>
      
    )
  }

} 

export default CharacterCard;
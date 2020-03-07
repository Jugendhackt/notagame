import React, {Component} from 'react';

class Auswahlseite extends React.Component {
  render() {
    return(
      <div>
      <h1>Deine Entscheidungen:</h1>
      <p> {this.props.name} </p>
      <p id= "Beschreibung"> Beschreibung beschreiben die Beschreibung test test test</p>
      <button> Test </button>
      <button> Test </button>
      </div>
      );
  }
}

export default Auswahlseite;

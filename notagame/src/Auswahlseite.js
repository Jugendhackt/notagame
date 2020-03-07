import React, {Component} from 'react';

class Auswahlseite extends React.Component {
  render() {
    return(
      <div>
      <h1>Deine Entscheidungen:</h1>
      <p> {this.props.id} </p>
      <p id= "Beschreibung"> {this.props.description}</p>
      <button onClick = {this.props.handlerFirst}> {this.props.options[0]}</button>
      <button onClick = {this.props.handlerSecond}>{this.props.options[1]}</button>
      </div>
      );
  }
}

export default Auswahlseite;

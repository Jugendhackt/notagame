import React, {Component} from 'react';
import "./Auswahlseite.css"

class Auswahlseite extends React.Component {
  render() {
    return(
      <div>
      <h1 className="Title">Deine Entscheidungen:</h1>
      <p> {this.props.id} </p>
      <p id= "Beschreibung"> {this.props.description}</p>
      <button onClick = {this.props.handlerFirst}> {this.props.options[0]}<div className="ButtonImage"></div></button>
      <button onClick = {this.props.handlerSecond}>{this.props.options[1]}<div className="ButtonImage"></div></button>
      </div>
      );
  }
}

export default Auswahlseite;

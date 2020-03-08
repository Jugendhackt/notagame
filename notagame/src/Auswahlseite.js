import React from 'react';

class Auswahlseite extends React.Component {
  render() {

    if(this.props.options[1] !== undefined){
      return(
        <div>
        <h1 id="Titel">{this.props.title}</h1>
        <p id= "Beschreibung"> {this.props.description}</p>
        <div id = "buttons">
        <button onClick = {this.props.handlerFirst}> {this.props.options[0]}</button>
        <button onClick = {this.props.handlerSecond}>{this.props.options[1][0]}</button>
        </div>
        </div>
        )
    }else{
      return(
        <div>
          <h1>{this.props.title}</h1>
          <p id= "Beschreibung"> {this.props.description}</p>
          <button onClick = {this.props.handlerFirst}> {this.props.options[0]}</button>
        </div>
        )
    }
  }
}

export default Auswahlseite;

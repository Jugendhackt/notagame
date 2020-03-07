import React from 'react';
import './App.css';
import Auswahlseite from './Auswahlseite';

class App extends React.Component{
  state = {
    Name : "dummy name",
    Herkunftsland : "dummy herkunftsland",
    Option : 1
  }

  
  render(){
  return (
    <div className="App">
    <div className="Inhalt">
        <h1>
          NOT A GAME
        </h1>
      <Auswahlseite name={this.state.Name}/>
      </div>
    </div>
  );
};
}

export default App;

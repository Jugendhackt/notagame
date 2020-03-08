import React from 'react';
import './App.css';
import Auswahlseite from './Auswahlseite';
import data from "./Texte/data.json";

class App extends React.Component{
  constructor(props) {
    super(props)

    this.handlerFirst = this.goToNextFirst.bind(this)
    this.handlerSecond = this.goToNextSecond.bind(this)

  }
  state = {
    id : 0,
    title : data[0].title,
    description: data[0].description,
    opt1: data[0].opt1,
    opt2: data[0].opt2
  };

   goToNextFirst(){
     var curr_id = this.state.opt1[1]
    this.setState({
      id : curr_id,
      title: data[curr_id].title,
      description: data[curr_id].description,
      opt1: data[curr_id].opt1,
      opt2: data[curr_id].opt2,
    })
  };

  goToNextSecond(){
   this.setState({
     id : this.state.opt2[1],
     title: data[this.state.id].title,
     description: data[this.state.id].description,
     opt1: data[this.state.id].opt1,
     opt2: data[this.state.id].opt2,
   })
 };

  render(){

    console.log(this.state.Name);
  return (
    <div className="App">
      <div className="Inhalt">
          {/* <h1>
            NOT A GAME
          </h1> */}
        <Auswahlseite className="Auswahlseite" id = {this.state.id} handlerFirst={this.handlerFirst} handlerSecond={this.handlerSecond} options={[this.state.opt1[0], this.state.opt2[0]]} description = {this.state.description}/>
      </div>
      <div className="Background">
        <div className="Gradient"></div>
        <div className="Image"></div>
      </div>
    </div>
  );
};
}

export default App;

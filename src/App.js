import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textInput: '',
    textArray: [],
    textSize: 0
  }

  textHandler = (event) => {
    let textString = event.target.value;
    let chars = textString.split('');
    let size = chars.length;

    this.setState({
      textInput: event.target.value,
      textArray: chars,
      textSize: size
    });

  }

  deleteTextHandler = (charIndex) => {
    const allStringArray = [...this.state.textArray];  
    allStringArray.splice(charIndex, 1);

    const newString = allStringArray.toString().replace(/[,\\]/g, '');
    
    const stringCount = newString.length;
    
    this.setState({
      textInput: newString, 
      textArray: allStringArray,
      textSize:  stringCount
    });
  } 

  render() {

    let charComp = null;
    
    if(this.state.textSize > 0) {
      charComp = (
        <div>
          { this.state.textArray.map((c, index) => {
            return <CharComponent
              click={() => this.deleteTextHandler(index)} 
              arrayChar={c}
              key={index} />
          }) }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Entre com algum texto:</h1>
        <input type="text" onChange={this.textHandler} value={this.state.textInput} />
        <p>{this.state.textInput}</p>
        <ValidationComponent
          textSizer={this.state.textSize} />
        {charComp}
      </div>
    );
  }
}

export default App;

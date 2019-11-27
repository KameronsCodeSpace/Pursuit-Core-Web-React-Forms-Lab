import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      numbers: '',
      operator: '',
      array: '',
      results: '',
      calcuated: false
    }
    this.state = this.initialState
  }

  handleNumberInputs = (event) => {
    console.log("CHANGED", event.target.value)
    this.setState({
      numbers: event.target.value
    })
  }

  calculateNums = (event) => {
    let myAnswer = (this.operator === 'sum') ? 'yes' : 'no'
    console.log("CHANGED", this.operator)
    this.setState({
      results: myAnswer
    })
  }

  selectedOperator = (event) => {
    console.log("CHANGED", event.target.value)
    this.setState({
      operator: event.target.value
    })
  }

  render() {
    console.log('rendered this.state')

    const { numbers, operator, results, array, calculated } = this.state

    // if (calculated) {
    //   return (
    //     <div className="App">
    //       <h1>Solved</h1>
    //     </div>
    //   )
    // }
    return (
      <div className="App">
        <h1>Enter each number in the array, seperated by a ','</h1>
        <input
          type="text"
          placeholder="Enter Numbers"
          value={numbers}
          onChange={this.handleNumberInputs}
        />
        <br></br>
        <br></br>

        <select id='operator' onChange={this.selectedOperator} value={operator}>
          <option value="">None</option>
          <option value='sum'>Sum</option>
          <option value='average'>Average</option>
          <option value='mode'>Mode</option>
        </select>

        <br></br>
        <br></br>

        <button onClick={this.calculateNums}>Calculate</button>

        <p onChange={this.calculateNums} value={results}></p>
        {/* result = (condition) ? 'something' : 'somethingelse'; */}

      </div >
    )
  }
}
export default App;

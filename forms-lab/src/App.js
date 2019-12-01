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
    console.log("CHANGED Nums", event.target.value)
    let theNumbers = event.target.value
    let array = theNumbers.split(",");
    // console.log(newSum)

    let sum = ''
    // let average = ''
    // let mode = ''

    for (let i = 0; i < theNumbers.length; i++) {
      sum += theNumbers[i]
      // console.log(numbers[i])
    }

    this.setState({
      numbers: array,
      results: sum
    })
  }

  calculateNums = (event) => {
    // let myAnswer = (event.target.value === 'sum') ? 'yes' : 'no'
    let myAnswer = ""

    // console.log("Operator Numbers: ", event.target.value)
    if (event.target.value === 'sum') {
      myAnswer = "Add Numbers"
    } else if (event.target.value === 'average') {
      myAnswer = "Find average"
    } else if (event.target.value === 'mode') {
      myAnswer = "Mode of numbers"
    } else {
      myAnswer = "Select numbers to calculate"
    }
    this.setState({
      results: myAnswer
    })
  }

  selectedOperator = (event) => {
    console.log("CHANGED Operator", event.target.value)
    this.setState({
      operator: event.target.value
    })
  }

  render() {
    console.log('rendered this.state')

    const { numbers, operator, results, array, calculated } = this.state


    // for (let i = 0; i < numbers.length; i++) {
    //   results += results + numbers[i]
    //   console.log(numbers[i])
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
          <option value='sum'>sum</option>
          <option value='average'>average</option>
          <option value='mode'>mode</option>
        </select>

        <br></br>
        <br></br>

        <button onClick={this.calculateNums} value={operator}>Calculate</button>

        <p onChange={this.calculateNums}> {results} </p>
        {/* result = (condition) ? 'something' : 'somethingelse'; */}

      </div >
    )
  }
}
export default App;

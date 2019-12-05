import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      numbers: '',
      operator: '',
      results: ''
    }
    this.state = this.initialState
  }

  addNums = (array) => {
    let sum = 0
    console.log("Array", array)
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }

    return sum

  }

  numAverage = (array) => {
    let total = this.addNums(array)
    let average = total / array.length
    console.log("Array:", array, 'Total:', total, 'Average:', average)
    return average
  }

  modeNumber = (array) => {
    if (array.length == 0)
      return null;
    let modeMap = {};
    let maxElem = array[0], maxCount = 1;
    for (let i = 0; i < array.length; i++) {
      let elem = array[i];
      if (modeMap[elem] == null)
        modeMap[elem] = 1;
      else
        modeMap[elem]++;
      if (modeMap[elem] > maxCount) {
        maxElem = elem;
        maxCount = modeMap[elem];
      }
    }
    return maxElem;
  }

  handleNumberInputs = (event) => {
    console.log("CHANGED Nums", event.target.value)
    let theNumbers = event.target.value
    let array = theNumbers.split(",");
    let arrayNums = [];

    //Arrow functions have implicit returns
    arrayNums = array.map((number) => Number(number))

    // console.log(newSum)
    // // console.log("Array", array)
    // for (let i = 0; i < array.length; i++) {
    //   arrayNums.push(Number(array[i]))
    //   // console.log('adding sum', Number(sum))
    // }
    // console.log('MySum', sum)

    this.setState({
      numbers: arrayNums,
      // results: sum
    })

    // return addNums(array)
  }

  calculateNums = (event) => {
    let myAnswer = ""

    // console.log("Operator Numbers: ", event.target.value)
    if (event.target.value === 'sum') {
      myAnswer = this.addNums(this.state.numbers)
      console.log(myAnswer)
    } else if (event.target.value === 'average') {
      myAnswer = this.numAverage(this.state.numbers)
    } else if (event.target.value === 'mode') {
      myAnswer = this.modeNumber(this.state.numbers)
    } else {
      myAnswer = "Select operation to calculate"
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

    const { numbers, operator, results } = this.state


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

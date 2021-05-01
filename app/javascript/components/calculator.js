import React from "react"
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.firstNumbers = this.firstNumbers.bind(this)
    this.firstClear = this.firstClear.bind(this)

    this.secondNumbers = this.secondNumbers.bind(this)
    this.secondClear = this.secondClear.bind(this)

    this.onChangeInput = this.onChangeInput.bind(this)

    this.operation = this.operation.bind(this)

    this.state = {
      first_input: 0,
      second_input: 0,
      operation_input: ''
    }
  }
  firstNumbers(e) {
    if (this.state.first_input === 0) {
      let num = e.currentTarget.value;
      this.setState({
        first_input: num
      })
    } else {
      let num = this.state.first_input + e.currentTarget.value
      this.setState({
        first_input: num
      })
    }
  }
  firstClear(e) {
    this.setState({
      first_input: 0
    })
  }
  
  secondNumbers(e) {
    if (this.state.second_input === 0) {
      let num = e.currentTarget.value;
      this.setState({
        second_input: num
      })
    } else {
      let num = this.state.second_input + e.currentTarget.value
      this.setState({
        second_input: num
      })
    }
  }
  secondClear(e) {
    this.setState({
      second_input: 0
    })
  }

  onChangeInput (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  renderInput(name, value) {
    return(
      <input
        type='number'
        name={name}
        value={value}
        onChange={this.onChangeInput}
        id="input"
      />
    )
  }

  renderResult() {
    return(
      <button id="enterResult">Enter</button>
    )
  }

  tablet(one, two) {
    const Buttons = props => <button value={props.value} onClick={props.click} id="button">{props.display}</button>

    return(
      <div id="table">
        <div id="row">
          <Buttons display='7' value={7} click={one} />
          <Buttons display='8' value={8} click={one} />
          <Buttons display='9' value={9} click={one} />
        </div>
        <div>
          <Buttons display='4' value={4} click={one} />
          <Buttons display='5' value={5} click={one} />
          <Buttons display='6' value={6} click={one} />
        </div>
        <div>
          <Buttons display='1' value={1} click={one} />
          <Buttons display='2' value={2} click={one} />
          <Buttons display='3' value={3} click={one} />
        </div>
        <div>
          <Buttons display='0' value={0} click={one} />
          <Buttons display='CE' click={two} />
        </div>
      </div>
    )
  }

  renderOpInput(name, value) {
    return(
      <input
        name={name}
        value={value}
        onChange={this.onChangeInput}
        id="input"
      />
    )
  }
  operation(e) {
    let op = e.currentTarget.value
    this.setState({
      operation_input: op
    })
  }
  operTablet(one, two) {
     const disable = !two
     return (
      <button
        key={one.name}
        name='operation'
        value={one.value}
        disabled={disable}
        onClick={this.operation}
        id="operButton"
      >
        {one.symbol}
      </button>
     )
  }

  render () {
    const isInputValid =
      this.state.first_input >= 0 &&
      this.state.first_input < 100 &&
      this.state.second_input >= 0 &&
      this.state.second_input < 100

    const operations = [
      {
        symbol: '+',
        value: '+',
        name: 'sum_op'
      },
      {
        symbol: '-',
        value: '-',
        name: 'difference_op'
      },
      {
        symbol: '*',
        value: '*',
        name: 'multiplication_op'
      },
      {
        symbol: '/',
        value: '/',
        name: 'division_op'
      }
    ]
    return (
      <div>
        <div id="box">
          <div>
            <h2>First Number</h2>
            {this.renderInput('first_input', this.state.first_input)}
            {this.tablet(this.firstNumbers, this.firstClear)}
          </div>
          <div>
            <h2>Operation</h2>
            {this.renderOpInput('operation_input', this.state.operation_input)}
            <div id="table">
              {operations.map(operation => 
                this.operTablet(operation, isInputValid)
              )}
              <button id="button">CE</button>
            </div>
          </div>
          <div>
          <h2>First Number</h2>
            {this.renderInput('second_input', this.state.second_input)}
            {this.tablet(this.secondNumbers, this.secondClear)}
          </div>
        </div>
        <br/>
        {this.renderResult()}
      </div>
    );
  }
}

export default Calculator

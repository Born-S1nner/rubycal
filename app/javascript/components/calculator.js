import React from "react"
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.firstNumbers = this.firstNumbers.bind(this)
    this.firstClear = this.firstClear.bind(this)

    this.secondNumbers = this.secondNumbers.bind(this)
    this.secondClear = this.secondClear.bind(this)

    this.onChangeInput = this.onChangeInput.bind(this)

    this.state = {
      first_input: 0,
      second_input: 0
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

  operTablet(one, two) {
     const disable = !two
     return (
      <button
        key={one.name}
        name='operation'
        value={one.name}
        disabled={disable}
        style={{
          border: 0,
          margin: 10,
          padding: 0,
          borderRadius: 10,
          display: 'inline-block',
          width: 'calc(25% - 20px)',
          height: '10vh',
          minHeight: 50,
          fontSize: '2em',
          textAlign: 'center',
          color: 'white',
          backgroundColor: disable ? '#7FD0FF' : '#00A2FF'
        }}
      >
        {one.symbol}
      </button>
     )
  }

  render () {
    const isInputValid =
      left_input >= 0 &&
      left_input < 100 &&
      right_input >= 0 &&
      right_input < 100

    const operations = [
      {
        symbol: '+',
        name: 'sum_op'
      },
      {
        symbol: '-',
        name: 'difference_op'
      },
      {
        symbol: '*',
        name: 'multiplication_op'
      },
      {
        symbol: '/',
        name: 'division_op'
      }
    ]
    return (
      <div>
        <div id="box">
          <div>
            {this.renderInput('first_input', this.state.first_input)}
            {this.tablet(this.firstNumbers, this.firstClear)}
          </div>
          <div>
            {operations.map(operation => 
              this.operTablet(operation, isInputValid)
            )}
          </div>
          <div>
            {this.renderInput('second_input', this.state.second_input)}
            {this.tablet(this.secondNumbers, this.secondClear)}
          </div>
        </div>
        {this.renderResult()}
      </div>
    );
  }
}

export default Calculator

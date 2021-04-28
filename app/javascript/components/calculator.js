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
  tablet(one, two) {
    return(
      <div id="table">
        <div>
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

  render () {
    return (
      <div>
        <h3>Hello from React gang</h3>
        {this.renderInput('first_input', this.state.first_input)}
        {this.tablet(this.firstNumbers, this.firstClear)}
        {this.renderInput('second_input', this.state.second_input)}
      </div>
    );
  }
}

const Buttons = props => <button value={props.value} onClick={props.click} id="button">{props.display}</button>

export default Calculator

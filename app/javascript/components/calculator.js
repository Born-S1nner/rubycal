import React from "react"
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.numbers = this.numbers.bind(this)
    this.clear = this.clear.bind(this)

    this.onChangeInput = this.onChangeInput.bind(this)

    this.state = {
      first_input: 0,
      second_input: 0
    }
  }
  numbers(e) {
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
  clear(e) {
    this.setState({
      first_input: 0
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
      />
    )
  }
  tablet() {
    return(
      <table className="table">
        <tr>
          <Buttons display='7' value={7} click={this.numbers} />
          <Buttons display='8' value={8} click={this.numbers} />
          <Buttons display='9' value={9} click={this.numbers} />
        </tr>
        <tr>
          <Buttons display='4' value={4} click={this.numbers} />
          <Buttons display='5' value={5} click={this.numbers} />
          <Buttons display='6' value={6} click={this.numbers} />
        </tr>
        <tr>
          <Buttons display='1' value={1} click={this.numbers} />
          <Buttons display='2' value={2} click={this.numbers} />
          <Buttons display='3' value={3} click={this.numbers} />
        </tr>
        <tr>
          <Buttons display='0' value={0} click={this.numbers} />
          <Buttons display='CE' click={this.clear} />
        </tr>
      </table>
    )
  }

  render () {
    return (
      <div>
        <h3>Hello from React gang</h3>
        {this.renderInput('first_input', this.state.first_input)}
        {this.tablet()}
        {this.renderInput('second_input', this.state.second_input)}
      </div>
    );
  }
}

const Buttons = props => <button value={props.value} onClick={props.click} id="button">{props.display}</button>

export default Calculator

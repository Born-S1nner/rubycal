import React from "react"
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_input: 0,
      second_input: 0
    }
  }

  render () {
    return (
      <div>
        <h3>Hello from React gang</h3>
        <div className="row">
          <Buttons display='7' value={7} click={this.numbers} />
          <Buttons display='8' value={8} click={this.numbers} />
          <Buttons display='9' value={9} click={this.numbers} />
          <Buttons display='-' value='-' click={this.oper} />
        </div>
        <div className="row">
          <Buttons display='4' value={4} click={this.numbers} />
          <Buttons display='5' value={5} click={this.numbers} />
          <Buttons display='6' value={6} click={this.numbers} />
          <Buttons display='*' value='*' click={this.oper} />
        </div>
        <div className="row">
          <Buttons display='1' value={1} click={this.numbers} />
          <Buttons display='2' value={2} click={this.numbers} />
          <Buttons display='3' value={3} click={this.numbers} />
          <Buttons display='/' value='/' click={this.oper} />
        </div>
        <div className="row">
          <Buttons display='0' value={0} click={this.numbers} />
          <Buttons display='CE' click={this.clear} />
          <Buttons display='=' value='=' click={this.Equation} />
          <Buttons display='+' value='+' click={this.oper} />
        </div>
      </div>
    );
  }
}

export default Calculator

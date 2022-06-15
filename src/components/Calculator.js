import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0,
    };
  }

  render() {
    const { output } = this.state;
    return (
      <div className="calc-container">
        <div className="digit display-output">{output}</div>
        <div className="digit">AC</div>
        <div className="digit">+/-</div>
        <div className="digit">%</div>
        <div className="digit">÷</div>
        <div className="digit ">7</div>
        <div className="digit">8</div>
        <div className="digit">9</div>
        <div className="digit">x</div>
        <div className="digit">4</div>
        <div className="digit">5</div>
        <div className="digit">6</div>
        <div className="digit">-</div>
        <div className="digit">1</div>
        <div className="digit">2</div>
        <div className="digit">3</div>
        <div className="digit">+</div>
        <div className="digit big-digit">0</div>
        <div className="digit">.</div>
        <div className="digit">=</div>
      </div>
    );
  }
}

export default Calculator;

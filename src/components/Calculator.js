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
    const inputs = [
      output,
      'AC',
      '+/-',
      '%',
      '÷',
      7,
      8,
      9,
      'x',
      4,
      5,
      6,
      '-',
      1,
      2,
      3,
      '+',
      0,
      '.',
      '=',
    ];
    return (
      <div className="calc-container">
        {inputs.map((input) => (
          <div key={input} className="digit">{input}</div>
        ))}
      </div>
    );
  }
}

export default Calculator;

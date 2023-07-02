import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,

    };
  }

  changeOutput = (event) => {
    this.setState((prevState) => (
      calculate(prevState, event.target.name)
    ));
  }

   showTotal = () => {
     const { total, next } = this.state;
     if (total === 0 && next === null) {
       return 0;
     } if (total !== 0 && total !== null) {
       return total;
     }
     return '';
   };

   render() {
     const { operation, next } = this.state;
     const inputs = [
       'AC',
       '+/-',
       '%',
       '÷',
       '7',
       '8',
       '9',
       'x',
       '4',
       '5',
       '6',
       '-',
       '1',
       '2',
       '3',
       '+',
       '0',
       '.',
       '=',
     ];
     return (
       <>
         <header>
           <h1>R3ACT Calculator</h1>
         </header>
         <form className="calc-container">
           <input className="digit" type="text" key={uuidv4()} value={(this.showTotal()) + (operation || '') + (next || '')} disabled />
           {inputs.map((input) => (
             <button key={uuidv4()} name={input} type="button" onClick={this.changeOutput} className="digit">{input}</button>
           ))}
         </form>
       </>
     );
   }
}

export default Calculator;

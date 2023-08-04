import { useState } from 'react';
import InputBtn from './components/InputBtn';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  let symbols = [
    '+',
    '-',
    'x',
    '/',
    '.',
    '%'
  ];

  const handleInput = (val) => {

    if (validateInput(val)) {

      let newInput = input + val.toString();
      setInput(newInput);
    }
  }

  const validateInput = (val) => {

    let ret = false;
    let inArray = symbols.includes(val);
    let inputLengthNotZero = input.length !== 0;

    if (inArray) {

      if (inputLengthNotZero
        && !symbols.includes(input[input.length-1])
      ) {

        ret = true;
      } else if (
          inputLengthNotZero 
            && input[input.length-1] === symbols[5]
              && val !== symbols[5] 
      ) {

        ret = true;
      }
    } else {

      if (input[input.length-1] !== symbols[5]) {

        ret = true;
      }
    }

    return ret;
  }

  const handleClear = () => {
    setInput('');
  }

  const handleRemove = () => {

    if (input.length !== 0 ) {

      let newInput = input.substring(0, input.length - 1);
      setInput(newInput);
    }
  }

  const handleResult = () => {

    try {

      let inputExpression = input.replace('x', '*');
      let result = eval(inputExpression);
      setInput(result.toString());
    }
    catch (e) {

      setInput('Syntax Error');
    }    
  }

  return (
    <div className="bg-slate-200 min-h-screen flex flex-row justify-center items-center">
      <div className="container w-full sm:w-1/2 md:w-1/3 bg-slate-400 rounded-xl">
        <div id="screen" className="bg-white m-5 rounded-md h-14 flex items-end justify-end overflow-hidden">
          <p className="text-3xl mr-1">{input}</p>
        </div>
        <div id="input" className="m-5">
          <div className="flex justify-end">
            <div
              className="w-1/4 h-16 flex justify-center items-center bg-slate-500"
            >
              <p className="text-4xl"></p>
            </div>
            <InputBtn symbol="CE" handler={handleRemove}/>
            <InputBtn symbol="AC" handler={handleClear}/>
            <InputBtn symbol="/" value="/" handler={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="7" value="7" handler={handleInput}/>
            <InputBtn symbol="8" value="8" handler={handleInput}/>
            <InputBtn symbol="9" value="9" handler={handleInput}/>
            <InputBtn symbol="x" value="x" handler={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="4" value="4" handler={handleInput}/>
            <InputBtn symbol="5" value="5" handler={handleInput}/>
            <InputBtn symbol="6" value="6" handler={handleInput}/>
            <InputBtn symbol="-" value="-" handler={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="1" value="1" handler={handleInput}/>
            <InputBtn symbol="2" value="2" handler={handleInput}/>
            <InputBtn symbol="3" value="3" handler={handleInput}/>
            <InputBtn symbol="+" value="+" handler={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="0" value="0" handler={handleInput} width={"2/4"}/>
            <InputBtn symbol="." value="." handler={handleInput}/>
            <InputBtn symbol="=" handler={handleResult}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

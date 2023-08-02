import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const handleInput = (val) => {

    if (val.length != 0 ) {

      let newInput = input + val.toString();
      setInput(newInput);
    }
  }

  const handleClear = () => {
    setInput('');
  }

  return (
    <div className="bg-slate-200 min-h-screen flex flex-row justify-center items-center">
      <div className="container w-full sm:w-1/2 md:w-1/3 bg-slate-400 rounded-xl">
        <div id="screen" className="bg-white m-5 rounded-md h-20 flex items-end justify-end overflow-hidden">
          <p className="text-3xl mr-1">{input}</p>
        </div>
        <div id="input" className="m-5">
          <div>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={handleClear}
            >
              AC
            </button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">+/-</button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
            >
              %
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput("/")}
            >
              /
            </button>
          </div>
          <div>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(7)}
            >
              7
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(8)}
            >
              8
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(9)}
            >
              9
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput("X")}
            >
              X
            </button>
          </div>
          <div>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(4)}
            >
              4
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(5)}
            >
              5
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(6)}
            >
              6
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput("-")}
            >
              -
            </button>
          </div>
          <div>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(1)}
            >
              1
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(2)}
            >
              2
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(3)}
            >
              3
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput("+")}
            >
              +
            </button>
          </div>
          <div>
            <button 
              className="w-2/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(0)}
            >
              0
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
              onClick={() => handleInput(".")}
            >
              .
            </button>
            <button 
              className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

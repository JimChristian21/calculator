import { useState } from 'react';
import InputBtn from './components/InputBtn';
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
        <div id="screen" className="bg-white m-5 rounded-md h-12 flex items-end justify-end overflow-hidden">
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
            <InputBtn symbol="/" value="/" handleInput={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="7" value="7" handleInput={handleInput}/>
            <InputBtn symbol="8" value="8" handleInput={handleInput}/>
            <InputBtn symbol="9" value="9" handleInput={handleInput}/>
            <InputBtn symbol="X" value="X" handleInput={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="4" value="4" handleInput={handleInput}/>
            <InputBtn symbol="5" value="5" handleInput={handleInput}/>
            <InputBtn symbol="6" value="6" handleInput={handleInput}/>
            <InputBtn symbol="-" value="-" handleInput={handleInput}/>
          </div>
          <div>
            <InputBtn symbol="1" value="1" handleInput={handleInput}/>
            <InputBtn symbol="2" value="2" handleInput={handleInput}/>
            <InputBtn symbol="3" value="3" handleInput={handleInput}/>
            <InputBtn symbol="+" value="+" handleInput={handleInput}/>
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

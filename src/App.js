import './App.css';

function App() {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-row justify-center items-center">
      <div className="container w-full sm:w-1/2 md:w-1/3 bg-slate-400 rounded-xl">
        <div id="screen" className="bg-white m-5 rounded-md h-20 flex items-end justify-end">
          <p className="text-3xl mr-1">sample</p>
        </div>
        <div id="input" className="m-5">
          <div>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">AC</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">+/-</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">%</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">/</button>
          </div>
          <div>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">7</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">8</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">9</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">X</button>
          </div>
          <div>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">4</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">5</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">6</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">-</button>
          </div>
          <div>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">1</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">2</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">3</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">+</button>
          </div>
          <div>
            <button className="w-2/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">0</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">.</button>
            <button className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

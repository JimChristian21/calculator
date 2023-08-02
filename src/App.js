import './App.css';

function App() {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-row justify-center items-center">
      <div className="container w-full sm:w-1/2 md:w-1/3 bg-slate-400 rounded-xl">
        <div id="screen" className="bg-white m-5 rounded-md h-20">
          <div className="my-2">
            sddafsd
          </div>
        </div>
        <div id="input" className="m-5">
          <div>
            <button className="w-1/4 h-16 bg-slate-500">AC</button>
            <button className="w-1/4 h-16 bg-slate-500">+/-</button>
            <button className="w-1/4 h-16 bg-slate-500">%</button>
            <button className="w-1/4 h-16 bg-slate-500">/</button>
          </div>
          <div>
            <button className="w-1/4 h-16 bg-slate-500">7</button>
            <button className="w-1/4 h-16 bg-slate-500">8</button>
            <button className="w-1/4 h-16 bg-slate-500">9</button>
            <button className="w-1/4 h-16 bg-slate-500">X</button>
          </div>
          <div>
            <button className="w-1/4 h-16 bg-slate-500">4</button>
            <button className="w-1/4 h-16 bg-slate-500">5</button>
            <button className="w-1/4 h-16 bg-slate-500">6</button>
            <button className="w-1/4 h-16 bg-slate-500">-</button>
          </div>
          <div>
            <button className="w-1/4 h-16 bg-slate-500">1</button>
            <button className="w-1/4 h-16 bg-slate-500">2</button>
            <button className="w-1/4 h-16 bg-slate-500">3</button>
            <button className="w-1/4 h-16 bg-slate-500">+</button>
          </div>
          <div>
            <button className="w-2/4 h-16 bg-slate-500">0</button>
            <button className="w-1/4 h-16 bg-slate-500">.</button>
            <button className="w-1/4 h-16 bg-slate-500">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

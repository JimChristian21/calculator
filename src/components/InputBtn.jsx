import React from "react";

const InputBtn = ({symbol, value, handleInput}) => {

    return (
        <button 
            className="w-1/4 h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-600"
            onClick={() => handleInput(value)}
        >
            {symbol}
        </button>
    );
}

export default InputBtn;
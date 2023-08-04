import React from "react";

const InputBtn = ({symbol, value, handler, width}) => {

    let cls = 'h-16 bg-slate-500 border-2 border-slate-700 hover:bg-slate-60'; 

    cls += (typeof width === 'undefined')
        ? ' w-1/4'
            : ' w-' + width;

    return (
        <button 
            className={cls}
            onClick={() => {

                if (typeof value !== 'undefined') {

                    handler(value)
                } else {
                    handler();
                }
            }}
        >
            {symbol}
        </button>
    );
}

export default InputBtn;
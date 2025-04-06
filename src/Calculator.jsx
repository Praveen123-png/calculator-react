import { useState, useRef, useEffect } from "react";
import { evaluate } from "mathjs";
//we have to install mathjs first to use this. "npm install mathjs".

function Calculator(){

    let [inputValue, setInputValue] = useState("");

    function buttonHandler(btn){
        setInputValue((prev) => prev + btn);
    }

    function clearButtonHandler(){
        setInputValue("");
    }

    function backspaceButtonHandler(){
        setInputValue(inputValue = inputValue.slice(0, -1));
    }

    function calculationHandler(){
        try{
            setInputValue(evaluate(inputValue));
        }
        catch(error){
            setInputValue("Error");
        }
    }

    return (<>

        <div className="calculator">
            <input type="text" readOnly value={inputValue} onChange={buttonHandler}/>
            <br />
            <hr />
            <div className="buttons">
                <button id="clear" onClick={clearButtonHandler} className="clearBtn">C</button>
                <button id="normalBtn" onClick={backspaceButtonHandler}>  ‹</button>
                <button id="normalBtn" className="operator" onClick={() => buttonHandler("/")}>÷</button> <br/>
                <button id="normalBtn" onClick={() => buttonHandler("7")}>7</button>
                <button id="normalBtn" onClick={() => buttonHandler("8")}>8</button>
                <button id="normalBtn" onClick={() => buttonHandler("9")}>9</button>
                <button id="normalBtn" className="operator" onClick={() => buttonHandler("*")}>×</button> <br/>
                <button id="normalBtn" onClick={() => buttonHandler("4")}>4</button>
                <button id="normalBtn" onClick={() => buttonHandler("5")}>5</button>
                <button id="normalBtn" onClick={() => buttonHandler("6")}>6</button>
                <button id="normalBtn" className="operator" onClick={() => buttonHandler("-")}>−</button> <br/>
                <button id="normalBtn" onClick={() => buttonHandler("1")}>1</button>
                <button id="normalBtn" onClick={() => buttonHandler("2")}>2</button>
                <button id="normalBtn" onClick={() => buttonHandler("3")}>3</button>
                <button id="normalBtn" className="operator" onClick={() => buttonHandler("+")}>+</button> <br/>      
                <button id="normalBtn" onClick={() => buttonHandler(".")}>.</button>
                <button id="normalBtn" onClick={() => buttonHandler("0")}>0</button>
                <button id="equalBtn" onClick={() => calculationHandler()}>=</button>
            </div>
             
        </div>
        
    </>)
}

export default Calculator;
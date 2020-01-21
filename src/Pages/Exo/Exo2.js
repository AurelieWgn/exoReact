import React, {useReducer} from "react";
import { Link} from "react-router-dom"


const initialState = {
    num1: 0,
    num2: 0,
    result:0,

};

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {...state, result: state.num1 + state.num2};
        case "supp":
            return {...state, result: state.num1 - state.num2};
        case "mult":
            return {...state, result: state.num1 * state.num2};
        case "reset":
            return {...state, result: 0, num1:0, num2:0};
        case 'num1' :
            return {...state, num1: parseInt(action.payload)};
        case 'num2' :
            return {...state, num2: parseInt(action.payload)};
        default :
            alert("ereur");
    }
}


export default function Exo2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>useReducer</h1>
            <br/>
            <Link to="/" className="">retour</Link>
            <br/>
            <br/>
            <input id={"num1"} type="number" min="0" value={state.num1} onChange={(event) => dispatch({ type: "num1", payload: event.target.value })}/>
            <input id={"num2"} type="number" min="0" value={state.num2}   onChange={(event) => dispatch({ type: "num2", payload: event.target.value })}/>

            <button onClick={() => dispatch({ type: "add" })}>+</button>
            <button onClick={() => dispatch({ type: "supp" })}>-</button>
            <button onClick={() => dispatch({ type: "mult" })}>x</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
            <br/>
            <span>Result : {state.result} </span>
        </>
    )
}



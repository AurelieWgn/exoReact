import React, {useReducer} from "react";
import { Link} from "react-router-dom"

const initialState = {
    moyenne: 0,
    notes: [13,8],

};

const reducer = (state, action) => {
    switch (action.type) {
        case "notes":
            return {...state, notes: state.notes.push(action.payload)};

        default :
            alert("ereur");
    }
}




export default function Exo2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const generateNotes=()=>{
        console.log(initialState)
        for(let i=0; i< initialState.notes.length; i++){
            return initialState.notes[i];
        }
    }

    return (
        <>
            <h1>useReducer Moyenne</h1>
            <br/>
            <Link to="/" className="">retour</Link>
            <br/>
            <br/>

            <form onSubmit={() => dispatch({ type: "notes" })} >
                <span> Saisir une note </span>
                <input id={"value"} type="number" min="0" max="20" />
                <button type="submit">Ajouter la note</button>
            </form>

            <div>{generateNotes()}</div>


            <span>Result : {state.moyenne} </span>
        </>
)
}


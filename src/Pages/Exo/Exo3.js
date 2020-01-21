import React, {useReducer, useState} from "react";
import { Link} from "react-router-dom"

const initialState = {
    moyenne: 0,
    notes: [],
    currentNote: 0,

};

const reducer = (state, action) => {

    switch (action.type) {
        case "notes":
            if(state.notes.length >= 10){
                alert("Vous ne pouvez saisir que 10 notes max");
            }else{
                let newTab = state.notes.push( parseInt(state.currentNote));
                console.log("newTab", newTab);
                return {...state, notes: newTab};
            }
        case "moyenne" :
            if(state.notes){
                let total = 0;
                for(let i = 0; i<state.notes.lenght; i++){
                    console.log("coucou");
                    total += state.notes[i];
                }
                return {...state, moyenne: total};
            };
        case "saveCurrentNote":
            return {...state, currentNote: action.payload};
        default :
            alert("ereur");
    }
}




export default function Exo2() {
    const [state, dispatch] = useReducer(reducer, initialState);


    const generateNotes=()=>{
        let boucle = initialState.notes.map((item, i) =>
                    item + ", "
             )
        console.log(boucle);
        // return boucle;
    }

    return (
        <>
            <h1>useReducer Moyenne</h1>
            <br/>
            <Link to="/" className="">retour</Link>
            <br/>
            <br/>

            <form onSubmit={(event) => dispatch({ type: "notes" })} >
                <span> Saisir une note </span>
                <input id={"value"} type="number" min="0" max="20" onChange={(event) => dispatch({ type: "saveCurrentNote", payload: event.target.value })} />
                <button type="submit">Ajouter la note</button>
            </form>

            <br/>
            <br/>
            <div>Voici les notes : {generateNotes()}</div>

            <br/>
            <br/>
            <button onClick={() => dispatch({ type: "moyenne" })}>Calculer la moyenne</button>
            <span>Result : {state.moyenne} </span>
        </>
    )
}


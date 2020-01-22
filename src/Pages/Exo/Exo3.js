import React, {useReducer, useState} from "react";
import { Link} from "react-router-dom"

const initialState = {
    moyenne: 0,
    notes: [],
    currentNote: "",

};

const reducer = (state, action) => {

    switch (action.type) {
        case "notes":
            if(state.notes.length >= 10){

                alert("Vous ne pouvez saisir que 10 notes max");
            }else{
                let newTab = state.notes;
                newTab.push( parseInt(state.currentNote));
                return {...state, notes: newTab};
            }
        case "moyenne" :

            let total = 0;
            for(let i = 0; i<=state.notes.length-1; i++){
                console.log(state.notes[i]);
                total += state.notes[i];
            }
            let moy = total/state.notes.length
            return {...state, moyenne: moy};

        case "saveCurrentNote":
            return {...state, currentNote: action.payload};
        default :
            alert("ereur");
    }
}




export default function Exo2() {
    const [state, dispatch] = useReducer(reducer, initialState);


    const generateNotes=()=>{
        let boucle = state.notes.map((item, i) =>
                   item + " "
             )
        return boucle;
    }

    const addnote = (event) =>{
        event.preventDefault();
        dispatch({ type: "notes"});
    }

    return (
        <>
            <h1>useReducer Moyenne</h1>
            <br/>
            <Link to="/" className="">retour</Link>
            <br/>
            <br/>

            <form onSubmit={(event)=>addnote(event)} >
                <span> Saisir une note </span>
                <input type="number" value={state.currentNote} min="0" max="20" onChange={(event) => dispatch({ type: "saveCurrentNote", payload: event.target.value })} />
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


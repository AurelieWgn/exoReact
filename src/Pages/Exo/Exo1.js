import React, {useState, useEffect, useContext} from "react";
import { Link} from "react-router-dom"

const Exo1 = (props) => {
    const triggerFunc = new Set();

    const [count, setCount] = React.useState(1);
    const [pos, setPos] = React.useState(0);
    const incrementCount = React.useCallback( () => setCount(count => count + 1), [] );
    const incrementPos = React.useCallback( () => setPos(pos => pos + count), []);
    

    return(
        <>
            <Link to="/" className="">retour</Link>
            <h1>useCallback</h1>

            <div>
                <p> Count : {count} </p>
                <p> Pos : {pos} </p>
                <p> <button onClick={incrementCount}>count</button> </p>
                <p> <button onClick={incrementPos}>pos</button> </p>
                <p> Creation de fonction(s) & nouvelles fonctions: {triggerFunc.size} </p>
            </div>
        </>
)
}



export default Exo1;
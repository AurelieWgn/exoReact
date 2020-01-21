import React, {useState, useEffect, useContext} from "react";
import { Link} from "react-router-dom"

const page1 = () => {


    return(
        <>
            <header className='menuBar'>

                    <Link to="/Exo/exo1" className="btnLink">useCallback</Link>
                    <Link to="/Exo/exo2" className="btnLink">useReducer</Link>
                    <Link to="/Exo/exo3" className="btnLink">useReducer Moyenne</Link>

            </header>
        </>
    )
}



export default page1;
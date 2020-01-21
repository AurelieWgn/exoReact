import React from 'react';
import { Switch, Route } from 'react-router-dom';
import page1 from "./Pages/page1";
import Exo1 from "./Pages/Exo/Exo1";
import Exo2 from "./Pages/Exo/Exo2";
import Exo3 from "./Pages/Exo/Exo3";

const Router = (props) => (
    <Switch>
        <Route exact path="/" component={page1}/>
        <Route exact path="/Exo/exo1" component={Exo1}/>
        <Route exact path="/Exo/exo2" component={Exo2}/>
        <Route exact path="/Exo/exo3" component={Exo3}/>

    </Switch>
)

export default Router;
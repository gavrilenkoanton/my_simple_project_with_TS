import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import Monday from "./Monday/Monday";
import Tuesday from "./Tuesday/Tuesday";

interface IProps {
    mySkills: Array<object>
}

function App(props: IProps) {
    return (
        <HashRouter>
            <div>
                <NavMenu/>
            </div>
            <Route path='/' exact render={() => <Monday mySkills={props.mySkills} />} />
            <Route path='/Mon' exact render={() => <Monday mySkills={props.mySkills}/>}/>
            <Route path='/Tue' exact render={() => <Tuesday/>}/>
        </HashRouter>
    );
}

export default App;

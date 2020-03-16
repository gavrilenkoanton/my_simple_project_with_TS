import React from 'react';
import styles from './App.module.css';
import MySkills from "./Monday/MySkills/MySkills";
import MyName from "./Monday/MyName/MyName";
import Hello from "./Monday/HelloComponent/Hello";
import {HashRouter, Route} from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";
import Monday from "./Monday/Monday";


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
            <Route path='/Tue' render={() => {
                return (
                    <div className={styles.App}>
                        Тут пока ниче нет
                    </div>)
            }}/>
        </HashRouter>
    );
}

export default App;

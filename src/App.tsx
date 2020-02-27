import React from 'react';
import styles from './App.module.css';
import MySkills from "./MySkills/MySkills";
import MyName from "./MyName/MyName";
import Hello from "./HelloComponent/Hello";

interface IProps {
    mySkills: Array<object>
}

function App(props: IProps) {
    return (
        <div className={styles.App}>
            <MyName/>
            <MySkills mySkills={props.mySkills}/>
            <Hello/>
        </div>
    );
}

export default App;

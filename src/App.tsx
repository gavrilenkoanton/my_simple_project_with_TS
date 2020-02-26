import React from 'react';
import styles from './App.module.css';
import MySkills from "./MySkills/MySkills";
import MyName from "./MyName/MyName";

interface IProps {
    mySkills: Array<object>
}

function App(props: IProps) {

  return (
    <div className={styles.App}>
        <MyName />
        <MySkills blabla={props.mySkills}/>
    </div>
  );
}

export default App;

import React from 'react';
import styles from './Monday.module.css';
import MyName from "./MyName/MyName";
import MySkills from "./MySkills/MySkills";
import Hello from "./HelloComponent/Hello";

interface IProps {
mySkills: any
}

class Monday extends React.Component<IProps> {
state={
    link: ""
}
    render = () => {

        return (
            <div className={styles.App}>
                <div className={styles.Name}>
                    <MyName/>
                </div>
                <MySkills mySkills={this.props.mySkills}/>
                <Hello/>
            </div>
        );
    }
}

export default Monday;

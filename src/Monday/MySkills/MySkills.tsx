import React from 'react';
import styles from './MySkills.module.css';

interface IProps {
    mySkills: Array<object>
}

class MySkills extends React.Component<IProps> {
    mySkills = this.props.mySkills.map((item: any, i) => {
        return (
            <div className={styles.skill}
                 key={i}
            >
                {item.skill}
            </div>
        )
    });
    render = () => {

        return (
            <div className={styles.mySkills}>
                {this.mySkills}
            </div>
        );
    }
}

export default MySkills;

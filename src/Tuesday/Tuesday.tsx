import React from 'react';
import styles from './Tuesday.module.css';
import ToDoList from "./ToDoList/ToDoList";

class Tuesday extends React.Component {
    render = () => {
        return (
            <div className={styles.App}>
                <ToDoList />
            </div>
        );
    }
}
export default Tuesday;

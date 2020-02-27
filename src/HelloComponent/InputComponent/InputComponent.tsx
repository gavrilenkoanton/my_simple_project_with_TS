import React from 'react';
import styles from './InputComponent.module.css';

interface IProps {
    titleRef: any
}

class InputComponent extends React.Component<IProps> {

    render = () => {
        return (
            <input type="text" placeholder="Введи свое имя" ref={this.props.titleRef} className={styles.input}/>
        );
    }
}

export default InputComponent;

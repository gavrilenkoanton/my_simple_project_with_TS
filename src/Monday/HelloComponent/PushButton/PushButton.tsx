import React from 'react';
import styles from './PushButton.module.css';

interface IProps {
    onClickButton: any
}

class PushButton extends React.Component<IProps> {

    render = () => {
        return (
            <button onClick={this.props.onClickButton} className={styles.button}>Push</button>
        );
    }
}

export default PushButton;

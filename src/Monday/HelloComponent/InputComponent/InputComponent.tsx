import React from 'react';
import styles from './InputComponent.module.css';

interface IProps {
    titleRef: any,
    onEnterPush: any,
    setF: (f: () => void) => void
}

class InputComponent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        props.setF(this.addNameFunc)
    }
    state = {
        error: false,
        title: "",
    };

    onEnterPress = (e: any) => {
        if (e.key === "Enter") {
            this.addNameFunc();
        }
    };

    addNameFunc = () => {
        let newTitle = this.state.title;
        this.setState({title: ""});
        if (this.state.title === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.onEnterPush(newTitle)
        }
    }

    render = () => {
        return (
            <input
                onKeyPress={this.onEnterPress}
                type="text"
                placeholder="Введи свое имя"
                onChange={(e) => {
                    this.setState({error: false, title: e.currentTarget.value})
                }}
                className={this.state.error ? styles.inputError : styles.input}

            />
        );
    }
}

export default InputComponent;

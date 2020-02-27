import React from 'react';
import styles from './Hello.module.css';
import ListOfFriends from "./ListOfFriends/ListOfFriends";
import PushButton from "./PushButton/PushButton";
import InputComponent from "./InputComponent/InputComponent";

class Hello extends React.Component {
    titleRef = React.createRef<HTMLInputElement>();
    state = {
        names: []
    };
    onButtonClick = () => {
        let inputValue: string = this.titleRef.current ? this.titleRef.current.value : '';
        if (this.titleRef.current) this.titleRef.current.value = '';
        if (inputValue === '') {
            alert("Бро, введи имя")
        } else {
            alert("Дароу, " + inputValue);
            let newName: object = {name: inputValue};
            let newMas = [newName, ...this.state.names];
            this.setState({names: newMas});
        }
    };

    render = () => {
        let writeMyFriends = this.state.names.map((i: any, index: number) => {
            return <div>К нам присоединился: <ListOfFriends name={i.name} key={index}/></div>
        });

        return (
            <div className={styles.wrapper}>
                <div>
                    <InputComponent titleRef={this.titleRef}/>
                    <PushButton onClickButton={this.onButtonClick}/>
                </div>
                <div className={styles.friends}>
                    {writeMyFriends}
                </div>
            </div>
        );
    }
}

export default Hello;

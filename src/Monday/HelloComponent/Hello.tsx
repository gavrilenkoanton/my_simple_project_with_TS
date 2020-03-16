import React from 'react';
import styles from './Hello.module.css';
import ListOfFriends from "./ListOfFriends/ListOfFriends";
import PushButton from "./PushButton/PushButton";
import InputComponent from "./InputComponent/InputComponent";

class Hello extends React.Component {
    titleRef = React.createRef<HTMLInputElement>();
    state = {
        names: [],
        f: () => {}

    };
    onButtonClick = (newName: any) => {
        // let inputValue: string = this.titleRef.current ? this.titleRef.current.value : '';
        // if (this.titleRef.current) this.titleRef.current.value = '';
        if (newName === '') {
            alert("Бро, введи имя");
        } else {
            alert("Дароу, " + newName);
            let newNameBro: object = {name: newName};
            let newMas = [newNameBro, ...this.state.names];
            this.setState({names: newMas});
        }
    };

    setF = (f: () => void) =>{this.setState({f})};

    render = () => {
        let writeMyFriends = this.state.names.map((i: any, index: number) => {
            return <div>К нам присоединился: <ListOfFriends name={i.name} key={index}/></div>
        });

        return (
            <div className={styles.wrapper}>
                <div>
                    <InputComponent titleRef={this.titleRef} onEnterPush={this.onButtonClick} setF={this.setF}/>
                    <PushButton onClickButton={this.state.f}/>
                </div>
                <div className={styles.friends}>
                    {writeMyFriends}
                </div>
            </div>
        );
    }
}

export default Hello;

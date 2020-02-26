import React from 'react';
import styles from './Hello.module.css';
import ListOfFriends from "./ListOfFriends/ListOfFriends";

interface IProps {

}

class Hello extends React.Component<IProps> {
    titleRef = React.createRef<HTMLInputElement>();
    state = {
        names: []
    };
    onButtonClick = () => {
        let inputValue: string = this.titleRef.current ? this.titleRef.current.value : '';
        if(this.titleRef.current)  this.titleRef.current.value = '';
        alert("Дароу, "+inputValue)
        let newName: object = {name: inputValue};
        let newMas = [newName, ...this.state.names];
        this.setState({names: newMas});

    };


    render = () => {

        let writeMyFriends = this.state.names.map((i:any, index:number)=>{
            return <div>К нам присоединился: <ListOfFriends name={i.name} key={index}/></div>
        });

        return (
            <div className={styles.wrapper}>
                <input type="text" placeholder="Введи свое имя" ref={this.titleRef}/>
                <button onClick={this.onButtonClick}>Push</button>
                {writeMyFriends}


            </div>
        );
    }
}

export default Hello;

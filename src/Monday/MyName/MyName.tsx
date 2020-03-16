import React from 'react';
import styles from './MyName.module.css';

class MyName extends React.Component {
    nameMas = ["Г", "а", "в", "р", "и", "л", "е", "н", "к", "о", " ", "А", "н", "т", "о", "н",];
    colorMas = ["red", "orange", "violet", "green", "blue", "purple"];
    printMyName = () => {
        this.setState({});
    };

    render = () => {
        return (
            <div className={styles.myName}>Дароу, я
                <p onMouseOver={this.printMyName}>
                    {this.nameMas.map((c, i) => (
                        <span
                            key={i}
                            style={{color: this.colorMas[Math.floor(Math.random() * this.colorMas.length)]}}
                        >
                            {c}
                        </span>
                    ))}
                </p>
            </div>
        );
    }
}

export default MyName;

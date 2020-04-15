import React from 'react';
import styles from './Wednesday.module.css';


interface IProps {
    settings: any
    changeStyle: any
}

class Wednesday extends React.Component<IProps> {


    render = () => {
        return (
            <div className={styles[this.props.settings.style]}>
                <div><input type="radio" name="theme"

                            value="light" onClick={() => {
                    this.props.changeStyle("light")
                }}/>Light
                </div>
                <div><input type="radio" name="theme" value="dark" onClick={() => {
                    this.props.changeStyle("dark")
                }}/>Dark
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid dignissimos expedita
                    illo impedit iusto provident quos ullam. Asperiores corporis est eum laudantium nobis quibusdam
                    quidem quis rem, sed voluptate!
                </div>
            </div>
        );
    }
}

export default Wednesday;

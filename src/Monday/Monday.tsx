import React from 'react';
import styles from './Monday.module.css';
import MyName from "./MyName/MyName";
import MySkills from "./MySkills/MySkills";
import Hello from "./HelloComponent/Hello";
import preloader from "../img/preloader.gif";

interface IProps {
    monday: any,
    loading: any
}

class Monday extends React.Component<IProps> {
    state = {
        link: ""
    };

    componentDidMount(): void {
        this.props.loading(true);
        setTimeout(() => {
            this.props.loading(false)
        }, 3000)
    }

    render = () => {


        return (
            <div className={styles.App}>
                {this.props.monday.isLoading
                    ? <img src={preloader}/>
                    : <>
                        <div className={styles.Name}>
                            <MyName/>
                        </div>
                        <MySkills mySkills={this.props.monday.me}/>
                        <Hello/>
                    </>
                }
            </div>
        );
    }
}

export default Monday;

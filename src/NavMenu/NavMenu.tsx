import React from 'react';
import styles from './NavMenu.module.css';

class NavMenu extends React.Component {
    state = {
        days: ['Mon', 'Tue', 'Wed'],
        id: 0,
        isHidden: true,
    };

    onClickColor = (key: number) => {
        this.setState({
            id: key
        })
    };

    render = () => {

        let links = this.state.days.map((i, key) => {
            return (
                <a
                    key={key}
                    href={"#/" + i}
                    onClick={() => this.onClickColor(key)}
                    className={this.state.id === key ? styles.active : undefined}
                >{i}</a>
            )
        });
        return (
            <div className={styles.nav}>
                {!this.state.isHidden && <button onClick={()=>{this.setState({isHidden:true})}} >Days</button>}
                {this.state.isHidden && <button onClick={()=>{this.setState({isHidden:false})}} >Hide</button>}
                {this.state.isHidden && links}
            </div>
        );
    }
}

export default NavMenu;

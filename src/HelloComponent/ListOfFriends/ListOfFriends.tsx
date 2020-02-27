import React from 'react';
import styles from './ListOfFriends.module.css';

interface IProps {
    name: string
}

class ListOfFriends extends React.Component<IProps> {

    render = () => {
        return (
            <span className={styles.list}>
                {this.props.name}
            </span>
        );
    }
}

export default ListOfFriends;

import React from 'react';
import styles from './ToDoListFooter.module.css';

interface IProps {
filterValue: string;
changeFilter: any;
}

class ToDoListFooter extends React.Component<IProps> {

    state = {
        isHidden: true,
    };

    render = () => {
        let classForAll = this.props.filterValue === "All" ? styles.filterActive : "";
        let classForCompleted = this.props.filterValue === "Completed" ? styles.filterActive : "";
        let classForActive = this.props.filterValue === "Active" ? styles.filterActive : "";

        return (
            <div>
                <div className="todoList">
                    <div className="todoList-footer">
                        {!this.state.isHidden &&  <div>
                            <button className={classForAll} onClick={() => {
                                this.props.changeFilter("All")
                            }}>All
                            </button>
                            <button className={classForCompleted} onClick={() => {
                                this.props.changeFilter("Completed")
                            }}>Completed
                            </button>
                            <button className={classForActive} onClick={() => {
                                this.props.changeFilter("Active")
                            }}>Active
                            </button>
                        </div>}
                        {!this.state.isHidden && <span onClick={()=>{this.setState({isHidden: true})}}>Hide</span>}
                        {this.state.isHidden && <span onClick={()=>{this.setState({isHidden: false})}}>Show</span>}
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoListFooter;

import React from 'react';
import styles from './ToDoListHeader.module.css';

interface IProps {
    addTask: any;
}

class ToDoListHeader extends React.Component<IProps> {

    state = {
        error: false,
        title: "",
    };

    addTaskClick = () => {
        let newText = this.state.title;
        this.setState({title: ""});
        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText)
        }
    };

    onPressEnterAddTask = (e: any) => {
        if (e.key === "Enter") {
            this.addTaskClick();
        }
    };
    render = () => {
        return (
            <div>
                <div>
                    <h3>Список дел:</h3>
                    <div>
                        <input onKeyPress={this.onPressEnterAddTask}
                               onChange={(e) => {
                                   this.setState({error: false, title: e.currentTarget.value})
                               }}
                               className={this.state.error ? styles.error : ""}
                               type="text"
                               placeholder="Че будем делать?"
                               value={this.state.title}
                        />
                        <button onClick={this.addTaskClick}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoListHeader;

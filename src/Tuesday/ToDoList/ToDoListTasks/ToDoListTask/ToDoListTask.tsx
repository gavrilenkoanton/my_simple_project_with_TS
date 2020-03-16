import React from 'react';
import styles from './ToDoListTask.module.css';

interface IProps {
    id: number;
    title: string;
    isDone: boolean;
    priority: string;
    task: any;
    changeStatus: any;
    changeTitle: any;
    removeTask: any;
}

class TodoListTask extends React.Component<IProps> {

    state = {
        editMode: false
    };

    activatedEditMode = () => {
        this.setState({editMode: true})
    };
    deactivatedEditMode = () => {
        this.setState({editMode: false})
    };

    onIsDoneChanged = (e: any) => {
        this.props.changeStatus(this.props.id, e.currentTarget.checked)

    };
    onTitleChanged = (e: any) => {
        this.props.changeTitle(this.props.id, e.currentTarget.value)
    };

    render = () => {
        return (
            <div className={this.props.task.isDone ? styles.toDoListTaskDone : ""}>

                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}
                />
                <span>{this.props.id} - </span>
                {this.state.editMode
                    ? <input
                        onChange={this.onTitleChanged}
                        autoFocus={true}
                        value={this.props.task.title}
                        onBlur={this.deactivatedEditMode}
                    />
                    : <span onClick={this.activatedEditMode}>{this.props.title} priority: {this.props.priority}</span>
                }
                <button onClick={()=>{this.props.removeTask(this.props.id)}}>X</button>
            </div>
        );
    }
}

export default TodoListTask;


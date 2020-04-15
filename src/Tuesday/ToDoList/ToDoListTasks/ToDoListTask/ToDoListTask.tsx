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
    dateUpdater: any;
    changePriority: any;
    created: any;
    updated: any
    finished: string
}

class TodoListTask extends React.Component<IProps> {

    state = {
        editMode: false,
        cloudShow: false
    };

    activatedEditMode = () => {
        this.setState({editMode: true})
    };
    deactivatedEditMode = () => {
        this.setState({editMode: false})
    };

    onIsDoneChanged = (e: any) => {
        let newDate = (new Date()).toString().slice(0, -46);
        this.props.changeStatus(this.props.id, e.currentTarget.checked, newDate)

    };
    onTitleChanged = (e: any) => {
        let newDate = (new Date()).toString().slice(0, -46);
        this.props.changeTitle(this.props.id, e.currentTarget.value, newDate)
        // this.props.dateUpdater(this.props.id)
    };

    onChangePriority = (e: any) => {
        this.props.changePriority(this.props.id, e.currentTarget.value)
    };
    cloudShow = (show: boolean) => {
        this.setState({cloudShow: show})
    };

    render = () => {
        return (
            <div>
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
                        : <span onClick={this.activatedEditMode}
                               className={styles.input}
                               onMouseOut={() => {
                                   this.cloudShow(false)
                               }}
                               onMouseOver={() => {
                                   this.cloudShow(true)
                               }}>
                        {this.props.title}
                         </span>
                    }
                    <span>  priority: {this.props.priority}</span>
                    <span className={styles.priority}>Изменить приоритет: <select name="" id=""
                                                                                  onChange={this.onChangePriority}>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
                </span>

                    <button onClick={() => {
                        this.props.removeTask(this.props.id)
                    }}>X
                    </button>
                </div>
                <div className={this.state.cloudShow ? styles.cloud : styles.cloudHide}>
                    <div>Создан: {this.props.created}</div>
                    <div>Изменен: {this.props.updated}</div>
                    <div>Завершен: {this.props.finished}</div>
                </div>
            </div>
        );
    }
}

export default TodoListTask;


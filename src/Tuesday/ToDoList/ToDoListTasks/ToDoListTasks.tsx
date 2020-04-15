import React from 'react';
import TodoListTask from "./ToDoListTask/ToDoListTask";
// import styles from './ToDoList.module.css';

interface IProps {
    changeTitle: any;
    changeStatus: any;
    changePriority: any;
    changeS: any;
    tasks: Array<string>;
    removeTask: any;
    dateUpdater: any
}

class ToDoListTasks extends React.Component<IProps> {

    render = () => {
        let tasksElements = this.props.tasks.map((item: any) => {
            return (
                <TodoListTask task={item}
                              id={item.id}
                              title={item.title}
                              isDone={item.isDone}
                              priority={item.priority}
                              created={item.created}
                              updated={item.updated}
                              finished={item.finished}
                              changeStatus={this.props.changeStatus}
                              changeTitle={this.props.changeTitle}
                              removeTask={this.props.removeTask}
                              changePriority={this.props.changePriority}
                              dateUpdater={this.props.dateUpdater}
                />
            )
        });
        return (
            <div>
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;


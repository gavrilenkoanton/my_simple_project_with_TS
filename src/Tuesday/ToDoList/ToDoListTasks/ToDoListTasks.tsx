import React from 'react';
import TodoListTask from "./ToDoListTask/ToDoListTask";
// import styles from './ToDoList.module.css';

interface IProps {
    changeTitle: any;
    changeStatus: any;
    changeS: any;
    tasks: Array<string>;
    removeTask: any;
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
                              changeStatus={this.props.changeStatus}
                              changeTitle={this.props.changeTitle}
                              removeTask={this.props.removeTask}
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


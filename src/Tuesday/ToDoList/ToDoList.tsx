import React from 'react';
import styles from './ToDoList.module.css';
import ToDoListHeader from "./ToDoListHeader/ToDoListHeader";
import ToDoListFooter from "./ToDoListFooter/ToDoListFooter";
import ToDoListTasks from "./ToDoListTasks/ToDoListTasks";
import RestoreState from "../../restoreState";

class ToDoList extends React.Component {

    componentDidMount() {
        let LocalStr: any = RestoreState;
        this.setState(LocalStr, () => {
            this.state.tasks.forEach((t: any) => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        })
    };

    nextTaskId = 1;

    state = {
        tasks: [] as any,
        filterValue: "All"
    };

    addTask = (newTaskTitle: string) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTaskTitle,
            isDone: false,
            priority: 'low'
        };
        this.nextTaskId++;
        let newTasks = [newTask, ...this.state.tasks];
        this.setState({
            tasks: newTasks
        }, this.saveState);
    };

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        })
    };

    changeS = (taskId: number, value: object) => {
        let newTask = this.state.tasks.map((t: any) => {
            if (t.id === taskId) {
                return {...t, ...value};
            } else {
                return t
            }
        });
        this.setState({
            tasks: newTask
        }, this.saveState)
    };

    removeTask = (taskId: number) => {
        let newList = this.state.tasks.filter((t: any) => t.id !== taskId)
        this.setState({tasks: newList}, this.saveState)
    };

    changeStatus = (taskId: number, isDone: object) => {
        this.changeS(taskId, {isDone: isDone})
    };
    changeTitle = (taskId: number, title: object) => {
        this.changeS(taskId, {title: title})
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("ourState", stateAsString)
    };

    render = () => {

        return (
            <div>
                <div className={styles.wrapper}>
                    <ToDoListHeader addTask={this.addTask}/>
                    <ToDoListTasks
                        removeTask={this.removeTask}
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        changeS={this.changeS}
                        tasks={this.state.tasks.filter((t: any) => {
                            if (this.state.filterValue === "All") {
                                return true;
                            }
                            if (this.state.filterValue === "Active") {
                                return t.isDone === false;
                            }
                            if (this.state.filterValue === "Completed") {
                                return t.isDone === true;
                            }
                        })}/>
                    <ToDoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default ToDoList;

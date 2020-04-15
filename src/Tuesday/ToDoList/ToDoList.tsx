import React from 'react';
import styles from './ToDoList.module.css';
import ToDoListHeader from "./ToDoListHeader/ToDoListHeader";
import ToDoListFooter from "./ToDoListFooter/ToDoListFooter";
import ToDoListTasks from "./ToDoListTasks/ToDoListTasks";
import RestoreState from "../../restoreState";
import {log} from "util";

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
        let createdDate = (new Date()).toString().slice(0,-46);
        let newTask = {
            id: this.nextTaskId,
            title: newTaskTitle,
            isDone: false,
            priority: 'low',
            created: createdDate,
            updated: "",
            finished: ""
        };
        this.nextTaskId++;
        console.log(newTask.created)
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
    dateChanger = (taskId: number, value: object, date: object) => {
        let newTask = this.state.tasks.map((t: any) => {
            if (t.id === taskId) {
                return {
                    ...t,
                    ...value,
                    ...date
                };
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

    changeStatus = (taskId: number, isDone: boolean, date: string) => {

if(isDone){
    this.dateChanger(taskId, {isDone: isDone}, {finished: date})
}else{
    this.dateChanger(taskId, {isDone: isDone}, {finished: ""})
}

    };
    changeTitle = (taskId: number, title: object, date: string) => {
        this.dateChanger(taskId, {title: title}, {updated: date});
    };
    dateUpdater = (taskId: number) => {
        let newDate = new Date();
        let newDate2 = newDate.toString();
        let newDate3 = newDate2.slice(0, -46);
        this.changeS(taskId, {updated: newDate3})
    };
    changePriority = (taskId: number, title: object) => {
        this.changeS(taskId, {priority: title})
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
                        changePriority={this.changePriority}
                        dateUpdater={this.dateUpdater}
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

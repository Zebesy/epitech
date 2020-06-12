import React from 'react';
import Task from '../components/Task';
import './todolist.css';



export default class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: 'My ToDoList',
            tasksList: [
                {
                    taskName: "titre 1",
                    status: false
                },
                {
                    taskName: "titre 2",
                    status: true
                },
                {
                    taskName: "titre 3",
                    status: false
                }],
            value: '',
            valueEdittask: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleTask = this.handleTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeName = this.changeName.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleChange2(event) {
        this.setState({ valueEdittask: event.target.value });
    }

    handleSubmit() {
        this.setState({ listName: this.state.value })
        let addTDL = this.state.listName;
        window.localStorage.setItem("title", JSON.stringify(addTDL));
    }

    handleTask() {
        const obj = { 'taskName': this.state.valueEdittask };
        this.setState({
            tasksList: [...this.state.tasksList, obj]
        });
        let addTDL = this.state.tasksList;
        window.localStorage.setItem("saved", JSON.stringify(addTDL));

    }

    componentDidMount() {
        const title = window.localStorage.getItem('title');
        const list = window.localStorage.getItem('saved');
        const parsedTitle = JSON.parse(title);
        const parsedList = JSON.parse(list);

        this.setState({
            listName: parsedTitle,
            tasksList: parsedList,
        })
    }

    changeName(newvalue, index) {
        let copieTableau = this.state.tasksList;
        console.log("copieTableau ", copieTableau);
        copieTableau[index].taskName = newvalue;
        this.setState({ tasksList: copieTableau });
        let addTDL = this.state.tasksList;
        window.localStorage.setItem("saved", JSON.stringify(addTDL));
    }

    deleteTask(index) {
        let copieTableau = this.state.tasksList;
        copieTableau.splice(index, 1);
        this.setState({ tasksList: copieTableau })
        let addTDL = this.state.tasksList;
        window.localStorage.setItem("saved", JSON.stringify(addTDL));
    }



    render() {
        return (
            <div class="todolist">
                <div class='input'>
                    <p>{this.state.listName}</p>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>edit</button>
                    <input type="text" value={this.state.valueEdittask} onChange={this.handleChange2} />
                    <button onClick={this.handleTask}>add</button>
                </div>
                <div class='task'>
                    {this.state.tasksList.map((task, i) =>
                        <Task taskName={task.taskName} status={task.status} newName={this.changeName} deleteTask={this.deleteTask} index={i} />)}
                </div>
            </div>
        )
    }
}
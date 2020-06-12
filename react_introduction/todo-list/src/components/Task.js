import React from 'react';
import './task.css';


export default class Task extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            taskName: 'task',
            status: true,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTask = this.handleTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleTask() {
        this.setState({ taskName: this.state.value });
        this.props.newName(this.state.value, this.props.index);
    }

    deleteTask() {
        this.props.deleteTask(this.props.index);
    }


    render() {
        return (
            <div className="App">
                <div class="task">
                    <div class="content">
                        {this.props.taskName}
                        <input type="checkbox" id="status" checked={this.props.status} />
                    </div>
                        <div class="input">
                        <input type="text" title={this.state.value} onChange={this.handleChange} />
                        <button onClick={this.handleTask}>edit</button>
                        <button onClick={this.deleteTask}>delete</button>
                        </div>
                </div>
            </div>
        );
    }
}
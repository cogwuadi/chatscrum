
import React, { Component } from "react";

export class AddTask extends Component {
    state = {
        content : ""
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }  

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
         
        })
            this.props.addTask(this.state)
            this.setState({
                content: ""
            })
    }
    render() {
        return (
            <div className="add-task">
                <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
                    <div className="modal-header">
                        <h5>Add a new task</h5>
                        <h3 className="x" onClick={this.closeModal}>X</h3>
                    </div>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" className="text" onChange={this.handleChange} value={this.state.content}/>
                        <button>Confirm</button>
                    </form>
                </div>

                <button id="add" onClick={() => this.openModal()} className= { this.state.isOpen ? "hide-btn" : ""}>Add Task</button>
            </div>
        )
    }
}

export default AddTask
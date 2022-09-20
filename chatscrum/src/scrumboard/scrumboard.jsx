import React from "react";
// import Data from "../../static/data";
import Data from "../static/data";
import "./scrumboard.css"
import Tasks from "../Tasks/Tasks";


class Scrumboard extends React.Component {

    constructor(props){
        super(props)
    
       this.state = {
            data: Data,
            isOpen:false,
            tasks: null,
       }
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
            tasks: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            tasks: e.target.value
        })
    }

    render() {
        console.log("Logged in as", this.state.data.fullname)
        return ( 
            <div className="scrumboard">
                <nav>
                    <h1>CHATSCRUM</h1>
                    <div className="var">
                        <p>User type: {Data.usertype}</p>
                        <p>Project Name: {Data.projectname}</p>
                    </div>
                </nav>

                <p id="info">Hello {Data.fullname} Welcome to your scrumboard</p>

                <Tasks />

                {/* <div className="container">
                    <div className="weekly">
                        <h5>Weekly Task</h5>
                        <p id="box">{this.state.tasks}</p>
                    </div>

                    <div className="weekly">
                        <h5>Daily Task</h5>
                    </div>                   
                </div> */}

                <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
                    <div className="modal-header">
                        <h5>Add a new task</h5>
                        <h3 className="x" onClick={this.closeModal}>X</h3>
                    </div>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" className="text" onChange={this.handleChange}/>
                        <button>Confirm</button>
                    </form>
                </div>

                <button id="add" onClick={() => this.openModal()} className= { this.state.isOpen ? "hide-btn" : ""}>Add Task</button>

            </div>
        )
    }
}

export default Scrumboard
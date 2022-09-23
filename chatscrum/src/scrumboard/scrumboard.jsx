import React from "react";
import Data from "../static/data";
import "./scrumboard.css"
import Tasks from "../Tasks/Tasks";
import AddTask from "./addTask";
import Users from "../users/users";
import axios from "axios"


class Scrumboard extends React.Component {

    constructor(props){
        super(props)
    
       this.state = {
            data: Data,
            isOpen:false,
            tasks: [],
       }
    }

    addTask = (task) => {
        task.id = Math.random().toString(36).slice(2,9)
        let tasks = [...this.state.tasks, task]
        this.setState ({
            tasks
        })
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => {
           return task.id != id
        })
        this.setState({
            tasks
        })
    }
    
    componentDidMount() {
        axios.get("http://liveapi.chatscrum.com/scrum/api/scrumgoals/")
            // .then(res => console.log (res))  
            .then(res => this.setState ({
                tasks: res.data,
            })) 
    }

    render() {
        console.log("Logged in as", Data.Username)
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

                <Tasks data= {this.state.tasks} deleteTask= {this.deleteTask}/>

                <AddTask addTask = {this.addTask}/>

                <Users />

            </div>
        )
    }
}

export default Scrumboard
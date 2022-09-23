
import React, {Component} from "react";
import "./users.css"
import axios from "axios"

export class Users extends Component {

    constructor(){
        super()
    
       this.state = {
            users: [],
            loading: true
       }
    }

    toggleModal = () =>{
        if(this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else {
            this.setState({
                isOpen: true
            })
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

    componentDidMount() {
        axios.get("http://liveapi.chatscrum.com/scrum/api/scrumusers/")
            // .then(res => console.log (res))   
            .then(res => this.setState ({
                users: res.data.slice(0,8)
            }))
    }

    render () {
        return (
            <div className="main">
                
                <div className="adjust">
                    <h4 onClick={() => this.openModal()} className= { this.state.isOpen ? "hide-btn" : ""}>connected users</h4>
                    <h3 className="x" onClick={this.closeModal}>X</h3>
                </div>

                <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
                    {this.state.users.map(({nickname, id}) => {
                        return (
                            <div className="user" key={id}>
                               <span className="move"></span> {nickname}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Users
import Users from "./components/grid";
import './App.css';
import React, { Component } from 'react'
import logo from './logo.svg'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users_data: ([]),
            loading: false
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState() {

        this.setState({ loading: true });

        setTimeout(async function () {

            const response = await fetch("https://reqres.in/api/users?page=1");
            const jsonresponse = await response.json();
            console.log(jsonresponse)
            this.setState({ users_data: jsonresponse["data"], loading: false });
        }.bind(this), 2500); //set loading time here
    }

    render() {
        return (
            <>
                <nav>
                    <div className="navbar">
                        <div className="logo-name">
                            <img src={logo}/>
                            <h2>React-App</h2>
                        </div>

                        <div className="growmore">
                            <h1>Let's Growmore</h1>
                        </div>
                        <button className="button" onClick={this.updateState}>Get Users</button>

                    </div>
                </nav>

                <div>
                    <
                        Users loading={this.state.loading}
                        users={this.state.users_data}
                    />
                </div >

            </>
        );
    }
}

export default App;
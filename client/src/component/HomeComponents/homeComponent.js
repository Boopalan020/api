import React, { Component } from 'react'

export function home(){
    return(
        <div>
            This is a HomeComponent
        </div>
    )
}

export class loginComponent extends Component{

    LoginHandle = () => {
        window.open("http://localhost:3001/auth/login", "_self");
    };

    render(){
        return(
            <div>
                <button onClick = { this.LoginHandle }> Login now </button>
            </div>
        );
    }
}



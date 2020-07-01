import React, { Component } from 'react'
import axios from 'axios';

export class boardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userIdentity : {}
        }
    }
    componentDidMount()
    {
        const params = new URLSearchParams(this.props.location.search);
        const token = params.get('token');
        
        axios.post('/isauth', {token})
        .then(res => {
            this.setState({
                userIdentity : res.data
            });
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div>
                Dash Board 
                {
                    this.state.userIdentity.name 
                }
            </div>
        );
    }
}

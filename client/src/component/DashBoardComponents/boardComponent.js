import React, { useState,  useEffect } from 'react'
import axios from 'axios';

export function BoardComponent (props) {
    let [userIdentity, setuserIdentity] = useState({});
    let [authenticated, setAuthenticated] = useState(false);
    
    function fetchUsercredentials()
    {
        const params = new URLSearchParams(props.location.search);
        const token = params.get('token');

        axios.post('/isauth', {token})
        .then(res => {
            setAuthenticated(true);
            setuserIdentity(res.data);
        })
        .catch(err => {
            console.error(err);
            setAuthenticated(false);
        });
    }

    // Acts as ComponentDidMount and ComponentWillMount
    useEffect(() =>{
        fetchUsercredentials();
    },[]);

    return (
        <div>
            Dash Board <br></br>
            { userIdentity.name } <br></br>
            { userIdentity.GoogleID } <br></br>
            { userIdentity.email } <br></br>
            { userIdentity.ImageURL } <br></br>
        </div>
    );
}




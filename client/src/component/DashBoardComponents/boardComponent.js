import React, { useState,  useEffect } from 'react'
import axios from 'axios';

export function BoardComponent (props) {
    let [userIdentity, setuserIdentity] = useState({});
    let [authenticated, setAuthenticated] = useState(false);
    
    
    // Acts as ComponentDidMount and ComponentWillMount
    useEffect(() =>{
        function fetchUsercredentials()
        {
            const params = new URLSearchParams(props.location.search);
            const token = params.get('token');

            axios.post('/isauth', {token})
            .then(res => {
                if(res.data === "")
                {
                    setAuthenticated(false);
                }
                else{
                    setAuthenticated(true);
                    setuserIdentity(res.data);
                }
            })
            .catch(err => {
                console.error(err);
                setAuthenticated(false);
            });
        }
        fetchUsercredentials();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            Dash Board <br></br>
            { authenticated && "true"}
            { !authenticated && "login again" }
            { userIdentity.name } <br></br>
            { userIdentity.GoogleID } <br></br>
            { userIdentity.email } <br></br>
            { userIdentity.ImageURL } <br></br>
        </div>
    );
}




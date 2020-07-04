import React, { useState,  useEffect } from 'react'
import axios from 'axios';
import { Home } from '../HomeComponents/homeComponent';

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
            { 
                authenticated 
                ? 
                <Home auth={authenticated} />
                :
                <div>
                    <Home auth={authenticated} />

                    {/* Have to iclude the please logout component here */}
                    <h1> Please Login Again </h1>


                </div>
            }
        </div>
    );
}




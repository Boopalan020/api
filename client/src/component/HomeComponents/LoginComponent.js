import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Home } from './homeComponent';

const googleButton ={
    color: "#ffffff",
    backgroundColor : "#4285f4",
    boxShadow: "0 1px 2px 1px #ddd",
    height:"50px",
    width : "20em"
};

const googleImage = {
    width : "8em",
    height : "8em"
};

export function LoginComponent(props){
    function LoginHandle(){
        window.open("http://localhost:3001/auth/login", "_self");
    };
    return(
        <div>
            <div style={{marginBottom :'10px'}}>
                <Home auth={false} />
            </div>
            
            <Container className="p-4"> 
                <Row>
                    <Col >
                        <Welcome />
                    </Col>
                </Row>
                <Row>
                    <GoogleImage/>
                </Row>
                <Row >
                    <Col className="d-flex justify-content-center p-5">
                        <Button onClick = { LoginHandle } style={ googleButton } > Sign In with Google </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function Welcome() {
    return(
        <Typography variant="h6" className="p-5 text-center">
            Welcome to TruckDesk Application
        </Typography>
    )
}

function GoogleImage() {
    return(
        <Col className="d-flex justify-content-center">
            <img style={ googleImage } alt='' src="https://www.monthlybrands.com.pk/wp-content/uploads/2018/03/google-icon-_1__1.gif"/>
        </Col>
    );
}

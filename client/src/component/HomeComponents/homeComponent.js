import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Row, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    loginLinkcolor : {
        color : '#ffffff'
    },
  }));

export function Home (props) {
    const classes = useStyles();
    let [authenticated, setAuthenticated] = useState(false);

    function showMenuIcon(){
        setAuthenticated(props.auth);
    }

    useEffect(() => {
        showMenuIcon();
    },[]);

    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            {
                authenticated
                ?
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                :
                    <div></div>
            }
            <Typography variant="h6" className={classes.title}>
              TruckDesk
            </Typography>
            <Link to='/login'>
                <Button color="primary" className={classes.loginLinkcolor}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
}


export function LoginComponent(props){
    let googleButton ={
        color: "#ffffff",
        backgroundColor : "#4285f4",
        boxShadow: "0 1px 2px 1px #ddd",
        height:"50px",
        width : "20em"
    };

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
    let googleImage = {
        width : "8em",
        height : "8em"
    };
    return(
        <Col className="d-flex justify-content-center">
            <img style={ googleImage } src="https://www.monthlybrands.com.pk/wp-content/uploads/2018/03/google-icon-_1__1.gif"/>
        </Col>
    );
}

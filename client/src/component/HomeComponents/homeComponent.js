import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
    let [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        function showMenuIcon(){
            setAuthenticated(props.auth);
        }
        showMenuIcon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            {
                authenticated &&
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Manage Drivers</MenuItem>
                        <MenuItem onClick={handleClose}>Vehicle</MenuItem>
                        <MenuItem onClick={handleClose}>Create memo</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </IconButton>
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

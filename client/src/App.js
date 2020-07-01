import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import { home as HomeComponent, loginComponent} from './component/HomeComponents/homeComponent';
import { boardComponent } from './component/DashBoardComponents/boardComponent'

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render(){
        return (
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Switch>
                    <Route exact path = '/' component= {HomeComponent}></Route>
    
                    <Route exact path = '/login' component = {loginComponent}></Route>
    
                    <Route exact path = '/profile' component= { boardComponent }></Route>
                </Switch>
            </Router>
        );
    }
}


export default App;

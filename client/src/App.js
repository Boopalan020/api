import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home as HomeComponent, LoginComponent} from './component/HomeComponents/homeComponent';
import { BoardComponent } from './component/DashBoardComponents/boardComponent'

function App(props){
 
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component= {() => <HomeComponent auth = {false}/>}></Route>
                <Route exact path = '/login' component = { LoginComponent }></Route>
                <Route exact path = '/profile' component= { BoardComponent }></Route>
            </Switch>
        </Router>
    );
}


export default App;

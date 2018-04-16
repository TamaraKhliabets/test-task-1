import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import News from "./News";
import Profile from "./Profile";
import Login from "./Login";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route path='/news' component={() => <News/>}/>
                    <Route path='/profile' component={() => <Profile/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                </Switch>
            </div>
        )
    }
}

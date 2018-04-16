import React, {Component} from 'react';

export default class Login extends Component{
    render() {
        return (
            <div>
                <form action='' method='post'>
                    <input type='text' placeholder='username'/><br/>
                    <input type='password' placeholder='password'/><br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}
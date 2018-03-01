import React from 'react';
import ReactDOM from "react-dom";


export default class App extends React.Component{

   constructor(props) {
       super(props);
       this.state = {username:'Guest'};
       this.setCurrent = this.setCurrent.bind(this);
        }

    //Modifying state
    setCurrent(name)
    {
        this.setState({username: name});
    }

    render ()
    {
        return (<div></div>);
    }
}


var app = <App/>; //instantiation creacts a react element from react class
var node = document.getElementById("app");
ReactDOM.render(app,node);




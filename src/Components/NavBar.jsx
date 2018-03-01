import React from 'react';


let navStyle = {
    backgroundColor: 'rgb(19, 151, 247)',
    color : 'white'

};

let navTitleStyle = {
    fontSize: '25px',
    marginLeft : '45%'
};

export default class NavBar extends React.Component{


    render()
    {
        return(

                <nav className="navbar navbar-light" style={navStyle}>
                    <span className="navbar-text" style={navTitleStyle}>
                         Welcome!
                    </span>
                </nav>
        )
    }

}
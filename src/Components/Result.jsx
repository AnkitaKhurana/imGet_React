import React from 'react';
import Row from './Row.jsx'

export default class NavBar extends React.Component{

    render()
    {
        return(
        <div>
            <center><h2>Result</h2></center>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">File Name</th>
                {/*<th scope="col">Match %</th>*/}
            </tr>
            </thead>
            <tbody>


            {
                this.props.links.map( function(l,index){
                    return <Row data={l} key={l} num={index}/>
                })
            }

            </tbody>
        </table>
        </div>

        )
    }

}
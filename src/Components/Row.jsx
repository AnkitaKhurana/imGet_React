import React from "react";


export default class Row extends React.Component{

    render(){ return (

        <tr>
            <td>{this.props.num}</td>
            <td>{this.props.data}</td>
            {/*<td>this.props.l.per</td>*/}
        </tr>

    )}


}

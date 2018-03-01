import React from 'react';


export default class NavBar extends React.Component{


    render()
    {
        return(

        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">File Link</th>
                <th scope="col">Match %</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
            </tbody>
        </table>

        )
    }

}
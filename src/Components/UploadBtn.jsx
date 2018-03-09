import React from 'react';
import Result from './Result.jsx';
import axios from "axios";

let findBtn = {
    marginLeft: '33%'
};


export default class UploadBtn extends React.Component{

    constructor(props)
    {
        super(props);
        this.state=({links:[]});

    }

    componentDidMount()
    {
        console.log('I was triggered during componentDidMount')

        var url = "http://localhost:3010/result";
        axios.get(url)
            .then(function (response) {
                var l = response.data;
                this.setState({links : l});
                console.log(this.state.links)

            }.bind(this)).catch(
            function (err) {
                console.log(err)
            });
    }
    render()
    {
        return(

        <div className="col-md-12">
            <div className="row">

                <div className="col-md-4" style={{align:"center"}}>
                    <h2> Upload your Images here &#8658; <br/><br/>
                    Click (+) to Add More Files</h2>
                </div>
                <div className="control-group col-md-4" id="fields">
                    <label className="control-label" htmlFor="field1">
                        Upload Atleast 6 images for better Results :)
                        </label>
                    <form id="frmUploader" method="post" encType="multipart/form-data" action="/api/Upload">
                    <div className="controls">
                        <div className="entry input-group col-xs-3">

                                <input className="btn btn-primary" name="imgUploader" type="file" accept=".jpg, .jpeg, .png" multiple/>

                        </div>
                    </div>
                        <button type="submit" className="btn btn-danger saveImages" style={findBtn}>Find Me</button>
                    </form>

                    <br/>
                </div>
                <div className="col-md-4">
                    <Result links={this.state.links} />
                </div>
            </div>
        </div>



        )
    }

}
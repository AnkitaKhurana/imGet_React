import React from 'react';
import Result from './Result.jsx';

let findBtn = {

    marginLeft: '33%'

};


export default class UploadBtn extends React.Component{

    constructor(props)
    {
        super(props);
        this.state=({links:[]});

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
                    <div className="controls">
                        <div className="entry input-group col-xs-3">
                            <input className="btn btn-primary" name="fields[]" type="file"/>
                                 <span className="input-group-btn">
                                    <button className="btn btn-success btn-add" type="button">
                                        <span className="glyphicon glyphicon-plus"></span>
                                    </button>
                                 </span>
                        </div>

                    </div>
                    <br/>
                    <button className="btn btn-danger saveImages" style={findBtn}>Find Me</button>
                </div>
                <div className="col-md-4">
                    <Result links={this.state.links} />
                </div>
            </div>
        </div>



        )
    }

}
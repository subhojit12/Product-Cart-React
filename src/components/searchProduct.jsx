import React,{ Component } from 'react';
import './searchProduct.css'

export default class SearchProduct extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className="form-control" onChange={(e)=>this.props.searchText(e.target.value)}  placeholder="Search"/>
                        
                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-secondary" onClick={()=>this.props.search('I am clicked')}>Search</button>
                    </div>
                </div>
                
            </div>
            
        )
    }
}
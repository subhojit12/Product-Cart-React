import React,{Component} from 'react';
import './productDetails.css'

export default class ProductDetails extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.details.name}</h5>
                                <img className="image" src={this.props.details.thumbnailImage}></img>
                                <p className="card-text">{this.props.details.categoryPath}</p>
                                <label>{this.props.details.msrp}</label>
                                <button type="button" className="mr-1 btn btn-outline-secondary" onClick={()=>this.props.add()}>Add to Cart</button>
                                <button type="button" className="ml-1 btn btn-outline-danger" onClick={()=>this.props.rem()}>Remove Item</button>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}
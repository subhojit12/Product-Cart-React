import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/productList';
import SearchProduct from './components/searchProduct'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      searchQuery:''
    }
    this.handleSearchClick =this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  handleChange(data){
    let currentState = this.state;
    currentState.searchQuery=data;
    this.setState(currentState);
  }
  handleSearchClick(){
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  removeItem(){
    let currentState = this.state;
    if(currentState.counter == 0){
      this.setState(currentState);
    }else{
      currentState.counter--;
      this.setState(currentState);
    }
    
    
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Shopping Cart</a>
          <label className="navbar-brand">Items:{this.state.counter}</label>
        </nav>
        <div className="row">
        <div className="col">
          <SearchProduct searchText={this.handleChange} />
        </div>
        </div>
        <div className="row">
        <div className="col">
          <ProductList search={this.state.searchQuery} count={this.handleSearchClick} remove={this.removeItem}/>  
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SideBar from './SideBarComponent/SideBar'

class Produit extends Component {
  state = {
    quantite: 0
  }
  addProduit() {
    this.setState({
      quantite: this.state.quantite + 1
    })
    console.log(this.state);
  }
  deleteProduit() {
    this.setState({
      quantite: this.state.quantite - 1
    })
  }
  render(){
    return (
      <div>
        <p className="prod"> Produit {this.props.name} </p>
        <p> Quantité : {this.state.quantite} </p>
        <button onClick={() => this.addProduit()}> + </button> &nbsp; &nbsp;
        <button onClick={() => this.deleteProduit()}> - </button>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SideBar></SideBar>
        </div>
        <div className="panier">
          <Produit name="Prod 1"> </Produit>
          <Produit name="Prod 2"> </Produit>
        </div>
      </div>
    )
  }
 
}

export default App;

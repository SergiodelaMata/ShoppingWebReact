import React, { Component } from 'react'

export default class Bag extends Component {
  render() {
    return (
        <div id="containerBagProducts" className="container card col-lg-4 col-md-12 col-sm-12">
            <div className="container card d-flex bg-success" style={{marginTop:'1em'}}>
                <h3>Su cesta de la compra:</h3>
            </div>
            <div id="bag-products" style={{marginTop:'1em'}}>

            </div>
        </div>
    )
  }
}

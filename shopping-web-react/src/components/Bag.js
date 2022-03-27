import React, { Component } from 'react'
import ProductInBag from './ProductInBag';

export default class Bag extends Component {
  totalBuy = () => {
    return (
      <React.Fragment>
        <div className='card'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
              <h5 style={{marginLeft:'0.5em', marginTop:'0.5em', marginBottom:'0.5em'}}>Coste Total:</h5>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6' style={{textAlign:'right'}}>
              <p style={{marginRight:'0.5em', marginTop:'0.5em', marginBottom:'0.5em'}}>0€</p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-12' style={{width:'100%'}}>
              <button className='btn btn-primary' type='button' title='Realizar pedido' style={{width:'100%'}}>Realizar pedido</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  buildBag = () => {
    var productsInBag = this.props.productsInBag;

    return(
      <React.Fragment>
        {
          productsInBag.map(productInBag => (
            <ProductInBag key={productInBag.codeProduct} productInBag={productInBag} products={this.props.products} setProducts={this.props.setProducts} productsInBag={productsInBag} setProductsInBag={this.props.setProductsInBag}/>
          ))
        }
      </React.Fragment>
    )
  }

  render() {
    return (
        <div id="containerBagProducts" className="container card col-lg-4 col-md-12 col-sm-12">
            <div className="container card d-flex bg-success" style={{marginTop:'1em'}}>
                <h3>Su cesta de la compra:</h3>
            </div>
            <div id="bag-products" style={{marginTop:'1em'}}>
              <React.Fragment>
                {
                  this.totalBuy()
                }
              </React.Fragment>
              <React.Fragment>
                {
                  this.buildBag()
                }
              </React.Fragment>
            </div>
        </div>
    )
  }
}

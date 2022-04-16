import React, { Component } from 'react'
import ProductInBag from './ProductInBag';
import TotalCost from './TotalCost';

export default class Bag extends Component {
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
                <h3 style={{textAlign: 'left'}}>Su cesta de la compra:</h3>
            </div>
            <div id="bag-products" style={{marginTop:'1em'}}>
              <React.Fragment>
                <TotalCost productsInBag={this.props.productsInBag} setProductsInBag={this.props.setProductsInBag} setTotalPrice={this.props.setTotalPrice} setOverlay={this.props.setOverlay}></TotalCost>
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

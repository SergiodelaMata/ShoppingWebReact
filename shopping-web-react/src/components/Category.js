import React, { Component } from 'react'
import Product from "../components/Product.js"

export default class Category extends Component {
  setProducts = () => {
    var products = this.props.products;
    var listProducts = products.filter(product => {
      if(this.props.category.idCategory === product.idCategory)
      {
        return true;
      }
      else
      {
        return false;
      }
    })
    return(
      <React.Fragment>
        {
          listProducts.map(product => (
            <Product key={product.codeProduct} product={product} products={this.props.products} setProducts={this.props.setProducts} productsInBag={this.props.productsInBag} setProductsInBag={this.props.setProductsInBag}/>
          ))
        }
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className='accordion-item'>
        <h5 className='accordion-header' id={"category" + (this.props.category.idCategory + 1)}>
          <button type='button' data-bs-toggle='collapse' data-bs-target={"#products" + (this.props.category.idCategory + 1)} className='col-sm-12 accordion-button justify-content-start text-dark' aria-expanded='true' aria-controls={"products" + (this.props.category.idCategory + 1)} style={{textAlign:'left', marginBottom:'0.5em'}}> 
            {this.props.category.nameCategory}
          </button> 
        </h5>
        <div id={"products" + (this.props.category.idCategory + 1)} className='container accordion-collapse collapse show' aria-labelledby={"category" + (this.props.category.idCategory + 1)}>
            <div id={"listProducts" + + (this.props.category.idCategory + 1)} className='row' style={{marginBottom:'0.5em'}}>
            <React.Fragment>
              {this.setProducts()}
            </React.Fragment>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Category from "../components/Category.js"

export default class CategoriesList extends Component {
  buildCatalog = () => {
    var categories = this.props.categories;

    return(
      <React.Fragment>
        {
          categories.map(category => (
            <Category key={category.idCategory} category={category} products={this.props.products} setProducts={this.props.setProducts} productsInBag={this.props.productsInBag} setProductsInBag={this.props.setProductsInBag}/>
          ))
        }
      </React.Fragment>
    )
  }

  render() {
    return (
      <div id="containerProducts" className="container card col-lg-8 col-md-12 col-sm-12">
          <div className="container card d-flex bg-info" style={{marginTop:'1em'}}>
              <h3>Productos disponibles clasificados por categoría:</h3>
          </div>
          <div id="categories" className="accordion" style={{marginTop: '1em', marginBottom: '1em'}}>
            <React.Fragment>
              {
                this.buildCatalog()
              }
            </React.Fragment>
          </div>
      </div>
    )
  }
}

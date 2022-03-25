import React, { Component } from 'react'
import NewCategory from "../components/NewCategory.js"
import NewProduct from "../components/NewProduct.js"

export default class Form extends Component {
  showForm = () => {
    if(this.props.page === "newCategory")
    {
      return (
        <React.Fragment>
          <NewCategory setPage={this.props.setPage} categories={this.props.categories} setCategories={this.props.setCategories}></NewCategory>
        </React.Fragment>
      )
    }
    else if(this.props.page === "newProduct")
    {
      return (
        <React.Fragment>
          <NewProduct setPage={this.props.setPage} categories={this.props.categories} products={this.props.products} setProducts={this.props.setProducts}></NewProduct>
        </React.Fragment>
      )
    }
    else
    {
      return null;
    }

  }

  render() {
    return (
      <React.Fragment>
        {this.showForm()}
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react'

export default class CategoriesList extends Component {
  render() {
    return (
      <div id="containerProducts" className="container card col-lg-8 col-md-12 col-sm-12">
          <div className="container card d-flex bg-info" style={{marginTop:'1em'}}>
              <h3>Productos disponibles clasificados por categoría:</h3>
          </div>
          <div id="categories" className="accordion" style={{marginTop: '1em', marginBottom: '1em'}}>

          </div>
      </div>
    )
  }
}

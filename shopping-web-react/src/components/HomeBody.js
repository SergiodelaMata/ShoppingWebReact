import React from 'react'

import CategoriesList from "../components/CategoriesList"
import Bag from "../components/Bag"

function HomeBody(props) {
  return (
    <div className="container d-flex flex-column justify-content-center col-sm-12" style={{marginBottom: '2em'}}>
        <div className="row" style={{marginLeft: '2em', marginRight: '2em'}}>
            <CategoriesList categories={props.categories} setCategories={props.setCategories} products={props.products} setProducts={props.setProducts}></CategoriesList>
            <Bag></Bag>
        </div>
    </div>
  )
}

export default HomeBody

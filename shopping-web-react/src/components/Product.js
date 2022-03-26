import React, { Component } from 'react'
import "../css/images.css"

export default class Product extends Component {
  buildSectionProduct = () => {
    var product = this.props.product;
    console.log(product);

    if(product.numUnits === 0)
    {
      return(
        <React.Fragment>
          <div className='card col-sm-6' style={{marginBottom:'0.5em'}}> 
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12 align-self-center' style={{textAlign:'center'}}>
                <img className='zoom img-product' id={'imageProduct' + product.codeProduct} src={product.image} style={{opacity:'0.5', marginTop: '1em'}}/>
                <p className='bg-danger' style={{fontSize:'0.8em'}}>No hay stock</p>
                <h3 className='text-primary'>{product.price} €</h3>
              </div>
              <div className='card-body col-lg-8 col-md-6 col-sm-12'>
                <p style={{textAlign:'center'}}>
                  <strong> {product.titleProduct} </strong>
                </p>
                <p className='text-muted' style={{textAlign:'left', fontSize:'0.8em'}}>{product.codeProduct}</p>
                <p style={{textAlign:'left', fontSize:'0.8em'}}>{product.description}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    else
    {
      return(
        <React.Fragment>
          <div className='card col-sm-6' style={{marginBottom:'0.5em'}}> 
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12 align-self-center' style={{textAlign:'center'}}>
                <img className='zoom img-product' id={'imageProduct' + product.codeProduct} src={product.image} style={{opacity:'1', marginTop: '1em'}}/>
                <p id={"unitsProduct" + product.codeProduct} style={{fontSize:'0.8em'}} codeProduct={product.codeProduct}>Unidades: {product.numUnits}</p>
                <h3 className='text-primary'>{product.price} €</h3>
                <button id={"buttonProduct" + product.codeProduct} className='btn btn-primary' type='button' style={{width: "100%", marginBottom: "1em", fontSize: "0.8em"}} codeProduct={product.codeProduct} title='Añadir a la cesta'>Añadir a <br/> la cesta</button>
              </div>
              <div className='card-body col-lg-8 col-md-6 col-sm-12'>
                <p style={{textAlign:'center'}}>
                  <strong> {product.titleProduct} </strong>
                </p>
                <p className='text-muted' style={{textAlign:'left', fontSize:'0.8em'}}>{product.codeProduct}</p>
                <p style={{textAlign:'left', fontSize:'0.8em'}}>{product.description}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.buildSectionProduct()}
      </React.Fragment>
    )
  }
}

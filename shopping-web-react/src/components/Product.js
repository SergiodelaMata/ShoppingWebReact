import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "../css/images.css"

export default class Product extends Component {
  refProduct = React.createRef();

  componentDidMount() {
    var button = ReactDOM.findDOMNode(this.refProduct.current);
    var product = this.props.product;
    if(button !== null)
    {
      button.setAttribute("codeProduct", product.codeProduct);
    }
  }

  addProduct = () => {
    var codeProduct = this.refProduct.current.getAttribute("codeProduct");
    var products = this.props.products;
    var productsInBag = this.props.productsInBag;

    const product = products.filter(products => products.codeProduct === codeProduct)[0];
    //Se comprueba que el producto cuenta con unidades
    if(product.numUnits !== 0)
    {
      //Se comprueba que la cesta no está vacía. En tal caso revisa si se puede o no introducir
      if(productsInBag.length !== 0)
      {
        //Se comprueba si el producto ya se encontraba en la cesta. En caso de encontrarse, se revisa si se puede introducir 
        const productInBag = productsInBag.filter(product => product.codeProduct === codeProduct)[0];
        if(productInBag !== undefined && productInBag !== null)
        {
            //Se comprueba si el número de unidades en la cesta es inferior al número de unidades disponibles menos 1 y si es así
            // incrementa en una unidad el número de unidades del producto en la cesta
            //if(productInBag.numUnits < product.numUnits - 1)
            if(product.numUnits - 1 > 0)
            {
              let indexBag = productsInBag.findIndex( product => product.codeProduct === codeProduct);
              const productInBagUpdated = {
                "codeProduct": productsInBag[indexBag].codeProduct,
                "titleProduct": productsInBag[indexBag].titleProduct,
                "description": productsInBag[indexBag].description,
                "price": productsInBag[indexBag].price,
                "numUnits": productsInBag[indexBag].numUnits + 1,
                "image": productsInBag[indexBag].image
              }
              productsInBag[indexBag] = productInBagUpdated;
              localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
              this.props.setProductsInBag(productsInBag);

              let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
              const productUpdated = {
                "codeProduct": products[indexListProducts].codeProduct,
                "idCategory": products[indexListProducts].idCategory,
                "titleProduct": products[indexListProducts].titleProduct,
                "description": products[indexListProducts].description,
                "price": products[indexListProducts].price,
                "numUnits": products[indexListProducts].numUnits - 1,
                "image": products[indexListProducts].image
              }
              products[indexListProducts] = productUpdated;
              localStorage.setItem("products", JSON.stringify(products));
              this.props.setProducts(products);
            }
            //En caso de que sea igual el número de unidades en la cesta al número de unidades en stock menos 1,
            // en ese caso se hace lo mismo que en el caso anterior pero se deshabilita el botón para añadir unidades
            //else if(productInBag.numUnits === product.numUnits - 1)
            else if(product.numUnits - 1 === 0)
            {
              var button = ReactDOM.findDOMNode(this.refProduct.current);
              button.disabled = true;
              let indexBag = productsInBag.findIndex( product => product.codeProduct === codeProduct);
              const productInBagUpdated = {
                "codeProduct": productsInBag[indexBag].codeProduct,
                "titleProduct": productsInBag[indexBag].titleProduct,
                "description": productsInBag[indexBag].description,
                "price": productsInBag[indexBag].price,
                "numUnits": productsInBag[indexBag].numUnits + 1,
                "image": productsInBag[indexBag].image
              }
              productsInBag[indexBag] = productInBagUpdated;
              localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
              this.props.setProductsInBag(productsInBag);

              let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
              const productUpdated = {
                "codeProduct": products[indexListProducts].codeProduct,
                "idCategory": products[indexListProducts].idCategory,
                "titleProduct": products[indexListProducts].titleProduct,
                "description": products[indexListProducts].description,
                "price": products[indexListProducts].price,
                "numUnits": products[indexListProducts].numUnits - 1,
                "image": products[indexListProducts].image
              }
              products[indexListProducts] = productUpdated;
              localStorage.setItem("products", JSON.stringify(products));
              this.props.setProducts(products);
            }
            //En el caso de no cumplirse los casos anteriores, simplemente se deshabilita el botón para añadir a la cesta
            else
            {
              var button = ReactDOM.findDOMNode(this.refProduct.current);
              button.disabled = true;
            }
        }
        //En caso de no encontrarse, lo introduce directamente a la cesta
        else
        {
          const productIntroduced = {
            "codeProduct": product.codeProduct,
            "titleProduct": product.titleProduct,
            "description": product.description,
            "price": product.price,
            "numUnits": 1,
            "image": product.image
          }
          productsInBag.push(productIntroduced);
          localStorage.setItem("productsInBag", JSON.stringify(productsInBag));

          let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
          const productUpdated = {
            "codeProduct": products[indexListProducts].codeProduct,
            "idCategory": products[indexListProducts].idCategory,
            "titleProduct": products[indexListProducts].titleProduct,
            "description": products[indexListProducts].description,
            "price": products[indexListProducts].price,
            "numUnits": products[indexListProducts].numUnits - 1,
            "image": products[indexListProducts].image
          }
          products[indexListProducts] = productUpdated;
          localStorage.setItem("products", JSON.stringify(products));
          this.props.setProducts(products);
        }
      }
      //En caso de estar vacía, lo introduce directamente a la cesta
      else
      {
        const productIntroduced = {
          "codeProduct": product.codeProduct,
          "titleProduct": product.titleProduct,
          "description": product.description,
          "price": product.price,
          "numUnits": 1,
          "image": product.image
        }
        productsInBag.push(productIntroduced);
        localStorage.setItem("productsInBag", JSON.stringify(productsInBag));

        let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
        const productUpdated = {
          "codeProduct": products[indexListProducts].codeProduct,
          "idCategory": products[indexListProducts].idCategory,
          "titleProduct": products[indexListProducts].titleProduct,
          "description": products[indexListProducts].description,
          "price": products[indexListProducts].price,
          "numUnits": products[indexListProducts].numUnits - 1,
          "image": products[indexListProducts].image
        }
        products[indexListProducts] = productUpdated;
        localStorage.setItem("products", JSON.stringify(products));
        this.props.setProducts(products);
      }
    }
    else
    {
      var button = ReactDOM.findDOMNode(this.refProduct.current);
      button.disabled = true;
    }
  }

  buildSectionProduct = () => {
    var product = this.props.product;
    var productsInBag = this.props.productsInBag;
    var productInBag = productsInBag.filter(productInBag => productInBag.codeproduct === product.codeproduct)[0];
    var numUnitsBag = 0;
    var imageProductId = 'imageProduct' + product.codeproduct;
    var unitsProductId = "unitsProduct" + product.codeProduct;
    var buttonProductId = "buttonProduct" + product.codeProduct;
    if(productInBag !== undefined)
    {
      numUnitsBag = productInBag.numUnits;
    }

    if(product.numUnits === 0 && numUnitsBag === 0)
    {
      return(
        <React.Fragment>
          <div className='card col-sm-6' style={{marginBottom:'0.5em'}}> 
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12 align-self-center' style={{textAlign:'center'}}>
                <img className='zoom img-product' id={imageProductId} src={product.image} alt={product.titleProduct} title={product.titleProduct} style={{opacity:'0.5', marginTop: '1em'}}/>
                <p className='bg-danger' style={{fontSize:'0.8em'}}>No hay stock</p>
                <h3 className='text-primary'>{product.price} €</h3>
              </div>
              <div className='card-body col-lg-8 col-md-6 col-sm-12'>
                <p style={{textAlign:'center'}}>
                  <strong> {product.titleProduct} </strong>
                </p>
                <p className='text-muted' style={{textAlign:'left', fontSize:'0.8em'}}>{product.codeproduct}</p>
                <p style={{textAlign:'left', fontSize:'0.8em'}}>{product.description}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    else if(product.numUnits === 0 && numUnitsBag !== 0)
    {
      return(
        <React.Fragment>
          <div className='card col-sm-6' style={{marginBottom:'0.5em'}}> 
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12 align-self-center' style={{textAlign:'center'}}>
                <img className='zoom img-product' id={imageProductId} src={product.image} alt={product.titleProduct} title={product.titleProduct} style={{opacity:'0.5', marginTop: '1em'}}/>
                <p id={unitsProductId} style={{fontSize:'0.8em'}}>Unidades: {product.numUnits}</p>
                <h3 className='text-primary'>{product.price} €</h3>
                <button ref={this.refProduct}  id={buttonProductId} className='btn btn-primary' type='button' onClick={this.addProduct} disabled style={{width: "100%", marginBottom: "1em", fontSize: "0.8em"}} title='Añadir a la cesta'>Añadir a <br/> la cesta</button>
              </div>
              <div className='card-body col-lg-8 col-md-6 col-sm-12'>
                <p style={{textAlign:'center'}}>
                  <strong> {product.titleProduct} </strong>
                </p>
                <p className='text-muted' style={{textAlign:'left', fontSize:'0.8em'}}>{product.codeproduct}</p>
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
                <img className='zoom img-product' id={imageProductId} src={product.image} alt={product.titleProduct} title={product.titleProduct} style={{opacity:'1', marginTop: '1em'}}/>
                <p id={unitsProductId} style={{fontSize:'0.8em'}}>Unidades: {product.numUnits}</p>
                <h3 className='text-primary'>{product.price} €</h3>
                <button ref={this.refProduct} id={buttonProductId} className='btn btn-primary' type='button' onClick={this.addProduct} style={{width: "100%", marginBottom: "1em", fontSize: "0.8em"}} title='Añadir a la cesta'>Añadir a <br/> la cesta</button>
              </div>
              <div className='card-body col-lg-8 col-md-6 col-sm-12'>
                <p style={{textAlign:'left'}}>
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

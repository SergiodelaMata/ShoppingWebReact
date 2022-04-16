import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "../css/images.css"
import Plus from "../img/plus.svg"
import Minus from "../img/dash.svg"

export default class ProductInBag extends Component {
  refMinusCodeProduct = React.createRef();
  refPlusCodeProduct = React.createRef();

  componentDidMount() {
    var productInBag = this.props.productInBag;
    var buttonMinus = ReactDOM.findDOMNode(this.refMinusCodeProduct.current);
    var buttonPlus = ReactDOM.findDOMNode(this.refPlusCodeProduct.current);
    buttonMinus.setAttribute("codeProduct", productInBag.codeProduct);
    buttonPlus.setAttribute("codeProduct", productInBag.codeProduct);
  }

  addProduct = () => {
    var codeProduct = this.refPlusCodeProduct.current.getAttribute("codeProduct");
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
              var buttonPlus = ReactDOM.findDOMNode(this.refPlusCodeProduct.current);
              buttonPlus.disabled = true;
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
              buttonPlus.disabled = true;
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
      buttonPlus.disabled = true;
    }
  }

  removeProduct = () => {
    var productsInBag = this.props.productsInBag;
    var products = this.props.products;

    var codeProduct = this.refMinusCodeProduct.current.getAttribute("codeProduct");
    const indexNotInBag = products.findIndex(product => product.codeProduct === codeProduct);
    const productInBag = productsInBag.filter(product => product.codeProduct === codeProduct)[0];
    const index = productsInBag.findIndex(product => product.codeProduct === codeProduct);

    var buttonPlus = ReactDOM.findDOMNode(this.refPlusCodeProduct.current);

    //Comprueba si solo existe una unidad del producto y en tal caso lo saca de la cesta
    if(parseInt(productInBag.numUnits) === 1)
    {
      productsInBag = productsInBag.filter(function(element){
        return element !== productInBag;
      })
      localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
      this.props.setProductsInBag(productsInBag);
      buttonPlus.removeAttribute("disabled");

      const productUpdated = {
        "codeProduct": products[indexNotInBag].codeProduct,
        "idCategory": products[indexNotInBag].idCategory,
        "titleProduct": products[indexNotInBag].titleProduct,
        "description": products[indexNotInBag].description,
        "price": products[indexNotInBag].price,
        "numUnits": products[indexNotInBag].numUnits + 1,
        "image": products[indexNotInBag].image
      }
      products[indexNotInBag] = productUpdated;
      localStorage.setItem("products", JSON.stringify(products));
      this.props.setProducts(products);
    }
    //En caso contrario elimina una unidad del producto de la cesta
    else
    {
      const productUpdated = {
        "codeProduct": productsInBag[index].codeProduct,
        "titleProduct": productsInBag[index].titleProduct,
        "description": productsInBag[index].description,
        "price": productsInBag[index].price,
        "numUnits": productsInBag[index].numUnits - 1,
        "image": productsInBag[index].image
      }
      productsInBag[index] = productUpdated;
      localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
      this.props.setProductsInBag(productsInBag);
      buttonPlus.removeAttribute("disabled");

      const productNotBagUpdated = {
        "codeProduct": products[indexNotInBag].codeProduct,
        "idCategory": products[indexNotInBag].idCategory,
        "titleProduct": products[indexNotInBag].titleProduct,
        "description": products[indexNotInBag].description,
        "price": products[indexNotInBag].price,
        "numUnits": products[indexNotInBag].numUnits + 1,
        "image": products[indexNotInBag].image
      }
      products[indexNotInBag] = productNotBagUpdated;
      localStorage.setItem("products", JSON.stringify(products));
      this.props.setProducts(products);
    }
  }

  configLimitUnitsAdd = () => {
    var productInBag = this.props.productInBag;
    var products = this.props.products;
    var product = products.filter(product => product.codeProduct === productInBag.codeProduct)[0];
    var imageProductId = 'imageProduct' + productInBag.codeproduct;
    var unitsProductId = "unitsProduct" + productInBag.codeProduct;

    if(product.numUnits === 0)
    {
      return(
        <React.Fragment>
          <div className='align-self-center col-sm-12 col-md-6 col-lg-5' style={{textAlign:'center'}}>
            <img className='zoom img-product-bag' id={imageProductId} src={productInBag.image} alt={productInBag.titleProduct} title={productInBag.titleProduct} style={{marginTop: '1em', opacity: '0.5'}}/>
            <div className='container'>
              <div className='row' style={{marginTop: '0.5em'}}>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                  <p id={unitsProductId} style={{textAlign:'center', fontSize:'1em'}}>Unidades: {productInBag.numUnits}</p>
                  <button ref={this.refMinusCodeProduct} className='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Eliminar de la cesta' onClick={this.removeProduct} style={{borderColor:'black'}}>
                    <img className='icon-element' alt='Eliminar una unidad del producto' title='Eliminar una unidad del producto' src={Minus}></img>
                  </button>
                  <button ref={this.refPlusCodeProduct} className='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Agregar a la cesta' onClick={this.addProduct} disabled style={{borderColor:'black'}}>
                    <img className='icon-element' alt='Añadir una unidad del producto' title='Añadir una unidad del producto' src={Plus}></img>
                  </button>
                </div>
                <h3 className='text-primary' style={{textAlign:'center'}}>{productInBag.price} €</h3>
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
          <div className='align-self-center col-sm-12 col-md-6 col-lg-5' style={{textAlign:'center'}}>
            <img className='zoom img-product-bag' id={imageProductId} src={productInBag.image} alt={productInBag.titleProduct} title={productInBag.titleProduct} style={{marginTop: '1em', opacity: '1'}}/>
            <div className='container'>
              <div className='row' style={{marginTop: '0.5em'}}>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                  <p id={unitsProductId} style={{textAlign:'center', fontSize:'1em'}}>Unidades: {productInBag.numUnits}</p>
                  <button ref={this.refMinusCodeProduct} className='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Eliminar de la cesta' onClick={this.removeProduct} style={{borderColor:'black'}}>
                    <img className='icon-element' alt='Eliminar una unidad del producto' title='Eliminar una unidad del producto' src={Minus}></img>
                  </button>
                  <button ref={this.refPlusCodeProduct} className='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Agregar a la cesta' onClick={this.addProduct} style={{borderColor:'black'}}>
                    <img className='icon-element' alt='Añadir una unidad del producto' title='Añadir una unidad del producto' src={Plus}></img>
                  </button>
                </div>
                <h3 className='text-primary' style={{textAlign:'center'}}>{productInBag.price} €</h3>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }


  buildProductInBag = () => {
    var productInBag = this.props.productInBag;

    return(
      <React.Fragment>
        <div className='card col-sm-12 col-md-12 col-lg-12' style={{marginTop:'0.5em'}}>
          <div className='row'>
            <React.Fragment>
              {this.configLimitUnitsAdd()}
            </React.Fragment>
            <div className='card-body col-sm-12 col-md-6 col-lg-7'>
              <p style={{textAlign:'left'}}>
                <strong>{productInBag.titleProduct}</strong>
              </p>
              <p className='text-muted' style={{fontSize:'0.8em', textAlign:'left'}}>
                {productInBag.codeProduct}
              </p>
              <p style={{fontSize:'0.8em', textAlign:'left'}}>
                {productInBag.description}
              </p>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
     <React.Fragment>
       {this.buildProductInBag()}
     </React.Fragment> 
    )
  }
}

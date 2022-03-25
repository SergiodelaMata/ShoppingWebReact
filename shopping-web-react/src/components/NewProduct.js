import React, { Component } from 'react'

export default class NewProduct extends Component {
  refCodeProduct = React.createRef();
  refIdCategory = React.createRef();
  refTitleProduct = React.createRef();
  refDescription = React.createRef();
  refPrice = React.createRef();
  refNumUnits = React.createRef();
  refImage = React.createRef();

  //Permite obtener el identificador para el nuevo producto
  setValueNewProduct = () => {
      //var codeProductInput = document.getElementById("codeProduct");
      var products = this.props.products;
      var numProduct = products.length + 1;
      var auxNum = 13 - numProduct.toString().length; //Para obtener el número de ceros que se deben establecer antes del número del código
      var codeProduct = "";

      for(var i = 0; i < auxNum; i++)
      {
          codeProduct += "0";
      }
      codeProduct += numProduct;
      return codeProduct;
  }

  productSubmit = (e) => {
    e.preventDefault();

    var products = this.props.products;
    var codeProduct = this.refCodeProduct.current.value;
    var idCategory = this.refIdCategory.current.value;
    var titleProduct = this.refTitleProduct.current.value;
    var description = this.refDescription.current.value;
    var price = this.refPrice.current.value;
    var numUnits = this.refNumUnits.current.value;
    var image = this.refImage.current.value;


    //En caso de no seleccionar ninguna de las categorías disponibles, se avisa al usuario de ello
    if(idCategory === "-")
    {
        alert("Por favor, introduzca la categoría para este producto.")
    }
    //En caso contrario, se comprueba si se puede introducir el producto
    else
    {
        const listProducts = products.filter(products => products.titleProduct === titleProduct);
        //En caso de no encontrarse en el listado, se introduce en él
        if(listProducts.length === 0)
        {
            const newProduct = {
                "codeProduct" : codeProduct,
                "idCategory" : idCategory,
                "titleProduct" : titleProduct,
                "description" : description,
                "price" : parseFloat(price),
                "numUnits" : parseInt(numUnits),
                "image" : image
            }

            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));
            alert("El producto ha sido creado e introducido en su respectiva categoría.");
            this.props.setProducts(products);
            this.props.setPage("Home");
        }
        //En caso contrario, se avisa al usuario de que el producto ya se encontraba disponible
        else
        {
            alert("El producto introducido ya existe.");
        }
    }    
  }

  setOptionsCategories = () => {
    var categories = this.props.categories;
    if(categories.length === 0) return null

    return(
      <React.Fragment>
        {
          categories.map(category => (
              <option key={category.idCategory} value={category.idCategory}>{category.nameCategory}</option>
          ))
        }
      </React.Fragment>
    )
  }


  render() {
    return (
      <div className="container d-flex flex-column justify-content-center col-sm-12" style={{marginBottom: '2em'}}>
        <div className="row" style={{marginLeft: '2em', marginRight: '2em'}}>
          <div id="containerCategory" className="container card col-lg-12 col-md-12 col-sm-12">
            <div className="container card d-flex bg-info" style={{marginTop: '1em'}}>
              <h3>Formulario del nuevo producto:</h3>
            </div>
            <form id="formCategory" className="form" onSubmit={this.productSubmit}>
              <div className="form-group container col-sm-12 d-none">
                <input ref={this.refCodeProduct} id="codeProduct" type="text" value={this.setValueNewProduct()} readOnly/>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Título del producto</strong></h6>
                  <input ref={this.refTitleProduct} id="titleProduct" type="text" required/>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Categoría a la que pertenecerá el producto</strong></h6>
                  <select ref={this.refIdCategory} id="selectorCategory">
                    <option value={"-"}>-</option>
                    <React.Fragment>
                      {this.setOptionsCategories()}
                    </React.Fragment>
                  </select>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Descripción del producto</strong></h6>
                  <textarea ref={this.refDescription} id="description" cols="2000" rows="4"></textarea>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Precio del producto</strong></h6>
                  <input ref={this.refPrice} id="price" type="number" min="0" step=".01" required/>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Número de unidades del producto</strong></h6>
                  <input ref={this.refNumUnits} id="numUnits" type="number" min="0" required/>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>URL de la imagen del producto</strong></h6>
                  <input ref={this.refImage} id="image" type="text" required/>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{textAlign: 'center'}}>
                <input id="buttonNewProduct" className="btn btn-primary" type="submit" style={{marginTop: '1em', marginBottom: '1em'}} value="Añadir producto"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

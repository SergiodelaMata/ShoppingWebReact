import React from 'react'

function NewProduct() {
  return (
    <div className="container d-flex flex-column justify-content-center col-sm-12" style={{marginBottom: '2em'}}>
      <div className="row" style={{marginLeft: '2em', marginRight: '2em'}}>
        <div id="containerCategory" className="container card col-lg-12 col-md-12 col-sm-12">
          <div className="container card d-flex bg-info" style={{marginTop: '1em'}}>
            <h3>Formulario del nuevo producto:</h3>
          </div>
          <form id="formCategory" className="form">
            <div className="form-group container col-sm-12 d-none">
              <input id="codeProduct" type="text" value="" readOnly/>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Título del producto</strong></h6>
                <input id="titleProduct" type="text" required/>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Categoría a la que pertenecerá el producto</strong></h6>
                <select id="selectorCategory">
                  <option value="">-</option>
                </select>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Descripción del producto</strong></h6>
                <textarea id="description" cols="2000" rows="4"></textarea>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Precio del producto</strong></h6>
                <input id="price" type="number" min="0" step=".01" required/>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Número de unidades del producto</strong></h6>
                <input id="numUnits" type="number" min="0" required/>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>URL de la imagen del producto</strong></h6>
                <input id="image" type="text" required/>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{textAlign: 'center'}}>
              <input id="buttonNewProduct" className="btn btn-primary" type="button" style={{marginTop: '1em', marginBottom: '1em'}} value="Añadir producto"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
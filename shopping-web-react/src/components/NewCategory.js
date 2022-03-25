import React from 'react'

function NewCategory() {
  return (
    <div className="container d-flex flex-column justify-content-center col-sm-12" style={{marginBottom: '2em'}}>
      <div className="row" style={{marginLeft: '2em', marginRight: '2em'}}>
        <div id="containerCategory" className="container card col-lg-12 col-md-12 col-sm-12">
          <div className="container card d-flex bg-info" style={{marginTop: '1em'}}>
            <h3>Formulario de la nueva categoría:</h3>
          </div>
          <form id="formCategory" className="form">
            <div className="form-group container col-sm-12 d-none">
              <input id="idCategory" type="text" readOnly/>
            </div>
            <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
              <div className="row">
                <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Nombre de la categoría</strong></h6>
                <input id="nameCategory" type="text" required/>
              </div>
            </div>
            <div className="form-group container col-sm-12" style={{textAlign: 'center'}}>
              <input id="buttonNewCategory" className="btn btn-primary" style={{marginTop: '1em', marginBottom: '1em'}} type="button" value="Añadir categoría"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewCategory
import React, { Component } from 'react'

export default class NewCategory extends Component {
  refIdCategory = React.createRef();
  refNameCategory = React.createRef();

  categorySubmit = (e) => {
    e.preventDefault();

    var idCategory = this.refIdCategory.current.value;
    var nameCategory = this.refNameCategory.current.value;
    var categories = this.props.categories;

    const listCategories = categories.filter(categories => categories.nameCategory === nameCategory);
    //Comprueba si la categoría no se encotraba ya disponible, y en tal caso la crea
    if(listCategories.length === 0)
    {
        const newCategory = {
            "idCategory" : parseInt(idCategory),
            "nameCategory" : nameCategory
        }
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));
        alert("La nueva categoría ha sido creada.");
        this.props.setCategories(categories);
    }
    //En caso contrario, avisa al usuario de que ya existe
    else
    {
        alert("La categoría introducida ya existe.");
    }
  }

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center col-sm-12" style={{marginBottom: '2em'}}>
        <div className="row" style={{marginLeft: '2em', marginRight: '2em'}}>
          <div id="containerCategory" className="container card col-lg-12 col-md-12 col-sm-12">
            <div className="container card d-flex bg-info" style={{marginTop: '1em'}}>
              <h3>Formulario de la nueva categoría:</h3>
            </div>
            <form id="formCategory" className="form" onSubmit={this.categorySubmit}>
              <div className="form-group container col-sm-12 d-none">
                <input ref={this.refIdCategory} id="idCategory" type="text" value={this.props.categories.length + 1} readOnly/>
              </div>
              <div className="form-group container col-sm-12" style={{marginTop: '1em'}}>
                <div className="row">
                  <h6 style={{textAlign: 'left', marginLeft: '-0.5em', marginRight: '-0.5em'}}><strong>Nombre de la categoría</strong></h6>
                  <input ref={this.refNameCategory} id="nameCategory" type="text" required/>
                </div>
              </div>
              <div className="form-group container col-sm-12" style={{textAlign: 'center'}}>
                <input id="buttonNewCategory" className="btn btn-primary" style={{marginTop: '1em', marginBottom: '1em'}} type="submit" value="Añadir categoría"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

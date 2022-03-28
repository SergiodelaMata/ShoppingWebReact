import React, { Component } from 'react'
import "../css/popup.css"

export default class Popup extends Component {
    setFinish = () => {
        this.props.setOverlay(false);
        localStorage.setItem('productsInBag', JSON.stringify([]));
        this.props.setProductsInBag([]);
    }

    render() {
        return (
            <div className="popup flex-column">
                <div onClick={this.setFinish} className="closeIcon">
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h2>¡La compra se ha efectuado correctamente! ¡Gracias por confiar en nosotros!</h2>
                <h3 id="priceText">El pago total ha sido de {this.props.totalPrice} €</h3>
                <div className="container">
                    <button type="button" className="btn btn-primary" style={{width:'100%'}} onClick={this.setFinish}>
                        Aceptar
                    </button>
                </div>
            </div>
        )
    }
}

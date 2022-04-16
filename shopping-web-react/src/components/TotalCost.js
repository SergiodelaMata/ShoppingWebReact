import React, { Component } from 'react'

export default class TotalCost extends Component {
  setPopUp = () =>{
    var totalPrice = this.getTotalPrice();
    this.props.setOverlay(true);
    this.props.setTotalPrice(totalPrice);
  }

  getTotalPrice = () =>{
    var productsInBag = this.props.productsInBag;
    var totalPrice = 0;

    for(let i = 0; i < productsInBag.length; i++)
    {
      totalPrice += productsInBag[i].price * productsInBag[i].numUnits;
    }
    totalPrice = Math.round(totalPrice * 100) / 100;
    return totalPrice;
  }

  totalBuy = () => {
    var totalPrice = this.getTotalPrice();
    localStorage.setItem("totalPrice", totalPrice);

    if(totalPrice === 0)
    {
      return (
        <React.Fragment>
          <div className='card'>
            <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-6'>
                <h5 style={{textAlign: 'left', marginLeft:'0.5em', marginTop:'0.5em', marginBottom:'0.5em'}}>Coste Total:</h5>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-6' style={{textAlign:'right'}}>
                <p style={{marginRight:'0.5em', marginTop:'0.5em', marginBottom:'0.5em'}}>{totalPrice} €</p>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-12' style={{width:'100%'}}>
                <button className='btn btn-primary' type='button' title='Realizar pedido' disabled style={{width:'100%'}}>Realizar pedido</button>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    else
    {
      return (
        <React.Fragment>
          <div className='card'>
            <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-6'>
                <h5 style={{marginLeft:'0.5em', marginTop:'0.5em', marginBottom:'0.5em'}}>Coste Total:</h5>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-6' style={{textAlign:'right'}}>
                <p style={{marginRight:'0.5em', marginTop:'0.5em', marginBottom:'0.5em'}}>{totalPrice} €</p>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-12' style={{width:'100%'}}>
                <button className='btn btn-primary' type='button' title='Realizar pedido' onClick={this.setPopUp} style={{width:'100%'}}>Realizar pedido</button>
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
        {
          this.totalBuy()
        }
      </React.Fragment>
    )
  }
}

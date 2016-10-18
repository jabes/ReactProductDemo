import React from 'react'

const ProductCard = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  render() {
    const {name} = this.props.data;
    const {price} = this.props.data;
    const {discount} = this.props.data;
    const {monthly} = this.props.data;
    const {images} = this.props.data;
    return (
      <div className="product-card">
        <h2>{name}</h2>
        <p>
          <span className="price">{`$${parseFloat(price - discount)}`}</span>
          {monthly ? <span className="monthly">{`/mo for ${monthly} months`}</span> : null}
          {discount ?
            <span className="discount">
              <strong>ON SALE!</strong>
              <em>{`SAVE $${discount} (Reg. $${price})`}</em>
            </span> : null}
        </p>
        <img src={images[0]}/>
      </div>
    )
  }

});

export default ProductCard

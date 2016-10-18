import React from 'react'
import '../stylesheets/components/product-price.scss'

const ProductPrice = React.createClass({

  propTypes: {
    product: React.PropTypes.object
  },

  render() {
    const {price} = this.props.product;
    const {discount} = this.props.product;
    const {monthly} = this.props.product;
    return (
      <p className="product-price">
        <span className="cost">{`$${parseFloat(price - discount)}`}</span>
        {monthly ? <span className="monthly">{`/mo for ${monthly} months`}</span> : null}
        {discount ?
          <span className="discount">
            <strong>ON SALE!</strong>
            <em>{`SAVE $${discount} (Reg. $${price})`}</em>
          </span> : null}
      </p>
    )
  }

});

export default ProductPrice

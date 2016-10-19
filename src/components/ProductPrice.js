import React from 'react'
import '../stylesheets/components/product-price.scss'

const ProductPrice = React.createClass({

  propTypes: {
    product: React.PropTypes.object
  },

  render() {
    const {regularPrice, salePrice} = this.props.product;
    const discountPrice = parseFloat(regularPrice - salePrice).toFixed(2);
    const isOnSale = regularPrice !== salePrice;
    return (
      <p className="product-price">
        <span className="cost">{`$${regularPrice}`}</span>
        {isOnSale ?
          <span className="discount">
            <strong>ON SALE!</strong>
            <em>{`SAVE $${discountPrice} (Reg. $${regularPrice})`}</em>
          </span> : null}
      </p>
    )
  }

});

export default ProductPrice

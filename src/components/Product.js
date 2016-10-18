import React from 'react'
import '../stylesheets/components/product.scss'

const Product = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  render() {
    const {name} = this.props.data;
    const {price} = this.props.data;
    const {discount} = this.props.data;
    // const {description} = this.props.data;
    const {images} = this.props.data;
    return (
      <div className="product">
        <h2>{name}</h2>
        <p>
          <span className="price">{`$${parseFloat(price - discount)}`}</span>
          {discount ?
            <span className="sale">
              <strong>ON SALE!</strong>
              <em>{`SAVE $${discount} (Reg. $${price})`}</em>
            </span> : null}
        </p>
        <img src={images[0]} />
      </div>
    )
  }

});

export default Product

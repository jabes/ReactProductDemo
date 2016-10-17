import React from 'react'
import '../assets/styles/components/product.scss'

const Product = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  render() {
    const {name} = this.props.data;
    const {price} = this.props.data;
    const {description} = this.props.data;
    const {images} = this.props.data;
    return (
      <div>
        <h2>{name} ${price}</h2>
        <p>{description}</p>
        <img src={images[0]} />
      </div>
    )
  }

});

export default Product

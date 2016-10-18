import React from 'react'
import ProductPrice from './ProductPrice'
import '../stylesheets/components/product-modal.scss'

const ProductModal = React.createClass({

  propTypes: {
    currentProduct: React.PropTypes.object
  },

  render() {
    let product = this.props.currentProduct;
    return product ? (
      <div className="product-modal">
        <div className="modal-window">
          <img src={product.images[0]}/>
          <h2>{product.name}</h2>
          <ProductPrice product={product}/>
          <p>{product.description}</p>
          <button className="btn yellow">BUY NOW</button>
        </div>
      </div>
    ) : null
  }

});

export default ProductModal

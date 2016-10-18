import React from 'react'
import ProductPrice from './ProductPrice'
import '../stylesheets/components/product-modal.scss'

const ProductModal = React.createClass({

  propTypes: {
    currentProduct: React.PropTypes.object,
    onModalClose: React.PropTypes.func
  },

  handleClick: function () {
    this.props.onModalClose(null);
  },

  render() {
    let product = this.props.currentProduct;
    return product ? (
      <div className="product-modal">
        <div className="modal-window">
          <button className="btn close-modal" onClick={this.handleClick}>✖</button>
          <img src={product.images[0]}/>
          <h2>{product.name}</h2>
          <ProductPrice product={product}/>
          <ul>
            <li>Model: {product.meta.model}</li>
            <li>SKU: {product.meta.sku}</li>
          </ul>
          <p>{product.description}</p>
          <button className="btn yellow">BUY NOW</button>
        </div>
      </div>
    ) : null
  }

});

export default ProductModal

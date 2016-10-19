import React from 'react'
import ProductPrice from './ProductPrice'
import '../stylesheets/components/product-modal.scss'

const ProductModal = React.createClass({

  propTypes: {
    currentProduct: React.PropTypes.object,
    onModalClose: React.PropTypes.func
  },

  handleClick() {
    this.props.onModalClose(null);
  },

  render() {
    const product = this.props.currentProduct;
    return product ? (
      <div className="product-modal">
        <div className="modal-window">
          <button className="btn close-modal" onClick={this.handleClick}>✖</button>
          <img src={product.highResImage}/>
          <h2>{product.name}</h2>
          <ProductPrice product={product}/>
          <ul>
            <li>Model: {product.modelNumber}</li>
            <li>SKU: {product.sku}</li>
            <li>UPC: {product.upcNumber}</li>
          </ul>
          <p>{product.longDescription || product.shortDescription}</p>
          <a href={product.productUrl} className="btn yellow">BUY NOW</a>
        </div>
      </div>
    ) : null
  }

});

export default ProductModal

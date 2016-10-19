import React from 'react'
import Jsonp from 'jsonp'
import ProductPrice from './ProductPrice'

const ProductCard = React.createClass({

  propTypes: {
    data: React.PropTypes.object,
    onProductCardClick: React.PropTypes.func
  },

  getInitialState() {
    return {
      product: {}
    };
  },

  componentDidUpdate(prevProps, prevState) {
    if (prevState && prevState.product.sku !== this.state.product.sku) {
      this.props.onProductCardClick(this.state.product);
    }
  },

  getProductDetails(sku) {
    let $ = this;
    const apiPath = `http://www.bestbuy.ca/api/v2/json/product/${sku}`;
    Jsonp(apiPath, function (error, response) {
      if (!error) {
        $.setState({
          product: response
        });
      }
    });
  },

  render() {
    const product = this.props.data;
    const {sku, name, highResImage} = product;
    const boundClick = this.getProductDetails.bind(this, sku);
    return (
      <div className="product-card" onClick={boundClick}>
        <h2>{name}</h2>
        <ProductPrice product={product}/>
        <img src={highResImage}/>
      </div>
    )
  }

});

export default ProductCard

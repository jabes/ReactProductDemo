import React from 'react'
import ProductPrice from './ProductPrice'

const ProductCard = React.createClass({

  propTypes: {
    data: React.PropTypes.object,
    onProductCardClick: React.PropTypes.func
  },

  handleClick: function (id) {
    this.props.onProductCardClick(id);
  },

  render() {
    const {name} = this.props.data;
    const {images} = this.props.data;
    const boundClick = this.handleClick.bind(this, this.props.data);
    return (
      <div className="product-card" onClick={boundClick}>
        <h2>{name}</h2>
        <ProductPrice product={this.props.data}/>
        <img src={images[0]}/>
      </div>
    )
  }

});

export default ProductCard

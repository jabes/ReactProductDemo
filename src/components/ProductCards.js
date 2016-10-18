import React from 'react'
import ProductCard from './ProductCard'
import '../stylesheets/components/product-cards.scss'

const ProductsCards = React.createClass({

  propTypes: {
    currentCategory: React.PropTypes.number,
    onProductCardClick: React.PropTypes.func
  },

  getData() {
    return require('./../data/products.json');
  },

  getProductCards() {
    const data = this.getData();
    var productCards = [];
    for (var i=0; i < data.length; i++) {
      if (this.props.currentCategory === data[i]['categoryId']) {
        productCards.push(<ProductCard
          key={i}
          data={data[i]}
          onProductCardClick={this.props.onProductCardClick}
        />);
      }
    }
    return productCards;
  },

  render() {
    const productCards = this.getProductCards();
    if (productCards.length === 0) {
      return (
        <p>There are no products available.</p>
      )
    }
    return (
      <div className="product-cards">
        {productCards}
      </div>
    )
  }

});

export default ProductsCards

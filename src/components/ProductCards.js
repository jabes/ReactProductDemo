import React from 'react'
import ProductCard from './ProductCard'
import '../stylesheets/components/product-cards.scss'

const ProductsCards = React.createClass({

  getData() {
    return require('./../data/products.json');
  },

  getProductCards() {
    const data = this.getData();
    var productCards = [];
    for (var i=0; i < data.length; i++) {
      productCards.push(<ProductCard key={i} data={data[i]} />);
    }
    return productCards;
  },

  render() {
    const productCards = this.getProductCards();
    return (
      <div className="product-cards">
        {productCards}
      </div>
    )
  }

});

export default ProductsCards

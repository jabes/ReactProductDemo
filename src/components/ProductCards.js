import React from 'react'
import ProductCard from './ProductCard'
import '../stylesheets/components/product-cards.scss'

const ProductsCards = React.createClass({

  propTypes: {
    currentCategory: React.PropTypes.number,
    onProductCardClick: React.PropTypes.func
  },

  getInitialState() {
    return {
      products: []
    };
  },

  componentDidMount() {
    this.getApiData();
  },

  getApiData() {
    const apiPath = 'http://www.bestbuy.ca/api/v2/json/search?categoryid=departments';
    window.fetch(apiPath).then(function (response) {
      this.setState({
        products: response
      });
    });
  },

  getProductCards() {
    var productCards = [];
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.props.currentCategory === this.state.products[i]['categoryId']) {
        productCards.push(<ProductCard
          key={i}
          data={this.state.products[i]}
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

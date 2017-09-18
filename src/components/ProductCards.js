import React from 'react'
import Jsonp from 'jsonp'
import ProductCard from './ProductCard'
import '../stylesheets/components/product-cards.scss'

const ProductsCards = React.createClass({

  propTypes: {
    currentCategory: React.PropTypes.object,
    onProductCardClick: React.PropTypes.func
  },

  getInitialState() {
    return {
      products: []
    };
  },

  componentDidMount() {
    this.getAllProducts();
  },

  componentDidUpdate(prevProps) {
    if (prevProps && prevProps.currentCategory !== this.props.currentCategory) {
      if (this.props.currentCategory) {
        this.getCategoryProducts(this.props.currentCategory.id);
      } else {
        this.getAllProducts();
      }
    }
  },

  getAllProducts() {
    let $ = this;
    const apiPath = 'https://www.bestbuy.ca/api/v2/json/search';
    Jsonp(apiPath, function (error, response) {
      if (!error) {
        $.setState({
          products: response.products
        });
      }
    });
  },

  getCategoryProducts(categoryId) {
    let $ = this;
    const apiPath = `https://www.bestbuy.ca/api/v2/json/search?categoryid=${categoryId}`;
    Jsonp(apiPath, function (error, response) {
      if (!error) {
        $.setState({
          products: response.products
        });
      }
    });
  },

  getProductCards() {
    var productCards = [];
    for (var i = 0; i < this.state.products.length; i++) {
      productCards.push(<ProductCard
        key={i}
        data={this.state.products[i]}
        onProductCardClick={this.props.onProductCardClick}
      />);
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

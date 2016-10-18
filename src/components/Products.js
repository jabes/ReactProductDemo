import React from 'react'
import Product from './Product'

const Products = React.createClass({

  getData() {
    return require('./../data/products.json');
  },

  getProducts() {
    const data = this.getData();
    var products = [];
    for (var i=0; i < data.length; i++) {
      products.push(<Product key={i} data={data[i]} />);
    }
    return products;
  },

  render() {
    const products = this.getProducts();
    return (
      <div className="products">
        {products}
      </div>
    )
  }

});

export default Products

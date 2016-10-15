/* eslint-disable no-console */

import React from 'react'

const Products = React.createClass({

  getData() {
    return require('./../data/products.json');
  },

  render() {
    const data = this.getData();
    console.log(data);
    return (
      <div>
        <h2>Product Page</h2>
      </div>
    )
  }

});

export default Products

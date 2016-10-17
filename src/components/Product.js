import React from 'react'

const Product = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  render() {
    const {name} = this.props.data;
    return (
      <div>{name}</div>
    )
  }

});

export default Product

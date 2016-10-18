import React from 'react'
import {Link} from 'react-router'

const Category = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  render() {
    const {id} = this.props.data;
    const {name} = this.props.data;
    return (
      <Link to="/" className={`category-${id}`}>{name}</Link>
    )
  }

});

export default Category;

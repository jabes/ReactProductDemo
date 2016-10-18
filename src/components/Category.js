import React from 'react'
import {Link} from 'react-router'
import '../stylesheets/components/category.scss'

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

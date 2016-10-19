import React from 'react'
import {Link} from 'react-router'

const Category = React.createClass({

  propTypes: {
    data: React.PropTypes.object,
    currentCategory: React.PropTypes.object,
    onCategoryClick: React.PropTypes.func
  },

  handleClick: function (category) {
    this.props.onCategoryClick(category);
  },

  render() {
    const category = this.props.data;
    const {id, name} = category;
    const boundClick = this.handleClick.bind(this, category);
    let isActive = this.props.currentCategory === category;
    return (
      <Link
        className={`category-${id} active-${isActive ? 'true' : 'false'}`}
        onClick={boundClick}
        to="/">{name}</Link>
    )
  }

});

export default Category;

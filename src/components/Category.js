import React from 'react'
import {Link} from 'react-router'

const Category = React.createClass({

  propTypes: {
    data: React.PropTypes.object,
    currentCategory: React.PropTypes.number,
    onCategoryClick: React.PropTypes.func
  },

  handleClick: function (id) {
    this.props.onCategoryClick(id);
  },

  render() {
    const {id} = this.props.data;
    const {name} = this.props.data;
    const boundClick = this.handleClick.bind(this, id);
    let isActive = this.props.currentCategory === id;
    return (
      <Link
        className={`category-${id} active-${isActive ? 'true' : 'false'}`}
        onClick={boundClick}
        to="/">{name}</Link>
    )
  }

});

export default Category;

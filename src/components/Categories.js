import React from 'react'
import Category from './Category'

const Categories = React.createClass({

  propTypes: {
    currentCategory: React.PropTypes.number,
    onCategoryClick: React.PropTypes.func
  },

  getData() {
    return require('./../data/categories.json');
  },

  getCategories() {
    const data = this.getData();
    var categories = [];
    for (var i = 0; i < data.length; i++) {
      categories.push(<Category
        key={i}
        data={data[i]}
        currentCategory={this.props.currentCategory}
        onCategoryClick={this.props.onCategoryClick}
      />);
    }
    return categories;
  },

  render() {
    const categories = this.getCategories();
    return (
      <nav>
        {categories}
      </nav>
    )
  }

});

export default Categories

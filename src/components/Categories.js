import React from 'react'
import Category from './Category'

const Categories = React.createClass({

  propTypes: {
    currentCategory: React.PropTypes.number,
    onCategoryClick: React.PropTypes.func
  },

  getInitialState() {
    return {
      categories: []
    };
  },

  componentDidMount() {
    this.getApiData();
  },

  getApiData() {
    const fetchUrl = require("fetch").fetchUrl;
    const apiPath = 'http://www.bestbuy.ca/api/v2/json/category/departments';
    fetchUrl(apiPath, function (error, meta, body) {
      if (!error) {
        this.setState({
          categories: body
        });
      }
    });
  },

  getCategories() {
    var categories = [];
    for (var i = 0; i < this.state.categories; i++) {
      categories.push(<Category
        key={i}
        data={this.state.categories[i]}
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

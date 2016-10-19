import React from 'react'
import Jsonp from 'jsonp'
import Category from './Category'

const Categories = React.createClass({

  propTypes: {
    currentCategory: React.PropTypes.object,
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
    let $ = this;
    const apiPath = 'http://www.bestbuy.ca/api/v2/json/category/departments';
    Jsonp(apiPath, function (error, response) {
      if (!error) {
        $.setState({
          categories: response['subCategories']
        });
      }
    });
  },

  getCategories() {
    var categories = [];
    for (var i = 0; i < this.state.categories.length; i++) {
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

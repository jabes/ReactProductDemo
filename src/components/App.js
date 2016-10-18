import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Categories from './Categories'
import ProductCards from './ProductCards'
import '../stylesheets/components/app.scss'

const App = React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  getInitialState() {
    return {
      currentCategory: 1
    };
  },

  categoryClickHandler(categoryId) {
    this.setState({
      currentCategory: categoryId
    });
  },

  render() {
    // const {children} = this.props;
    return (
      <div className="container">
        <Header/>
        <section className="content">
          <aside className="sidebar">
            <Categories
              currentCategory={this.state.currentCategory}
              onCategoryClick={this.categoryClickHandler}
            />
          </aside>
          <main className="body">
            <ProductCards currentCategory={this.state.currentCategory} />
          </main>
        </section>
        <Footer/>
      </div>
    )
  }

});

export default App

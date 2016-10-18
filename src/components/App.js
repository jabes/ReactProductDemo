import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Categories from './Categories'
import ProductCards from './ProductCards'
import ProductModal from './ProductModal'
import '../stylesheets/components/app.scss'

const App = React.createClass({

  // propTypes: {
  //   children: React.PropTypes.node
  // },

  getInitialState() {
    return {
      currentCategory: 1,
      currentProduct: null,
      menuOpen: false
    };
  },

  setCurrentCategory(categoryId) {
    this.setState({
      currentCategory: categoryId
    });
  },

  setCurrentProduct(product) {
    this.setState({
      currentProduct: product
    });
  },

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  },

  render() {
    return (
      <div className="container">
        <Header
          menuOpen={this.state.menuOpen}
          onHamburgerClick={this.toggleMenu}
        />
        <section className="content">
          <aside className={`sidebar menu-${this.state.menuOpen ? 'open' : 'closed'}`}>
            <Categories
              currentCategory={this.state.currentCategory}
              onCategoryClick={this.setCurrentCategory}
            />
          </aside>
          <main className={`body menu-${this.state.menuOpen ? 'open' : 'closed'}`}>
            <ProductCards
              currentCategory={this.state.currentCategory}
              onProductCardClick={this.setCurrentProduct}
            />
          </main>
        </section>
        <Footer/>
        <ProductModal
          currentProduct={this.state.currentProduct}
          onModalClose={this.setCurrentProduct}
        />
      </div>
    )
  }

});

export default App

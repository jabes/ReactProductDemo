import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Categories from './Categories'
import ProductCards from './ProductCards'
import ProductModal from './ProductModal'
import '../stylesheets/components/app.scss'

const App = React.createClass({

  getInitialState() {
    return {
      currentCategory: null,
      currentProduct: null,
      menuOpen: false
    };
  },

  setCurrentCategory(category) {
    this.setState({
      currentCategory: category
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
              currentProduct={this.state.currentProduct}
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

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
      currentCategory: 1,
      menuOpen: false
    };
  },

  setCurrentCategory(categoryId) {
    this.setState({
      currentCategory: categoryId
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
            <ProductCards currentCategory={this.state.currentCategory}/>
          </main>
        </section>
        <Footer/>
      </div>
    )
  }

});

export default App

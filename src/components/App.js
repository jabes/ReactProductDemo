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

  render() {
    // const {children} = this.props;
    return (
      <div className="container">
        <Header/>
        <section className="content">
          <aside className="sidebar">
            <Categories/>
          </aside>
          <main className="body">
            <ProductCards/>
          </main>
        </section>
        <Footer/>
      </div>
    )
  }

});

export default App

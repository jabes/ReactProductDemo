import React from 'react'
import Header from './Header'
import Footer from './Footer'

const App = React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    const {children} = this.props;
    return (
      <div>
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </div>
    )
  }

});

export default App

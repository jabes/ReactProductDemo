import React from 'react'
import {Link} from 'react-router'

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    const {children} = this.props;
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
        </ul>
        {children}
      </div>
    )
  }
});

export default App

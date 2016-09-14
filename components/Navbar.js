import React from 'react';
import { Link, browserHistory } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/web'>Web Development</Link>
        <Link to='/design'>Design</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    )
  }
}

export default Navbar;
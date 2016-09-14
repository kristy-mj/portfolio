import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
  }
}

export default App



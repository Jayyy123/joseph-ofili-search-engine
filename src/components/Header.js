import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {

  render() {
    return (
      <div className='header'>
          <div className='container'>
              <div className='logo'>
                <h1>Search Engine<span className='search'> 🔎 </span> </h1>
              </div>
              <div className='links'>
                  <div className='link' >
                    Home
                  </div>
                  <div className='link' >
                    About
                  </div>
                  <div className='link' >
                    History
                  </div>
              </div>
          </div>
      </div>

    )
  }
}

export default Header
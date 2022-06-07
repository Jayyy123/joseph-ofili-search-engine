import React, { Component } from 'react'
import '../styles/SearchbarUi.css'

export class SearchbarUi extends Component {
  render() {
    return (
        <div className='body'>
            <div className="search-box">
                <button className="btn-search">🔎</button>
                <input type="text" className="input-search" placeholder="Type to Search..." />
            </div>
        </div>
    )
  }
}

export default SearchbarUi
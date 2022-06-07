import React, { Component } from 'react'
import '../styles/SearchbarUi.css'

export class SearchbarUi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         search:'',
      }
    }

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value,
        })
    }

  render() {
      const { search } = this.state;
    return (
        <div className='body'>
            <div className="search-box">
                <button className="btn-search">🔎</button>
                <input value={search} onChange = {(e) => this.handleSearchChange(e)} type="text" className="input-search" placeholder="Type to Search..." />
            </div>
        </div>
    )
  }
}

export default SearchbarUi
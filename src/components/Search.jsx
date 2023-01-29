import React from 'react'

class Search extends React.Component {

  state = {
    search: ''
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
  }
  render() {
    return <div className="row">
      <div className="input-field col s12">
        <input id="search"
          placeholder="Search"
          className="validate"
          type="search"
          onChange={(e) => this.setState({ search: e.target.value })}
          value={this.state.search}
          onKeyDown={this.handleKey}
        />
        <label htmlFor="search"></label>
        <button onClick={() => this.props.searchMovies(this.state.search)} className="waves-effect waves-light btn">Search</button>
      </div>
    </div>

  }
}

export { Search }
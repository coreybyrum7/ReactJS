import React, { Component } from 'react'; //jsx to normal JS is needed below

class SearchBar extends Component {

  constructor(props) {
    super(props); //calls parent properties

    this.state = { term: '' }; //initializing state
  }

  render() {
    return (
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} //causes the render() function to be called again
          />
        </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

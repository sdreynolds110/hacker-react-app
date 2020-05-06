import React, { Component } from "react";


class Search extends Component {
    
    state = {
        searchValue: "",
        news: []
    };
    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = () => {
        var searchUrl = "http://hn.algolia.com/api/v1/search_by_date?tags=story";
            fetch(searchUrl)
                .then(response => response.json())
                .then(data => console.log(data));
    };

    render() {
        return(
            <div>
                <h1>Hacker News Algolia Search</h1>
                <input
                    name="text"
                    type="text"
                    placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                <button onClick={this.handleSearch}>Search</button>

                {this.state.story ? (
                    <ul>
                        {this.state.story.map((hits, index) => (
                        <li key={this.hits.title}>
                            <h1>{this.hits.title}</h1>
                        </li>
                        ))}
                    </ul>
                ) : (
                    <p>Search HN News API</p>
                )}
            </div>
        )
    }
}
export default Search;
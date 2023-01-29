import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Movies } from './components/Movies'
import React from 'react';
import { Preloder } from './components/Preloader';
import { Search } from './components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

export default class App extends React.Component {

  state = {
    searchValue: "",
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))      
      .catch((err) => {(console.error())})
  }

  searchMovies = (str) => {
    if (str.trim()) {
      this.setState({ loading: true })
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }
  };

  render() {
    const { movies, loading } = this.state

    return <div>
      <Header />
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ?

          <Preloder /> : <Movies movies={this.state.movies} />
        }
      </main>
      <Footer />
    </div>;
  }
}
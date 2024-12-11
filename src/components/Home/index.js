import {Component} from 'react'

import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  loading: 'LOADING',
  initial: 'INITIAL',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    movies: [],
  }

  componentDidMount() {
    this.getMovieVideos()
  }

  getMovieVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const API_KEY = '916c8a56fac61e240fbb44770fe2342b'
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      this.setState({apiStatus: apiStatusConstants.success})
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <div className="home-container">
        <Header />
      </div>
    )
  }
}

export default Home

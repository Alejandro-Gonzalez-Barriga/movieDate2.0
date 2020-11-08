import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import  LogInForm from "./components/login.js";
import  SignUpForm from "./components/signUp.js";
import  LoggedOut from "./components/loggedOut.js";
import Suggestions from "./components/suggestions.js";
import MovieRow from './components/MovieRow.js';
import StarComp from './components/stars.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output:[]
    }

    this.performSearch("pulp fiction")
  }

  performSearch(searchTerm) {
    //console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=f625a4c9c70738cb426587659396e88b&query=" + searchTerm
    $.ajax({
      url: urlString,
      contentType: 'application/json',
      success: (searchResults) => {
        //console.log("Fetched data successfully")
         //console.log("iiiiiiiiiiiiii "+typeof searchResults.results)
        const result = searchResults.results

        this.setState({output : result})
        // console.log("i am the movie id: "+result)

        var movieRows = []


        result.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows , output : searchResults})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {

    // Object.keys(output).map(function(key, index){
    //   console.log("i am a key : "+index);
    // })
    //console.log(typeof this.state.output);
    //console.log("iiiiiiiiiiiiiiiii"+ this.state.output[0]);
    return (

      <div>
        <NavLink to="/suggestions" >
          <button>Suggestions</button>
        </NavLink>
        <NavLink to="/signup" >
          <button>LogOut</button>
        </NavLink>


        <table style = {{
          backgroundColor: '#000',
          display: 'block',
          color: '#fff',
          paddingLeft: 16
        }}>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="100" src="favicon.png"/>
              </td>
              <td>
                <h1>Movie Date</h1>
              </td>
              <td width="8"/>
              <td>
                <img alt="app icon" width="100" src="tmdb logo.png"/>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}
export default App;

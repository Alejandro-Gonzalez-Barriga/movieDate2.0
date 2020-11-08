import React from 'react';
import {NavLink} from 'react-router-dom';


class Suggestions extends React.Component {
  render() {
    return (
      <div>
      <NavLink to="/home" >
        <button>Home</button>
      </NavLink>
      <NavLink to="/" >
        <button>LogOut</button>
      </NavLink>

        <h1>Aqui te sugerimos peliculas basado los gustos de ti y tu media naranja</h1>
        <h2>sample of GET request</h2>
        <h2>https://api.themoviedb.org/3/movie/680?api_key=f625a4c9c70738cb426587659396e88b&language=en-US</h2>
      </div>
    );
  }
  }
export default Suggestions;

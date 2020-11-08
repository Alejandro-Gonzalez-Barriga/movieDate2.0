import React from 'react'
import StarComp from './stars.js';


class MovieRow extends React.Component{
  render(){
    //console.log("this is id in mrow " + this.props.movie.id);
    const linkId = this.props.movie.id;
    //console.log(linkId);

    return  <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="80" src={this.props.movie.poster_src} />
          </td>
          <td>..
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.overview}</p>
            <StarComp linkId={linkId} />

          </td>
      </tr></tbody>
    </table>
  }
}

export default MovieRow;

import React from "react";

class Video extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="button-container">
            <a href="/" className="button">Startsida</a>
          </div>
        </nav>

	<div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="tabell">
          <table border="1">
            <tr>
              <th>Tabell</th>
              <th>Då</th>
              <th>Det</th>
            </tr>
            <tr>
              <td>var</td>
              <td>ett</td>
              <td>av</td>
            </tr>
            <tr>
              <td>kraven</td>
              <td>att</td>
              <td>implementera</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Video;

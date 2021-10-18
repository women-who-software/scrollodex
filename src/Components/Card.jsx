import React from "react";
import "./Card.scss";

function Card(props) {
  // add file path to image in JSON and use as a filter
  const filter = props.image;
  const cache = {};

  // use function to import static file paths
  function importAll(r) {
    r.keys().forEach((key) => {
      if (key === filter) {
        cache[key] = r(key);
      }
    });
  }

  importAll(require.context("../public", false, /\.(png|jpe?g|svg)$/));
  const filteredImage = Object.entries(cache).map(
    (module) => module[1].default
  );

  return (
    <div className={`cardContainer ${props.component}`}>
      <div className="card">
        <img className="imageContainer" src={filteredImage} alt={props.name} />
      </div>
      <div className="card">
        <div className="card-details">
          <h3 key={props.name}>{props.name}</h3>
          <p>{props.title}</p>
          {
            // Loop through all the labeled emails and create a <p> tag for
            // each one. Add a unique key so react doesn't get mad.
            Object.keys(props.emails || {}).map((label, idx) => (
              <p key={`e-${idx}`}>
                {props.emails[label]} ({label})
                <br />
              </p>
            ))
          }
          {
            // Do the same thing here for website values
            Object.keys(props.sites || {}).map((label, idx) => (
              <a key={`s-${idx}`} href={props.sites[label]}>
                {label != "work" ? label : `${props.sites[label]} (${label})`}
                <br />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Card;

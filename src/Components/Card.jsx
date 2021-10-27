import React from "react";
import "./Card.scss";

function Card(props) {
  console.log("here");
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
    <div className={`cardContainer ${props.className}`}>
      <div className="card">
        <img
          className="imageContainer"
          src={filteredImage}
          alt={props.data.name}
        />
      </div>
      <div className="card">
        <div className="card-details">
          <h3 key={props.data.name}>{props.data.name}</h3>
          <p>{props.data.title}</p>
          <p>{props.data.email}</p>
          {
            // Loop through all the labeled emails and create a <p> tag for
            // each one. Add a unique key so react doesn't get mad.
            Object.keys(props.data.emails || {}).map((label, idx) => (
              <p key={`e-${idx}`}>
                {props.data.emails[label]} ({label})
                <br />
              </p>
            ))
          }
          <div>
            {
              // Do the same thing here for website propss
              Object.keys(props.data.sites || {}).map((label, idx) => (
                <a key={`s-${idx}`} href={props.data.sites[label]}>
                  {label !== "work"
                    ? label
                    : `${props.data.sites[label]} (${label})`}
                  &nbsp;&nbsp;
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

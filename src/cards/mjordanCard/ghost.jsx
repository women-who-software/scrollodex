import React from "react";
import "./ghost.scss";

function GhostFriend() {
  return (
    <div id="ghost">
      <div className="hands right"></div>
      <div id="body">
        <div id="face">
          <div className="eyes right"></div>
          <div className="eyes left"></div>
        </div>
        <div className="ruffle"></div>
        <div className="ruffle"></div>
        <div className="ruffle"></div>
      </div>
      <div className="hands left"></div>
    </div>
  );
}

export default GhostFriend;

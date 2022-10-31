import React from "react";
import "./ghost.scss";

function GhostFriend() {
  return (
    <div id="ghost">
      <div class="hands right"></div>
      <div id="body">
        <div id="face">
          <div class="eyes right"></div>
          <div class="eyes left"></div>
        </div>
        <div class="ruffle"></div>
        <div class="ruffle"></div>
        <div class="ruffle"></div>
      </div>
      <div class="hands left"></div>
    </div>
  );
}

export default GhostFriend;

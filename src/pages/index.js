import React from "react";
import RaisingHand from "../assets/raising-hand";
// eslint-disable-next-line
import styles from "./styles.css";

export default () => (
  <div className="container">
    <RaisingHand />
    <div className="greeting">
      <h2>Hi!</h2>
      <p>
        I'm Dan Hinze, a musician and web
        developer newly relocated to Minneapolis. Before that, I was in Chicago, working at{" "}
        <a href="https://sproutsocial.com/">Sprout Social</a>, and playing sax/writing music with{" "}
        <a href="https://www.fayray.band/">Fay Ray</a>.
      </p>
      <p>
          I'm {" "}
          <a href="https://github.com/hinzed1127/personal-website">actively building out this site</a>, but{" "}
          in the meantime, feel free to <a href="mailto:dan.hinze.92@gmail.com">drop me a line</a>.
      </p>
    </div>
  </div>
);

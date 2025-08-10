import React from "react";
import Typewrite from "typewriter-effect";

function Type() {
  return (
    <Typewrite
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "Data Structures and Algorithms",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
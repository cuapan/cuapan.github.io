import React from "react";
import Bar from "./Bar";

const About = () => {
  return (
    <div>
      <Bar title={"About"} />
      <div className="container-fluid list-group list-group-flush scrollarea">
        <p>
          Cuapan App is a twitter-like social media where user can post a
          status.
        </p>
        <p>This app is my very first project developed with MERN Stack</p>
        <p>
          This app is developed by Taufiqurrahman Idrus{" "}
          <a href="https://github.com/taufiqidr">(taufiqidr)</a>{" "}
        </p>
        <p>The Tech stack this project are:</p>
        <ul>
          <li>
            <strong>Frontend:</strong> React, Bootstrap
          </li>
          <li>
            <strong>Backend:</strong> Express JS
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Runtime:</strong> Node JS{" "}
          </li>
          <li>
            <strong>Build Tool:</strong> Vite{" "}
          </li>
        </ul>
        <p>
          This app is still far from perfect. Some feature are still missing
          including:{" "}
        </p>
        <ul>
          <li>Profile Picture for user</li>
          <li>Like/favorite status system</li>
          <li>Searching system</li>
          <li>Post with image</li>
          <li>Etc.</li>
        </ul>
        <p>
          these missing feature probably will be implemented in my next project:{" "}
          <a href="#0">Tokofication</a>
        </p>
        <p className="text-center">
          Best Regards <br></br> <strong>@taufiqidr</strong>
        </p>
      </div>
    </div>
  );
};

export default About;

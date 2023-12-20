import React from "react";

function Portfolio() {
  return (
    <>
      <div className="center">
        <h1>Portfolio</h1>
      </div>

      <main>
        <div className="content">
          <h2>React Router Practice</h2>
          <p>
            color + route change when clicking on different colors
          https://mellow-fudge-ea611f.netlify.app/home
          </p>
        </div>

        <div className="content">
          <h2>React App Color</h2>
          <p>
            Color label changes when a circle is clicked without the app reloading
            https://bright-gecko-87a4af.netlify.app/
          </p>
        </div>
        <div className="content">
          <h2>Signup Practice</h2>
          <p>
            Basic signup page with authentication token
            https://sweet-pika-73be19.netlify.app/
          </p>
        </div>
        <div className="content">
          <h2>API Practice</h2>
          <p>
            Contact list grid pulling data from an API
            https://clinquant-shortbread-cbd75a.netlify.app/
          </p>
        </div>
        <div className="content">
          <h2>Capstone Project - GameNebula</h2>
          <p>
            Storefront for a Game store
            (add video demo)
          </p>
        </div>
        <div className="content">
          <h2>Personal website - Andrea Bourque</h2>
          <p>
            A personal website for my girlfriend, all styling done by me.
            https://abourque72.github.io/
          </p>
        </div>
      </main>
    </>
  );
}

export default Portfolio;

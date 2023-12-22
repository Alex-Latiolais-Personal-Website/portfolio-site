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
          </p>
          <a href={"https://mellow-fudge-ea611f.netlify.app/"} target="new">Link</a>
        </div>

        <div className="content">
          <h2>React App Color</h2>
          <p>
            Color label changes when a circle is clicked without the app reloading
          </p>
          <a href={"https://bright-gecko-87a4af.netlify.app/"} target="new">Link</a>
        </div>
        <div className="content">
          <h2>Signup Practice</h2>
          <p>
            Basic signup page with authentication token
          </p>
          <a href={"https://sweet-pika-73be19.netlify.app/"} target="new">Link</a>
        </div>
        <div className="content">
          <h2>API Practice</h2>
          <p>
            Contact list grid pulling data from an API
          </p>
          <a href={"https://clinquant-shortbread-cbd75a.netlify.app/"} target="new">Link</a>
        </div>        
        <div className="content">
          <h2>Stranger's Things</h2>
          <p>
            An online marketplace website.
          </p>
          <a href={"https://chimerical-croissant-6ce3d2.netlify.app/"} target="new">Link</a>
        </div>
        <div className="content">
          <h2>Capstone Project - GameNebula</h2>
          <p>
            Storefront for a Game store! I did most of the styling, as well as converting basic HTML components to MUI. All done with react, as well as an SQL database.
          </p>
          <iframe src="https://www.youtube.com/embed/2hg9sSgeASY?si=vCbkTWevnsYMVtuv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="content">
          <h2>Personal website - Andrea Bourque</h2>
          <p>
            A personal website for my girlfriend, all styling done by me.
          </p>
          <a href={"https://abourque72.github.io/"} target="new">Link</a>
        </div>

        </main>
        <div className="center">
          <h1>Python</h1>
        </div>
        <main>
        <div className="content">
          <h2>Alphabet w/ Python turtle</h2>
          <p>
            Self explanitory! The alphabet written in python using Turtle.
          </p>
          <a href={"https://replit.com/@al174017/turtle-alphabet?v=1"} target="new">Link</a>
        </div>
        <div className="content">
          <h2>Holiday Card</h2>
          <p>
            A small Christmas card made with python + tkinter.
            
          </p>
          <a href={"https://replit.com/@al174017/holiday-card?v=1"} target="new">Link</a>
        </div>
        <div className="content">
          <h2>Final Project (CS I)</h2>
          <p>
            A clicker game based on AdVenture Capitalist making use of loops.
          </p>
          <a href={"https://replit.com/@al174017/final?v=1"} target="new">Link</a>
        </div>
        <div className="content">
          <h2>Midterm Project (CS I)</h2>
          <p>
            A silly choose your own adventure using loops.
          </p>
          <a href={"https://replit.com/@al174017/midterm?v=1"} target="new">Link</a>
        </div>
      </main>
    </>
  );
}

export default Portfolio;

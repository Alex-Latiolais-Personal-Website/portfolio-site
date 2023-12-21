import React from "react";

function About() {
  return (
    <>
      <div className="center">
        <h1>About Me</h1>
      </div>
      <main>
        <div className="content">
          <h2>Engineering</h2>
          <p>
            I was one of those kids constantly pulling toys apart, trying to see
            how they worked. I was facinated by how much functionality could be
            put into a little plastic doohicky! A natural next step as I grew{" "}
            <i>much</i> older was engineering. So, of course, my main aspiration
            ended up being to become a computer engineer! I was never truly sure
            what type of computer engineering I wanted to persue in the end, so
            I took any computer related course I could get my hands on.
          </p>
        </div>

        <div className="content">
          <h2>Coding</h2>
          <p>
            Computer software is fantastically beautiful, even though it is
            enraging at times. As one could imagine, it's much easier for a
            public high school to get their hands on programming tools than all
            the materials needed to teach extensive hardware engineering
            courses. So, despite my best efforts (checking boxes on a schedule
            request), most of my electives in high school were software related.
            This is totally fine in my opinion, because I decided to take a web
            design course in my freshman year and LOVED IT!! I would've taken up
            to web III, but the teacher had retired. Anyway, I've taken courses
            in HTML, CSS, Python, and eventually C++ at LSU and JavaScript in my
            Fullstack Academy bootcamp! Coding is just fun to me!! That dopamine
            rush when something finally starts working absolutely cannot be
            beat.
          </p>
        </div>
        
        
        <div className="content">
          <h2>Schools</h2>
          <p>
            I was born and raised in Baton Rouge, Louisiana, so I pretty much
            stayed in the public school system here! I went to Westdale Heights
            Academic Magnet for elementary school, and most of my classmates
            joined me in attending Sherwood Middle Academic Magnet, and most of
            THOSE classmates joined me in attending Baton Rouge Magnet High
            School, and most of THOOOSE classmates went to Louisiana State
            University! Naming every school I have attended since the ripe age
            of 5 sounds redundant, I know, but I believe it goes to show how
            much of a strong and tight knit community I've grown up with.
          </p>
        </div>

        <div className="content">
          <h2>Education</h2>
          <p>
            I've done enough rambling about my schools, here are all the fun
            classes I've taken related to my career in tech!
          </p>
          <h3>Sherwood Middle</h3>
          <ul>
            <li>Computer Science (Literacy, Microsoft)</li>
            <li>Keyboarding</li>
            <li>Game Design</li>
            <li>Video Editing</li>
          </ul>
          <h3>Baton Rouge High</h3>
          <ul>
            <li>Web Design I</li>
            <li>Web Design II</li>
            <li>Robotics I</li>
            <li>Media arts I</li>
            <li>Media arts II</li>
            <li>Computer Science I (Python)</li>
            <li>Drafting I (Auto CAD basics)</li>
          </ul>
          <h3>Louisiana State University</h3>
          <ul>
            <li>CSC 1253 (C++)</li>
            <li>EE 1810 (Circuits)</li>
          </ul>
          <h3>Fullstack Academy</h3>
          <ul>
            <li>Web Development Bootcamp</li>
          </ul>
        </div>
        <div className="content">
          <h2>Certifications</h2>
          <p>Here are all the certifications I have recieved!</p>
          <h3>Baton Rouge High</h3>
          <ul>
            <li>CIW Web Development - 2020</li>
            <li>Customer Service and Sales - 2021</li>
            <li>Acklnowledgements:</li>
            <ul>
              <li>CIW Internet Business - 2019</li>
              <li>CIW Website Development - 2020</li>
              <i>Note: These are awarded by teachers</i>
            </ul>
          </ul>

          <h3>Fullstack Academy</h3>
          <ul>
            <li>Web Development - 2023</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default About;

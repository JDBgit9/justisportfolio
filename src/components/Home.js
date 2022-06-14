import React from "react";
import "./Home.css";

// Home

function Home() {
  return (
    <div>
      <h4>About Me</h4>
      <div className="wrapper">
        <div className="container-mt-4">
          <div className="row">
            <div className="col-md-9-bg-white"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="./image/portfolioicon.jpg"
              style={{ width: "100%" }}
              className="main-pic"
              alt="coder"
            />
          </div>
      
          <section>
            <div className="col-sm-9">
              <p>
                {" "}
                Hi, I'm James and I am a certified Full-Stack Web Developer who
                is a graduate of the University of Central Florida with a
                certificate degree in Coding. I have worked on projects that
                require extensive knowledge of HTML, CSS, JS, Bootstrap,
                Node.js, mySQl, NoSQL, Dbeaver, Mongodb, Sequelize, Yarn,
                Heroku, express, REACTjs, and more. You can view examples of my
                work in the portfolio tab on the top right corner of this page.
                I am excited to see where this journey will take me and I am
                honored to be a part of your team.
              </p>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <div class="container-fluid badger">
            <div className="col-sm-4 badge">
              <img
                src="./image/digitalbadge.png"
                style={{ alignItems: 'center' }}
                class="left"
                alt="coder badge certification"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

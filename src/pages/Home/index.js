import React, { useEffect, useState } from "react";
import "./style.css";
import Layout from "../../components/Layout";
import UserIcon from "../../images/svgs/user.svg";
import ilustration from "../../images/svgs/ilustration.svg";

export default function Home() {
  return (
    <Layout>
      <div className="homeContainer">
        <div className="wrapper">
          <div className="left">
            <h1 className="webDev">Web Developer</h1>
            <h1 className="myName">
              <img src={UserIcon} alt="user icon" />
              Stiven Fortes
            </h1>
            <p className="intro">
              “You can’t connect the dots looking forward; you can only connect
              them looking backwards. So you have to trust that the dots will
              somehow connect in your future.” ― Steve Jobs
              <br />
              {/* <br />I am currently working as a front end web developer at
              Mindelo. I'm also at the last year of my computer science course,
              where i studied a variety of things like: Machine Learning, Mobile
              and Web Development , and 3D Modeling, to name a few. I consider
              myself a self learner as i am constantly striving to learn new
              things (i am currently studding OpenCv and NodeJs). All of this
              because i really like to be involved with everything about
              technologies. */}
            </p>
            <div className="Buttons">
              <button>Contact</button>
              <button id="pf_home">Portfolio</button>
            </div>
          </div>
          <div className="right">
            <img src={ilustration} alt="build responsive design" width="100%" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

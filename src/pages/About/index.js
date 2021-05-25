import React from "react";
import "./about.css";
import Layout from "../../components/Layout";

import UserIcon from "../../images/svgs/user.svg";
import Guy from "../../images/svgs/guy.svg";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneSquare,
  FaAddressCard,
  FaMailchimp,
} from "react-icons/fa";

export default function About() {
  return (
    <Layout>
      <div className="aboutContainer">
        <div className="wrappHero">
          <section className="container" style={{width: '90%'}}>
            <div className="hero">
              <h1 className="webDev">Stiven Fortes</h1>
              <h1 className="myName name2">Based in Mindelo, Cape Verde</h1>
              <p className="intro">
                Hello! I'm <span>Stiven Fortes</span> and I am a Web Developer,
                based in Mindelo, Cape Verde. I enjoy working on{" "}
                <span>usable, clean and practical</span> web sites.
              </p>
            </div>
            <div className="callToAction">
              <div>
                <FaPhoneSquare fontSize="25px" />
                (+238) 981-77-68
              </div>
              <div>
                <FaAddressCard fontSize="25px" />
                Mindelo, Cape Verde
              </div>
              <div>
                <a
                  className="inconsLink"
                  href="https://github.com/stivifortes"
                  target="_blank"
                >
                  <FaGithub fontSize="25px" />
                  https://github.com/stivifortes
                </a>
              </div>
              <div>
                <a
                  className="inconsLink"
                  href="https://www.linkedin.com/in/stivenfortes96/"
                  target="_blank"
                >
                  <FaLinkedin fontSize="25px" />
                  https://linkedin.in/stivifortes
                </a>
              </div>
              <div>
                <FaMailchimp fontSize="25px" />
                stivenfortes96@gmail.com
              </div>
            </div>
          </section>
        </div>
        <div className="wrappHero">
          <section className="container" style={{ alignItems: "start" }}>
            <div className="hero" style={{ margin: "0px" }}>
              <img src={Guy} alt="" width="450px" />
            </div>
            <div className="education">
              <div className="webDev" style={{ marginBottom: "20px" }}>
                Resume
              </div>
              <div style={{ color: "#17a4cf", fontSize: "18px" }}>
                Front-end Web Developer, Devgo Lda, 2020 - Present
                <ul>
                  <li>Website/WebApp development</li>
                  <li>Languages: JavaScript(ReactJs), Php</li>
                  <li>Git- Version Control</li>
                </ul>
              </div>
              <div style={{ color: "#17a4cf", fontSize: "18px" }}>
                Internship, Unimindelo, January - Febuary 2020
                <ul>
                  <li>Network maintenance</li>
                  <li>Hardware Support</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

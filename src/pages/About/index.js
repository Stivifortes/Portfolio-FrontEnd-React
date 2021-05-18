import React from "react";
import "./style.css";
import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="aboutContainer">
        <section className="container">
          <div className="hero">
            <h2>Stiven Fortes - Computer Science</h2>
            <p>
              <i>
                “You can’t connect the dots looking forward; you can only
                connect them looking backwards. So you have to trust that the
                dots will somehow connect in your future.”
              </i>{" "}
              ― Steve Jobs
            </p>
          </div>
          <div className="callToAction">
            <button>Contact Me</button>
          </div>
        </section>
        <section className="info">
          <div>
            <h3>Personal Info</h3>
            <div className="personal">
              <div>+2389817768</div>
              <div>Mindelo, Cape Verde</div>
              <div>stivenfortes96@gmail.com</div>
              <div>https://github.com/stivifortes</div>
            </div>
          </div>
          <div>
            <h3>Education</h3>
            <div className="education">
              <div>Computer Science - University of Mindelo</div>
              <div>React Youtube Tutorial</div>
              <div>MernStack - Udemy Course</div>
              <div>High School - ETJV</div>
            </div>
          </div>
        </section>
        <section className="last">
          <button>See My Projects</button>
          <p>
            Lorem ipsum dolorus ipsal mendium Lorem ipsum dolorus ipsal mendium
          </p>
        </section>
      </div>
    </Layout>
  );
}

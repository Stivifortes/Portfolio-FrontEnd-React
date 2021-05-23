import React from "react";
import "./about.css";
import Layout from "../../components/Layout";

import UserIcon from '../../images/svgs/user.svg'
import fakeImg from '../../images/logo.jpg'

export default function About() {
  return (
    <Layout>
      <div className="aboutContainer">
        <div className="wrappHero">
          <section className="container">
            <div className="hero">
              <p className="webDev">Stiven Fortes</p>
              <h1 className="myName name2">Based in Mindelo, Cape Verde</h1>
              <p className="intro">
                        Hello! I'm <span>Stiven Fortes</span> and I am a Web Developer, based in Mindelo, Cape Verde.
                        I enjoy working on <span>usable, clean and practical</span> web sites.
                        </p>
            </div>
            <div className="callToAction">
                <div>
                  <img src={UserIcon} alt="" />
                  (+238) 981-77-68
                </div>
                <div>
                  <img src={UserIcon} alt="" />
                  Mindelo, Cape Verde</div>
                <div>
                  <img src={UserIcon} alt="" />
                  stivenfortes96@gmail.com</div>
                <div>
                  <img src={UserIcon} alt="" />
                  https://github.com/stivifortes</div>
                <div>
                  <img src={UserIcon} alt="" />
                  https://linkedin.in/stivifortes</div>
            </div>
          </section>
        </div>
        <div className="wrappHero">
          <section className="container" style={{alignItems: 'start'}}>
            <div className="hero" style={{margin: '0px'}}>
              <img src={fakeImg} alt=""  width='420px'/>
            </div>
            <div className="education">
            <div className='webDev' style={{ marginBottom: '20px'}}>Education</div>
              <div style={{color: '#737677'}}>Computer Science - University of Mindelo</div>
              <div style={{color: '#737677'}}>React Youtube Tutorial</div>
              <div style={{color: '#737677'}}>MernStack - Udemy Course</div>
              <div style={{color: '#737677'}}>High School - ETJV</div>
            </div>
          </section>
        </div>
        
      </div>
    </Layout>
  );
}

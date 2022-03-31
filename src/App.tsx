import React from 'react';
import './App.scss';
import github from "./images/github.svg";
import twitter from "./images/twitter.svg";
import projlist from './projlist';
import filecon from "./images/file.svg"
import profilepic from './images/profile.png';
import profilelink from './profilelink'
//import Acrylic from 'react-acrylic-ts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Background">
        <div className="ocean">
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
        </div>
      </div>
        <img src={profilepic} className="Profile-pic" alt="profile" />
        <h1>박용준</h1>
        <p>편리한 세상을 꿈꾸는 개발자</p>
        <ul className="linklist">
          <li><p><a href={profilelink.github}><img src={github} className="linkimg" alt="github icon" /></a></p></li>
          <li><p><a href={profilelink.twitter}><img src={twitter} className="linkimg" alt="twitter icon" /></a></p></li>
          <li><p><a href={profilelink.blog}>🌐</a></p></li>
          <li><a href="mailto: yongjun042@gmail.com">📧</a></li>
        </ul>
      </header>
      <div className="uts">
        <section>
          <div className="introduction">
            <h2>사용 언어</h2>
            <p>JS, TS, C#, C++, Python, SQL, JAVA ...</p>
            <h2>학력</h2>
            <h3>동국대학교 서울캠퍼스</h3>
            <p>컴퓨터공학과 전공 2015~2022.03</p>
            <p>2020 UC Sand Diego Extension 국제교류학생</p>
            <p>바이오인포매틱스랩 학부연구생</p>
            <p> </p>
            <h2>수상경력</h2>
            <p>2016 ACM-ICPC(ACM International Collegiate Programming Contest) Daejeon Regional Final Honorable Mention #77</p>
            <p>2021년 하계 한국정보기술학회 대학생논문경진대회 동상</p>
          </div>
        </section>
        <section>
          <div className="Project-wrap">
            <h2>프로젝트</h2>
            <div className="Project-list">
              {
                projlist.map(proj => (
                  <div className="Card">
                  <img className="Card-img" src={proj.imgUrl ? proj.imgUrl : filecon} alt={proj.altText ? proj.altText : "no img"} />
                  <div className="Card-overlay">
                    <div className="Card-content">
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                    <p className="lang">{proj.lang}</p>
                    <p>{proj.repoLink ? <a href={proj.repoLink}>🔗repo</a>: " "}
                    {proj.etc ? proj.etc:null}</p>
                    </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
//<div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default App;

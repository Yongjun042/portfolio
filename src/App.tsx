import React from 'react';
import './App.scss';
import github from "./images/github.svg";
import twitter from "./images/twitter.svg";
import projlist from './projlist';
import filecon from "./images/file.svg"
import profilepic from './images/profile.png';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <div className="ocean">
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
        </div>
      </div>
      <header className="App-header">
        <img src={profilepic} className="Profile-pic" alt="profile" />
        <h1>박용준</h1>
        <p>편리함을 주고싶은 개발자</p>
        <ul className="linklist">
          <li><a href="https:github.com/Yongjun042"><img src={github} className="linkimg" alt="github icon" /></a></li>
          <li><a href="https:twitter.com/Yongjun042"><img src={twitter} className="linkimg" alt="github icon" /></a></li>
          <li><a href="https:yongjun042.github.io">🌐</a></li>
          <li><a href="mailto: yongjun042@gmail.com">📧</a></li>
        </ul>
      </header>
      <div>
        <section>
          <div className="introduction">
            <h2>사용 언어</h2>
            <p>C#, C++, JS, TS, Python, SQL</p>
            <h2>학력</h2>
            <p>동국대학교 서울캠퍼스</p>
            <p>컴퓨터공학과 전공 2015~2021(예정)</p>
            <h2>수상경력</h2>
            <p>2016 ACM-ICPC(ACM International Collegiate Programming Contest) Daejeon Regional Final Honorable Mention</p>
          </div>
        </section>
        <section>
          <div className="Project-wrap">
            <h2>프로젝트</h2>
            <div className="Project-list">
              {
                projlist.map(proj => (
                  <div className="Card">
                  <img className="Card-img" src={proj.imgUrl ? proj.imgUrl : filecon} alt={proj.altText} />
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
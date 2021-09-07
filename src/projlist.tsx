import phill from './images/phill.png';
import ema from './images/emaplayer.png';
import carseg from './images/carseg.png';
import quantry from './images/quantry.png';
import solid from './images/solid.png';
import modernf from './images/modernf.png';
import discharge from './images/discharge.png';
import {ReactElement} from 'react';

const projlist: {title: string, desc:string, imgUrl: '.png'|string, altText: string, repoLink:string, lang:string, etc?:ReactElement}[] =[
    {title:"알약 검색 도우미",
    desc:"알약 특징을 추출해 검색을 쉽게 해주는 프로그램",
    imgUrl:phill, 
    altText: "phill analyzed", 
    repoLink:"https://github.com/Yongjun042/HCITeam2",
    lang:""
    },
    {title:"Emaplyaer",
    desc:"에마에게 소원을! 블루레이 파일 재생용 플레이어",
    imgUrl:ema, 
    altText: "Emaplayer playing video", 
    repoLink:"https://github.com/Yongjun042/EmaPlayer",
    lang:" "
    },
    {title:"QwantryDev-website",
    desc:"웹사이트 데모 제작 참여",
    imgUrl:quantry, 
    altText: "blurred website", 
    repoLink:"",
    lang:"ﯤ  "
    },
    {title:"Part of Car Segmentation",
    desc:"자동차 부품 분할 AI",
    imgUrl:carseg, 
    altText: "segmented result", 
    repoLink:"https://github.com/CSID-DGU/2020-2-CECD1-Turing-6",
    lang:" "
    },
    {title:"TagReplacer",
    desc:"가사편집 프로그램",
    imgUrl:"", 
    altText: "no img", 
    repoLink:"https://github.com/Yongjun042/TagReplacer",
    lang:" "
    },
    {title:"알고리즘 안내 사이트",
    desc:"소프트웨어공학개론 팀 프로젝트",
    imgUrl:"", 
    altText: "no img", 
    repoLink:"",
    lang:"   "
    },
    {title:"Solid Pod SNS",
    desc:"분산형 저장소 SNS",
    imgUrl:solid, 
    altText: "sns post page", 
    repoLink:"https://github.com/CSID-DGU/2019-1-OSSP1-Chobo-5",
    lang:"ﯤ  "
    },
    {title:"TagLyrics",
    desc:"네이버 블로그 가사 크롤링, 태그편집",
    imgUrl:"", 
    altText: "no img", 
    repoLink:"",
    lang:" "
    },
    {title:"modern-fluent",
    desc:"지킬 테마",
    imgUrl:modernf, 
    altText: "theme main page", 
    repoLink:"https://github.com/Yongjun042/modern-fluent",
    lang:"  ",
    etc:<a href="https://yongjun042.github.io/modern-fluent/">🔗샘플</a>
    },
    {title:"전역일 계산기",
    desc:"UWP 앱",
    imgUrl: discharge, 
    altText: "app shows about military service ", 
    repoLink:"",
    lang:"  ",
    etc:<a href="https://www.microsoft.com/ko-kr/p/%EC%A0%84%EC%97%AD%EC%9D%BC-%EA%B3%84%EC%82%B0%EA%B8%B0/9n321jjsmlvb">🔗스토어</a>
    }
];

// {title:"",
// desc:"",
// imgUrl:"", 
// altText: "", 
// repoLink:""
// }

export default projlist;
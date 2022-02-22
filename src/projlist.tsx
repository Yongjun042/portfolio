import phill from './images/phill.png';
import ema from './images/emaplayer.png';
import carseg from './images/carseg.png';
import quantry from './images/quantry.png';
import solid from './images/solid.png';
import modernf from './images/modernf.png';
import discharge from './images/discharge.png';
import iso from './images/iso.png';
import rat from './images/rat.png';
import todo from './images/todo.png';
import eumdle from './images/eumdle.png';
import {ReactElement} from 'react';

const projlist: {title: string, desc:string, imgUrl?: '.png', altText: string, repoLink:string, lang:string, etc?:ReactElement}[] =[
    {title:"음들",
    desc:"2음절 초,중,종성으로 나뉘어진 워들 글자 퍼즐",
    imgUrl:eumdle, 
    altText: "todo list", 
    repoLink:"https://github.com/Yongjun042/eumdle",
    lang:" ﯤ  ",
    etc:<a href="https://eumdle.pages.dev/">🔗데모</a>
    },
    {title:"Solid-Todo",
    desc:"분산형 저장소 Solid Pod을 이용한 Todo 앱",
    imgUrl:todo, 
    altText: "todo list", 
    repoLink:"https://github.com/Yongjun042/todoshare",
    lang:" ﯤ  ",
    etc:<a href="https://yongjun042.github.io/todoshare/">🔗데모</a>
    },
    {title:"React-Acrylic-Ts",
    desc:"React-Acrylic 의 Typerscript 버전",
    imgUrl:rat, 
    altText: "partial blurred", 
    repoLink:"https://github.com/Yongjun042/react-acrylic-ts",
    lang:" ﯤ",
    etc:<a href="https://yongjun042.github.io/react-acrylic-ts/">🔗데모</a>
    },
    {title:"MDN 문서 번역",
    desc:"Accessibility_inspector, Simulation, Using Media Queries for Accessibility 페이지 번역",
    altText: "", 
    repoLink:"https://github.com/mdn/translated-content/pull/1994",
    lang:""
    },
    {title:"IsoFileExtension",
    desc:"윈도우용 .iso파일 썸네일 확장 프로그램",
    imgUrl:iso, 
    altText: "iso file with thumbnail", 
    repoLink:"https://github.com/Yongjun042/IsoFileExtension",
    lang:" "
    },
    {title:"알약 검색 도우미",
    desc:"사진에서 알약 특징을 추출해 검색을 쉽게 해주는 프로그램",
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
    altText: "", 
    repoLink:"https://github.com/Yongjun042/TagReplacer",
    lang:" "
    },
    {title:"알고리즘 안내 사이트",
    desc:"소프트웨어공학개론 팀 프로젝트",
    imgUrl:"", 
    altText: "", 
    repoLink:"",
    lang:"   "
    },
    {title:"Solid Pod SNS",
    desc:"분산형 저장소 SNS",
    imgUrl:solid, 
    altText: "sns post page", 
    repoLink:"https://github.com/CSID-DGU/2019-1-OSSP1-Chobo-5",
    lang:" ﯤ  "
    },
    {title:"TagLyrics",
    desc:"네이버 블로그 가사 크롤링, 태그편집",
    imgUrl:"", 
    altText: "", 
    repoLink:"https://github.com/Yongjun042/TagLyrics",
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
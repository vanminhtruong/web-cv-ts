const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-CAo45MjD.js","assets/theme-BeOweZqK.js","assets/vendor-1p1qY6MK.js","assets/color-2p_dXya-.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-toast-jG2HNJHr.css","assets/HomeView-A99EN86d.js","assets/HomeView-CRwb-ZLO.css","assets/SkillsView-CbHNiDTj.js","assets/ExperienceView-DZAERyNS.js","assets/ContactView-C6Q7FrNz.js"])))=>i.map(i=>d[i]);
import { s as src_default } from "./vendor-toast-BV7TAAOY.js";
import { d as defineComponent, b as createBlock, v as openBlock, w as withCtx, y as createVNode, u as unref, R as RouterView, z as defineAsyncComponent, A as createRouter, B as createWebHashHistory, C as createI18n, p as createApp, D as createPinia } from "./vendor-1p1qY6MK.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/web-cv-ts/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p$1) => Promise.resolve(p$1).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const MainLayout = defineAsyncComponent(() => __vitePreload(() => import("./MainLayout-CAo45MjD.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(MainLayout), null, {
        default: withCtx(() => [
          createVNode(unref(RouterView))
        ]),
        _: 1
      });
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-df135238"]]);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => __vitePreload(() => import("./HomeView-A99EN86d.js"), true ? __vite__mapDeps([6,1,2,4,5,7]) : void 0)
  },
  {
    path: "/skills",
    name: "skills",
    component: () => __vitePreload(() => import("./SkillsView-CbHNiDTj.js"), true ? __vite__mapDeps([8,1,2,4,5]) : void 0)
  },
  {
    path: "/experience",
    name: "experience",
    component: () => __vitePreload(() => import("./ExperienceView-DZAERyNS.js"), true ? __vite__mapDeps([9,3,2,4,5]) : void 0)
  },
  {
    path: "/contact",
    name: "contact",
    component: () => __vitePreload(() => import("./ContactView-C6Q7FrNz.js").then((n) => n.C), true ? __vite__mapDeps([10,3,2]) : void 0)
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
const common$5 = { "backToTop": "Back to top" };
const app$6 = { "title": "Personal CV", "language": "English" };
const nav$5 = { "home": "Home", "about": "About", "skills": "Skills", "experience": "Experience", "education": "Education", "projects": "Projects", "contact": "Contact", "downloadCV": "Download CV", "links": "Links", "connect": "Connect" };
const home$5 = { "greeting": "Hello, I'm", "role": "Intern ReactJS", "objective": "Objective", "shortTermTitle": "Short-term Goal", "longTermTitle": "Long-term Goal", "shortTermGoal": "To become a junior Full Stack Web Developer within the next year.", "longTermGoal": "To advance to a senior Full Stack Web Developer role within the next five years.", "downloadCV": "Download CV", "contactMe": "Contact Me", "avatar": "TVM", "viewCV": "View CV" };
const about$5 = { "title": "About Me", "content": "I am a final-year Information Technology student with a strong passion for programming, particularly in web development using modern frameworks like ReactJS. I completed a 3-month internship at CY Vietnam Software Development Co., Ltd., where I gained valuable hands-on experience in developing and optimizing web applications using ReactJS. Additionally, I interned at Nacencom Technology Joint Stock Company, which further enhanced my practical skills and experience in the IT field. I am eager to apply my knowledge and continue honing my programming skills in a professional working environment.", "description": "I am a dedicated web developer with a passion for creating innovative solutions. I enjoy working on challenging projects and continuously learning new technologies.", "personalInfo": "Personal Information", "name": "Name", "age": "Age", "email": "Email", "phone": "Phone", "address": "Address", "addressValue": "Hoang Mai district, Hanoi", "languages": "Languages" };
const skills$5 = { "title": "My Skills", "backEnd": "Back End", "soft": "Soft Skills", "languages": "Programming Languages", "frontEnd": "Front End", "tools": "Tools & Technologies", "aiTools": "AI Tools", "course1": "Object-Oriented Programming (A)", "course2": "Data Structures and Algorithms (A)", "course3": "Relational Database (A)" };
const experience$5 = { "title": "Work Experience", "present": "Present", "responsibilities": "Responsibilities", "period1": "01/11/2024 - 01/01/2025", "date1": "November 2024 - January 2025", "company1": "CY Vietnam Software Development Co., Ltd.", "position1": "Frontend Developer (VueJS)", "department1": "Front End Development", "responsibility1": "Utilized VueJS to build user interfaces and implemented features such as order management, delivery status notifications, and VNPay-integrated online payment.", "responsibility2": "Used Vue Router to handle navigation and optimized the application for user experience.", "responsibility3": "Improved user experience and resolved issues based on feedback from the QA team.", "period2": "01/01/2024 - 05/03/2024", "date2": "January 2024 - March 2024", "company2": "Nacecomm Technology Joint Stock Company", "position2": "Full-stack Web Developer (ReactJS, Laravel)", "department2": "Library Management System", "responsibility4": "Developed a library management system as a personal project.", "responsibility5": "Implementation of Controller, Model for a website using the MVC architectural pattern.", "responsibility6": "RESTful API (Application Programming Interfaces), Eloquent ORM(Object-Relational Mapping), MVC.", "responsibility7": "Technologies used: Laravel." };
const education$5 = { "title": "Education", "degree": "Degree", "field": "Field of Study", "gpa": "GPA", "schoolName": "Hanoi College of Industrial Economics College", "major": "Major in Software Engineering (GPA 3.56)", "location": "Hanoi, Vietnam (Senior year)", "period": "01/05/2021 - 05/06/2024" };
const projects$5 = { "title": "Projects", "viewProject": "View Project", "viewCode": "View Code", "featuredProject": "Featured Project", "soloProject": "Solo Project", "teamSize": "Team Size", "teamSizeDescription": "Frontend & Backend Developers", "myRole": "My Role", "technologyStack": "Technology Stack", "keyResponsibilities": "Key Responsibilities", "superAdmin": "Super Admin", "userFeatures": "User Features", "adminDashboard": "Admin Dashboard", "userWebsite": "User Website", "adminRepository": "Admin Repository", "userRepository": "User Repository", "frontEnd": "Front End", "backEnd": "Back End", "project1": { "date": "01/11/2024 - 01/01/2025", "title": "C-to-C E-commerce Website", "shortDescription": "Developed a feature-rich e-commerce platform with Super Admin controls and advanced user features.", "description": "Developed a feature-rich e-commerce platform with Super Admin controls (user/shop/product/category/promotion/banner management) and Web user features (auth, shopping, orders, reviews, seller tools, chat, notifications, and marketing).", "role": "Frontend Developer", "roleDescription": "Developing user interfaces and integrating APIs", "responsibility1": "Developed authentication features, including login and logout functionality", "responsibility2": "Implemented product approval system, enabling review, approval, and rejection of new products", "responsibility3": "Designed a notification system to inform users about delivery updates and notify shop admins about user orders", "responsibility4": "Built functionality to add, edit, delete user addresses and set default addresses", "responsibility5": "Integrated VNPay for seamless online payment during checkout", "responsibility6": "Developed features for order management, including order tracking and cancellation", "responsibility7": "Implemented delivery status management, allowing users and shop admins to track and update order statuses" }, "project2": { "date": "01/01/2024 - 05/03/2024", "title": "Library Management Website", "description": "Developed a comprehensive Library Management System with dual interfaces (Admin & User). Admin website features authentication system, books/categories management, borrowing tracking, fine management, user control, and multilingual support. User interface includes account management, book browsing/searching, borrowing management, dark/light mode theming, and responsive design.", "role": "Full-stack Developer", "roleDescription": "End-to-end development of all features", "teamSizeDescription": "Personal project development", "responsibility1": "Led full-stack development from initial design to deployment", "responsibility2": "Implemented secure authentication and role-based access control", "responsibility3": "Developed comprehensive book management system with CRUD operations", "responsibility4": "Built borrowing tracking system and fine management features", "responsibility5": "Created responsive UI/UX design with Vue.js and React.js frontends", "responsibility6": "Designed and implemented RESTful APIs with Laravel backend" } };
const contact$5 = { "title": "Contact Me", "name": "Name", "email": "Email", "subject": "Subject", "message": "Message", "send": "Send Message", "sending": "Sending...", "required": "This field is required", "validEmail": "Please enter a valid email", "success": "Message sent successfully!", "error": "Error sending message. Please try again.", "mobile": "Mobile", "phoneNumber": "0982743860", "emailAddress": "vanminhtruong95@gmail.com", "githubProject": "GitHub Project", "libraryProject": "Library Project", "projectWebsite": "Project Website", "namePlaceholder": "Enter your name", "emailPlaceholder": "Enter your email", "subjectPlaceholder": "Enter message subject", "messagePlaceholder": "Enter your message", "errors": { "nameRequired": "Name is required", "emailRequired": "Email is required", "emailInvalid": "Please enter a valid email address", "subjectRequired": "Subject is required", "messageRequired": "Message is required", "messageTooShort": "Message must be at least 10 characters", "formInvalid": "Please fix the errors in the form" } };
const footer$5 = { "copyright": "All Rights Reserved", "allRightsReserved": "All Rights Reserved", "description": "Frontend Developer specializing in creating user interfaces with experience in web application development.", "copyrightText": "All rights reserved." };
const colors$5 = { "selectTheme": "Select color theme", "indigo": "Indigo", "blue": "Blue", "red": "Red", "green": "Green", "purple": "Purple", "pink": "Pink", "yellow": "Yellow", "teal": "Teal", "orange": "Orange", "cyan": "Cyan", "rainbow": "Rainbow" };
const en = {
  common: common$5,
  app: app$6,
  nav: nav$5,
  home: home$5,
  about: about$5,
  skills: skills$5,
  experience: experience$5,
  education: education$5,
  projects: projects$5,
  contact: contact$5,
  footer: footer$5,
  colors: colors$5
};
const common$4 = { "backToTop": "맨 위로" };
const app$5 = { "title": "개인 이력서", "language": "한국어" };
const nav$4 = { "home": "홈", "about": "소개", "skills": "스킬", "experience": "경험", "education": "교육", "projects": "프로젝트", "contact": "연락처", "downloadCV": "이력서 다운로드", "links": "링크", "connect": "연결" };
const home$4 = { "greeting": "안녕하세요, 저는", "role": "ReactJS 인턴", "objective": "목표", "shortTermTitle": "단기 목표", "longTermTitle": "장기 목표", "description": "아름답고 기능적인 웹 애플리케이션 제작에 열정을 가지고 있습니다", "downloadCV": "이력서 다운로드", "contactMe": "연락하기", "shortTermGoal": "내년 안에 주니어 풀스택 웹 개발자가 되는 것", "longTermGoal": "향후 5년 내에 시니어 풀스택 웹 개발자 역할로 발전하는 것", "aboutMe": "About Me", "avatar": "TVM" };
const about$4 = { "title": "소개", "content": "저는 프로그래밍, 특히 ReactJS와 같은 현대적인 프레임워크를 사용한 웹 개발에 대한 강한 열정을 가진 정보기술 전공 마지막 학년 학생입니다. CY 베트남 소프트웨어 개발 회사에서 3개월 인턴십을 완료하였고, 그곳에서 ReactJS를 사용하여 웹 애플리케이션을 개발하고 최적화하는 가치 있는 실무 경험을 쌓았습니다. 또한 Nacencom 기술 주식회사에서 인턴십을 하였고, 이를 통해 IT 분야에서 실용적인 기술과 경험을 더욱 향상시켰습니다. 전문적인 작업 환경에서 지식을 적용하고 프로그래밍 기술을 계속 다듬고 싶습니다.", "description": "저는 혁신적인 솔루션을 만드는 데 열정을 가진 헌신적인 웹 개발자입니다. 저는 도전적인 프로젝트에서 일하고 새로운 기술을 지속적으로 배우는 것을 즐깁니다.", "personalInfo": "개인 정보", "name": "이름", "age": "나이", "email": "이메일", "phone": "전화번호", "address": "주소", "addressValue": "호앙 마이 지구, 하노이", "languages": "언어" };
const skills$4 = { "title": "기술", "backEnd": "Back End", "soft": "소프트 스킬", "languages": "프로그래밍 언어", "frontEnd": "Front End", "tools": "도구 및 기술", "aiTools": "AI 도구", "course1": "객체 지향 프로그래밍 (A)", "course2": "데이터 구조 및 알고리즘 (A)", "course3": "관계형 데이터베이스 (A)" };
const experience$4 = { "title": "경력", "present": "현재", "responsibilities": "책임", "period1": "01/11/2024 - 01/01/2025", "date1": "2024년 11월 - 2025년 1월", "company1": "CY 베트남 소프트웨어 개발 유한회사", "position1": "프론트엔드 개발자 (VueJS)", "department1": "프론트엔드 개발", "responsibility1": "VueJS를 사용하여 사용자 인터페이스를 구축하고 주문 관리, 배송 상태 알림 및 VNPay 통합 온라인 결제와 같은 기능을 구현했습니다.", "responsibility2": "Vue Router를 사용하여 네비게이션을 처리하고 사용자 경험을 위해 애플리케이션을 최적화했습니다.", "responsibility3": "QA 팀의 피드백을 바탕으로 사용자 경험을 개선하고 문제를 해결했습니다.", "period2": "01/01/2024 - 05/03/2024", "date2": "2024년 1월 - 2024년 3월", "company2": "Nacecomm Technology Joint Stock Company", "position2": "풀스택 웹 개발자 (ReactJS, Laravel)", "department2": "도서관 관리 시스템", "responsibility4": "개인 프로젝트로 도서관 관리 시스템을 개발했습니다.", "responsibility5": "MVC 아키텍처 패턴을 사용하여 웹사이트의 Controller와 Model을 구현했습니다.", "responsibility6": "RESTful API(응용 프로그램 인터페이스), Eloquent ORM(객체-관계 매핑), MVC를 활용했습니다.", "responsibility7": "사용된 기술: Laravel." };
const education$4 = { "title": "학력", "degree": "학위", "field": "전공", "gpa": "학점", "schoolName": "하노이 산업 경제 대학", "major": "소프트웨어 공학 전공 (GPA 3.56)", "location": "하노이, 베트남 (졸업년도)", "period": "01/05/2021 - 05/06/2024" };
const projects$4 = { "title": "프로젝트", "viewProject": "프로젝트 보기", "viewCode": "코드 보기", "featuredProject": "주요 프로젝트", "soloProject": "개인 프로젝트", "teamSize": "팀 규모", "teamSizeDescription": "프론트엔드 및 백엔드 개발자", "myRole": "내 역할", "technologyStack": "기술 스택", "keyResponsibilities": "주요 책임", "superAdmin": "슈퍼 관리자", "userFeatures": "사용자 기능", "adminDashboard": "관리자 대시보드", "userWebsite": "사용자 웹사이트", "adminRepository": "관리자 저장소", "userRepository": "사용자 저장소", "frontEnd": "프론트엔드", "backEnd": "백엔드", "libraryProject": "도서관 프로젝트", "project1": { "title": "C-to-C 전자상거래 웹사이트", "date": "01/11/2024 - 01/01/2025", "description": "슈퍼 관리자 제어(사용자/상점/제품/카테고리/프로모션/배너 관리) 및 웹 사용자 기능(인증, 쇼핑, 주문, 리뷰, 판매자 도구, 채팅, 알림 및 마케팅)이 있는 기능이 풍부한 전자상거래 플랫폼을 개발했습니다.", "role": "프론트엔드 개발자", "roleDescription": "사용자 인터페이스 개발 및 API 통합", "responsibility1": "로그인 및 로그아웃 기능을 포함한 인증 기능 개발", "responsibility2": "새 제품의 검토, 승인 및 거부를 가능하게 하는 제품 승인 시스템 구현", "responsibility3": "사용자에게 배송 업데이트를 알리고 상점 관리자에게 사용자 주문을 알리는 알림 시스템 설계", "responsibility4": "사용자 주소 추가, 편집, 삭제 및 기본 주소 설정 기능 구축", "responsibility5": "결제 과정에서 원활한 온라인 결제를 위한 VNPay 통합", "responsibility6": "주문 추적 및 취소를 포함한 주문 관리 기능 개발", "responsibility7": "사용자와 상점 관리자가 주문 상태를 추적하고 업데이트할 수 있는 배송 상태 관리 구현" }, "project2": { "title": "도서관 관리 웹사이트", "date": "01/01/2024 - 05/03/2024", "description": "이중 인터페이스(관리자 및 사용자)가 있는 종합적인 도서관 관리 시스템을 개발했습니다. 관리자 웹사이트는 인증 시스템, 도서/카테고리 관리, 대출 추적, 벌금 관리, 사용자 제어 및 다국어 지원 기능을 제공합니다. 사용자 인터페이스에는 계정 관리, 도서 검색/찾기, 대출 관리, 다크/라이트 모드 테마 및 반응형 디자인이 포함됩니다.", "role": "풀스택 개발자", "roleDescription": "모든 기능의 엔드투엔드 개발", "teamSizeDescription": "개인 프로젝트 개발", "responsibility1": "초기 설계부터 배포까지 풀스택 개발 주도", "responsibility2": "안전한 인증 및 역할 기반 접근 제어 구현", "responsibility3": "CRUD 작업이 포함된 종합적인 도서 관리 시스템 개발", "responsibility4": "대출 추적 시스템 및 벌금 관리 기능 구축", "responsibility5": "Vue.js 및 React.js 프론트엔드로 반응형 UI/UX 디자인 제작", "responsibility6": "Laravel 백엔드로 RESTful API 설계 및 구현" } };
const contact$4 = { "title": "연락처", "name": "이름", "email": "이메일", "subject": "제목", "message": "메시지", "send": "메시지 보내기", "sending": "전송 중...", "required": "이 필드는 필수입니다", "validEmail": "유효한 이메일을 입력해주세요", "success": "메시지가 성공적으로 전송되었습니다!", "error": "메시지 전송 오류. 다시 시도해주세요.", "mobile": "모바일", "phoneNumber": "0982743860", "emailAddress": "vanminhtruong95@gmail.com", "githubProject": "GitHub 프로젝트", "libraryProject": "도서관 프로젝트", "projectWebsite": "프로젝트 웹사이트", "namePlaceholder": "이름을 입력하세요", "emailPlaceholder": "이메일을 입력하세요", "subjectPlaceholder": "메시지 제목을 입력하세요", "messagePlaceholder": "메시지를 입력하세요", "errors": { "nameRequired": "이름은 필수입니다", "emailRequired": "이메일은 필수입니다", "emailInvalid": "유효한 이메일 주소를 입력해주세요", "subjectRequired": "제목은 필수입니다", "messageRequired": "메시지는 필수입니다", "messageTooShort": "메시지는 최소 10자 이상이어야 합니다", "formInvalid": "양식의 오류를 수정해주세요" } };
const footer$4 = { "copyright": "모든 권리 보유", "allRightsReserved": "모든 권리 보유", "description": "웹 애플리케이션 개발 경험을 갖춘 사용자 인터페이스 작성 전문 프론트엔드 개발자", "copyrightText": "모든 권리 보유." };
const colors$4 = { "selectTheme": "색상 테마 선택", "indigo": "인디고", "blue": "파랑", "red": "빨강", "green": "초록", "purple": "보라", "pink": "핑크", "yellow": "노랑", "teal": "틸", "orange": "주황", "cyan": "청록", "rainbow": "무지개" };
const ko = {
  common: common$4,
  app: app$5,
  nav: nav$4,
  home: home$4,
  about: about$4,
  skills: skills$4,
  experience: experience$4,
  education: education$4,
  projects: projects$4,
  contact: contact$4,
  footer: footer$4,
  colors: colors$4
};
const common$3 = { "backToTop": "Lên đầu trang" };
const app$4 = { "title": "Lý Lịch Cá Nhân", "language": "Tiếng Việt" };
const nav$3 = { "home": "Trang Chủ", "about": "Giới Thiệu", "skills": "Kỹ Năng", "experience": "Kinh Nghiệm", "education": "Học Vấn", "projects": "Dự Án", "contact": "Liên Hệ", "downloadCV": "Tải CV", "links": "Liên Kết", "connect": "Kết Nối" };
const home$3 = { "greeting": "Xin chào, tôi là", "role": "Thực tập sinh ReactJS", "objective": "Mục tiêu", "shortTermTitle": "Mục tiêu ngắn hạn", "longTermTitle": "Mục tiêu dài hạn", "description": "Đam mê tạo ra các ứng dụng web đẹp và chức năng", "downloadCV": "Tải CV", "contactMe": "Liên Hệ Tôi", "shortTermGoal": "Trở thành một nhà phát triển Full Stack Web cấp độ junior trong năm tới.", "longTermGoal": "Thăng tiến lên vị trí nhà phát triển Full Stack Web cấp độ senior trong vòng năm năm tới.", "avatar": "TVM", "viewCV": "Xem CV" };
const about$3 = { "title": "Về Tôi", "content": "Tôi là sinh viên năm cuối ngành Công nghệ Thông tin với niềm đam mê mạnh mẽ về lập trình, đặc biệt là phát triển web sử dụng các framework hiện đại như ReactJS. Tôi đã hoàn thành khóa thực tập 3 tháng tại Công ty TNHH Phát triển Phần mềm CY Việt Nam, nơi tôi đã có được kinh nghiệm thực tế quý báu trong việc phát triển và tối ưu hóa các ứng dụng web sử dụng ReactJS. Ngoài ra, tôi còn thực tập tại Công ty Cổ phần Công nghệ Nacencom, giúp nâng cao kỹ năng thực tế và kinh nghiệm trong lĩnh vực CNTT. Tôi mong muốn áp dụng kiến thức của mình và tiếp tục trau dồi kỹ năng lập trình trong môi trường làm việc chuyên nghiệp.", "description": "Tôi là một nhà phát triển web tận tâm với niềm đam mê tạo ra các giải pháp sáng tạo. Tôi thích làm việc trên các dự án thách thức và liên tục học hỏi các công nghệ mới.", "personalInfo": "Thông Tin Cá Nhân", "name": "Tên", "age": "Tuổi", "email": "Email", "phone": "Điện Thoại", "address": "Địa Chỉ", "addressValue": "Quận Hoàng Mai, Hà Nội", "languages": "Ngôn Ngữ" };
const skills$3 = { "title": "Kỹ Năng Của Tôi", "backEnd": "Back End", "soft": "Kỹ Năng Mềm", "languages": "Ngôn Ngữ Lập Trình", "frontEnd": "Front End", "tools": "Công Cụ & Công Nghệ", "aiTools": "Công Cụ AI", "course1": "Lập trình Hướng đối tượng (A)", "course2": "Cấu trúc dữ liệu và Giải thuật (A)", "course3": "Cơ sở dữ liệu Quan hệ (A)" };
const experience$3 = { "title": "Kinh Nghiệm Làm Việc", "present": "Hiện Tại", "responsibilities": "Trách Nhiệm", "period1": "01/11/2024 - 01/01/2025", "date1": "Tháng 11 năm 2024 - Tháng 1 năm 2025", "company1": "Công ty TNHH Phát triển Phần mềm CY Việt Nam", "position1": "Lập trình viên Frontend (VueJS)", "department1": "Phát triển Front End", "responsibility1": "Sử dụng VueJS để xây dựng giao diện người dùng và triển khai các tính năng như quản lý đơn hàng, thông báo trạng thái giao hàng và thanh toán trực tuyến tích hợp VNPay.", "responsibility2": "Sử dụng Vue Router để xử lý điều hướng và tối ưu hóa ứng dụng cho trải nghiệm người dùng.", "responsibility3": "Cải thiện trải nghiệm người dùng và giải quyết các vấn đề dựa trên phản hồi từ đội QA.", "period2": "01/01/2024 - 05/03/2024", "date2": "Tháng 1 năm 2024 - Tháng 3 năm 2024", "company2": "Công ty Cổ phần Công nghệ Nacecomm", "position2": "Lập trình viên Full-stack (ReactJS, Laravel)", "department2": "Hệ thống Quản lý Thư viện", "responsibility4": "Phát triển hệ thống quản lý thư viện như một dự án cá nhân.", "responsibility5": "Triển khai Controller, Model cho website sử dụng mô hình kiến trúc MVC.", "responsibility6": "RESTful API (Giao diện lập trình ứng dụng), Eloquent ORM (Ánh xạ quan hệ đối tượng), MVC.", "responsibility7": "Công nghệ sử dụng: Laravel." };
const education$3 = { "title": "Học Vấn", "degree": "Bằng Cấp", "field": "Lĩnh Vực Học Tập", "gpa": "Điểm Trung Bình", "schoolName": "Trường Cao đẳng Kinh tế Công nghiệp Hà Nội", "major": "Chuyên ngành Kỹ thuật Phần mềm (GPA 3.56)", "location": "Hà Nội, Việt Nam (Năm cuối)", "period": "01/05/2021 - 05/06/2024" };
const projects$3 = { "title": "Dự Án", "viewProject": "Xem Dự Án", "viewCode": "Xem Mã Nguồn", "featuredProject": "Dự Án Nổi Bật", "soloProject": "Dự Án Cá Nhân", "teamSize": "Quy Mô Nhóm", "teamSizeDescription": "Lập trình viên Frontend & Backend", "myRole": "Vai Trò Của Tôi", "technologyStack": "Công Nghệ Sử Dụng", "keyResponsibilities": "Trách Nhiệm Chính", "superAdmin": "Quản Trị Viên Cấp Cao", "userFeatures": "Tính Năng Người Dùng", "adminDashboard": "Bảng Điều Khiển Quản Trị", "userWebsite": "Website Người Dùng", "adminRepository": "Kho Lưu Trữ Quản Trị", "userRepository": "Kho Lưu Trữ Người Dùng", "frontEnd": "Front End", "backEnd": "Back End", "project1": { "date": "01/11/2024 - 01/01/2025", "title": "Website Thương Mại Điện Tử C-to-C", "shortDescription": "Phát triển nền tảng thương mại điện tử với quản trị viên cấp cao và nhiều tính năng người dùng.", "description": "Phát triển nền tảng thương mại điện tử với các chức năng Quản trị viên cấp cao (quản lý người dùng/cửa hàng/sản phẩm/danh mục/khuyến mãi/banner) và tính năng người dùng Web (xác thực, mua sắm, đơn hàng, đánh giá, công cụ người bán, trò chuyện, thông báo và tiếp thị).", "role": "Lập trình viên Frontend", "roleDescription": "Phát triển giao diện người dùng và tích hợp API", "responsibility1": "Phát triển tính năng xác thực, bao gồm chức năng đăng nhập và đăng xuất", "responsibility2": "Triển khai hệ thống phê duyệt sản phẩm, cho phép xem xét, phê duyệt và từ chối sản phẩm mới", "responsibility3": "Thiết kế hệ thống thông báo để thông báo cho người dùng về cập nhật giao hàng và thông báo cho quản trị viên cửa hàng về đơn đặt hàng của người dùng", "responsibility4": "Xây dựng chức năng thêm, sửa, xóa địa chỉ người dùng và đặt địa chỉ mặc định", "responsibility5": "Tích hợp VNPay để thanh toán trực tuyến liền mạch trong quá trình thanh toán", "responsibility6": "Phát triển tính năng quản lý đơn hàng, bao gồm theo dõi và hủy đơn hàng", "responsibility7": "Triển khai quản lý trạng thái giao hàng, cho phép người dùng và quản trị viên cửa hàng theo dõi và cập nhật trạng thái đơn hàng" }, "project2": { "date": "01/01/2024 - 05/03/2024", "title": "Website Quản Lý Thư Viện", "description": "Phát triển hệ thống quản lý thư viện toàn diện với giao diện kép (Quản trị & Người dùng). Website quản trị có tính năng hệ thống xác thực, quản lý sách/danh mục, theo dõi mượn trả, quản lý phạt, kiểm soát người dùng và hỗ trợ đa ngôn ngữ. Giao diện người dùng bao gồm quản lý tài khoản, duyệt/tìm kiếm sách, quản lý mượn trả, chủ đề chế độ tối/sáng và thiết kế đáp ứng.", "role": "Lập trình viên Full-stack", "roleDescription": "Phát triển toàn bộ hệ thống từ backend đến frontend", "teamSizeDescription": "Phát triển dự án cá nhân", "responsibility1": "Dẫn dắt phát triển full-stack từ thiết kế ban đầu đến triển khai", "responsibility2": "Triển khai xác thực bảo mật và kiểm soát truy cập dựa trên vai trò", "responsibility3": "Phát triển hệ thống quản lý sách toàn diện với các thao tác CRUD", "responsibility4": "Xây dựng hệ thống theo dõi mượn trả và tính năng quản lý phạt", "responsibility5": "Tạo thiết kế UI/UX đáp ứng với giao diện người dùng Vue.js và React.js", "responsibility6": "Thiết kế và triển khai RESTful API với backend Laravel" } };
const contact$3 = { "title": "Liên Hệ Tôi", "name": "Tên", "email": "Email", "subject": "Chủ Đề", "message": "Tin Nhắn", "send": "Gửi Tin Nhắn", "sending": "Đang gửi...", "required": "Trường này là bắt buộc", "validEmail": "Vui lòng nhập email hợp lệ", "success": "Tin nhắn đã được gửi thành công!", "error": "Lỗi khi gửi tin nhắn. Vui lòng thử lại.", "mobile": "Di động", "phoneNumber": "0982743860", "emailAddress": "vanminhtruong95@gmail.com", "githubProject": "Dự án GitHub", "libraryProject": "Dự án Thư viện", "projectWebsite": "Website Dự án", "namePlaceholder": "Nhập tên của bạn", "emailPlaceholder": "Nhập email của bạn", "subjectPlaceholder": "Nhập chủ đề tin nhắn", "messagePlaceholder": "Nhập tin nhắn của bạn", "errors": { "nameRequired": "Tên là bắt buộc", "emailRequired": "Email là bắt buộc", "emailInvalid": "Vui lòng nhập địa chỉ email hợp lệ", "subjectRequired": "Chủ đề là bắt buộc", "messageRequired": "Tin nhắn là bắt buộc", "messageTooShort": "Tin nhắn phải có ít nhất 10 ký tự", "formInvalid": "Vui lòng sửa các lỗi trong biểu mẫu" } };
const footer$3 = { "copyright": "Tất Cả Các Quyền Được Bảo Lưu", "allRightsReserved": "Tất Cả Các Quyền Được Bảo Lưu", "description": "Lập trình viên Frontend chuyên về tạo giao diện người dùng với kinh nghiệm phát triển ứng dụng web.", "copyrightText": "Tất cả các quyền được bảo lưu." };
const colors$3 = { "selectTheme": "Chọn màu giao diện", "indigo": "Chàm", "blue": "Xanh dương", "red": "Đỏ", "green": "Xanh lá", "purple": "Tím", "pink": "Hồng", "yellow": "Vàng", "teal": "Xanh ngọc", "orange": "Cam", "cyan": "Xanh da trời", "rainbow": "Cầu vồng" };
const vi = {
  common: common$3,
  app: app$4,
  nav: nav$3,
  home: home$3,
  about: about$3,
  skills: skills$3,
  experience: experience$3,
  education: education$3,
  projects: projects$3,
  contact: contact$3,
  footer: footer$3,
  colors: colors$3
};
const common$2 = { "backToTop": "返回顶部" };
const app$3 = { "title": "个人简历", "language": "中文" };
const nav$2 = { "home": "首页", "about": "关于", "skills": "技能", "experience": "经验", "education": "教育", "projects": "项目", "contact": "联系", "downloadCV": "下载简历", "links": "链接", "connect": "连接" };
const home$2 = { "greeting": "你好，我是", "role": "ReactJS 实习生", "objective": "目标", "shortTermTitle": "短期目标", "longTermTitle": "长期目标", "description": "热衷于创建美观且功能强大的网络应用程序", "downloadCV": "下载简历", "contactMe": "联系我", "shortTermGoal": "在明年内成为初级全栈网络开发人员", "longTermGoal": "在未来五年内晋升为高级全栈网络开发人员角色", "avatar": "TVM" };
const about$2 = { "title": "关于我", "content": "我是一名信息技术专业的应届毕业生，对编程充满热情，特别是使用ReactJS等现代框架进行网络开发。我在CY越南软件开发有限公司完成了为期3个月的实习，在那里我获得了实用的经验，使用ReactJS开发和优化网络应用程序。此外，我还在Nacencom科技股份公司实习，这进一步提高了我在IT领域的实用技能和经验。我渴望在专业的工作环境中应用我的知识并继续提升我的编程技能。", "description": "我是一名专注的网页开发者，热衷于创造创新解决方案。我喜欢从事具有挑战性的项目，并不断学习新技术。", "personalInfo": "个人信息", "name": "姓名", "age": "年龄", "email": "电子邮件", "phone": "电话", "address": "地址", "addressValue": "河内黄麒区，河内", "languages": "语言" };
const skills$2 = { "title": "我的技能", "backEnd": "Back End", "soft": "软技能", "languages": "编程语言", "frontEnd": "Front End", "tools": "工具和技术", "aiTools": "AI工具", "course1": "面向对象编程 (A)", "course2": "数据结构与算法 (A)", "course3": "关系型数据库 (A)" };
const experience$2 = { "title": "工作经验", "present": "至今", "responsibilities": "职责", "period1": "01/11/2024 - 01/01/2025", "date1": "2024年11月 - 2025年1月", "company1": "CY越南软件开发有限公司", "position1": "前端开发者 (VueJS)", "department1": "前端开发", "responsibility1": "使用VueJS构建用户界面并实现了订单管理、配送状态通知和集成VNPay的在线支付等功能。", "responsibility2": "使用Vue Router处理导航并优化应用程序以提升用户体验。", "responsibility3": "根据QA团队的反馈改进用户体验并解决问题。", "period2": "01/01/2024 - 05/03/2024", "date2": "2024年1月 - 2024年3月", "company2": "Nacecomm Technology Joint Stock Company", "position2": "全栈网络开发者 (ReactJS, Laravel)", "department2": "图书馆管理系统", "responsibility4": "开发了一个图书馆管理系统作为个人项目。", "responsibility5": "使用MVC架构模式为网站实现了Controller和Model。", "responsibility6": "RESTful API（应用程序编程接口），Eloquent ORM（对象关系映射），MVC。", "responsibility7": "使用的技术：Laravel。" };
const education$2 = { "title": "教育背景", "degree": "学位", "field": "专业", "gpa": "绩点", "schoolName": "河内工业经济学院", "major": "软件工程专业 (GPA 3.56)", "location": "越南河内（毕业年）", "period": "01/05/2021 - 05/06/2024" };
const projects$2 = { "title": "项目", "viewProject": "查看项目", "viewCode": "查看代码", "featuredProject": "特色项目", "soloProject": "个人项目", "teamSize": "团队规模", "teamSizeDescription": "前端和后端开发人员", "myRole": "我的角色", "technologyStack": "技术栈", "keyResponsibilities": "主要职责", "superAdmin": "超级管理员", "userFeatures": "用户功能", "adminDashboard": "管理员仪表板", "userWebsite": "用户网站", "adminRepository": "管理员代码库", "userRepository": "用户代码库", "frontEnd": "前端", "backEnd": "后端", "libraryProject": "图书馆项目", "project1": { "title": "C-to-C电子商务网站", "date": "01/11/2024 - 01/01/2025", "description": "开发了一个功能丰富的电子商务平台，具有超级管理员控制（用户/商店/产品/类别/促销/横幅管理）和Web用户功能（认证、购物、订单、评论、卖家工具、聊天、通知和营销）。", "role": "前端开发者", "roleDescription": "开发用户界面并集成API", "responsibility1": "开发认证功能，包括登录和登出功能", "responsibility2": "实施产品审批系统，使能够审查、批准和拒绝新产品", "responsibility3": "设计通知系统，通知用户配送更新并通知商店管理员用户订单", "responsibility4": "构建添加、编辑、删除用户地址和设置默认地址的功能", "responsibility5": "集成VNPay实现结账过程中的无缝在线支付", "responsibility6": "开发订单管理功能，包括订单跟踪和取消", "responsibility7": "实施配送状态管理，允许用户和商店管理员跟踪和更新订单状态" }, "project2": { "title": "图书馆管理网站", "date": "01/01/2024 - 05/03/2024", "description": "开发了一个全面的图书馆管理系统，具有双重界面（管理员和用户）。管理员网站具有认证系统、图书/类别管理、借阅跟踪、罚款管理、用户控制和多语言支持功能。用户界面包括账户管理、图书浏览/搜索、借阅管理、暗/亮模式主题和响应式设计。", "role": "全栈开发者", "roleDescription": "所有功能的端到端开发", "teamSizeDescription": "个人项目开发", "responsibility1": "从初始设计到部署领导全栈开发", "responsibility2": "实施安全认证和基于角色的访问控制", "responsibility3": "开发具有CRUD操作的全面图书管理系统", "responsibility4": "构建借阅跟踪系统和罚款管理功能", "responsibility5": "使用Vue.js和React.js前端创建响应式UI/UX设计", "responsibility6": "使用Laravel后端设计和实施RESTful API" } };
const contact$2 = { "title": "联系我", "name": "姓名", "email": "电子邮件", "subject": "主题", "message": "信息", "send": "发送信息", "sending": "发送中...", "required": "此字段为必填项", "validEmail": "请输入有效的电子邮件", "success": "信息发送成功！", "error": "发送信息时出错。请再试一次。", "mobile": "手机", "phoneNumber": "0982743860", "emailAddress": "vanminhtruong95@gmail.com", "githubProject": "GitHub项目", "libraryProject": "图书馆项目", "projectWebsite": "项目网站", "namePlaceholder": "输入您的姓名", "emailPlaceholder": "输入您的电子邮件", "subjectPlaceholder": "输入信息主题", "messagePlaceholder": "输入您的信息", "errors": { "nameRequired": "姓名是必填项", "emailRequired": "电子邮件是必填项", "emailInvalid": "请输入有效的电子邮件地址", "subjectRequired": "主题是必填项", "messageRequired": "信息是必填项", "messageTooShort": "信息必须至少有10个字符", "formInvalid": "请修正表单中的错误" } };
const footer$2 = { "copyright": "版权所有", "allRightsReserved": "版权所有", "description": "前端开发者，专注于创建用户界面，具有网络应用开发经验。", "copyrightText": "版权所有." };
const colors$2 = { "selectTheme": "选择颜色主题", "indigo": "青紫色", "blue": "蓝色", "red": "红色", "green": "绿色", "purple": "紫色", "pink": "粉色", "yellow": "黄色", "teal": "青绿色", "orange": "橙色", "cyan": "青色", "rainbow": "彩虹" };
const zh = {
  common: common$2,
  app: app$3,
  nav: nav$2,
  home: home$2,
  about: about$2,
  skills: skills$2,
  experience: experience$2,
  education: education$2,
  projects: projects$2,
  contact: contact$2,
  footer: footer$2,
  colors: colors$2
};
const common$1 = { "backToTop": "Volver arriba" };
const app$2 = { "title": "CV Personal", "language": "Español" };
const nav$1 = { "home": "Inicio", "about": "Acerca de", "skills": "Habilidades", "experience": "Experiencia", "education": "Educación", "projects": "Proyectos", "contact": "Contacto", "downloadCV": "Descargar CV", "links": "Enlaces", "connect": "Conectar" };
const home$1 = { "greeting": "Hola, soy", "role": "Practicante ReactJS", "objective": "Objetivo", "shortTermTitle": "Meta a Corto Plazo", "longTermTitle": "Meta a Largo Plazo", "shortTermGoal": "Convertirme en un desarrollador Full Stack Web junior dentro del próximo año.", "longTermGoal": "Avanzar a un rol de desarrollador Full Stack Web senior dentro de los próximos cinco años.", "downloadCV": "Descargar CV", "contactMe": "Contáctame", "avatar": "TVM" };
const about$1 = { "title": "Acerca de Mí", "content": "Soy un estudiante de último año de Tecnología de la Información con una fuerte pasión por la programación, particularmente en el desarrollo web usando frameworks modernos como ReactJS. Completé una pasantía de 3 meses en CY Vietnam Software Development Co., Ltd., donde adquirí valiosa experiencia práctica en el desarrollo y optimización de aplicaciones web usando ReactJS. Además, hice una pasantía en Nacencom Technology Joint Stock Company, lo que mejoró aún más mis habilidades prácticas y experiencia en el campo de TI. Estoy ansioso por aplicar mis conocimientos y continuar perfeccionando mis habilidades de programación en un entorno de trabajo profesional.", "description": "Soy un desarrollador web dedicado con pasión por crear soluciones innovadoras. Disfruto trabajando en proyectos desafiantes y aprendiendo continuamente nuevas tecnologías.", "personalInfo": "Información Personal", "name": "Nombre", "age": "Edad", "email": "Correo Electrónico", "phone": "Teléfono", "address": "Dirección", "addressValue": "Distrito Hoang Mai, Hanoi", "languages": "Idiomas" };
const skills$1 = { "title": "Mis Habilidades", "backEnd": "Back End", "soft": "Habilidades Blandas", "languages": "Lenguajes de Programación", "frontEnd": "Front End", "tools": "Herramientas y Tecnologías", "aiTools": "Herramientas de IA", "course1": "Programación Orientada a Objetos (A)", "course2": "Estructuras de Datos y Algoritmos (A)", "course3": "Base de Datos Relacional (A)" };
const experience$1 = { "title": "Experiencia Laboral", "present": "Presente", "responsibilities": "Responsabilidades", "period1": "01/11/2024 - 01/01/2025", "date1": "Noviembre 2024 - Enero 2025", "company1": "CY Vietnam Software Development Co., Ltd.", "position1": "Desarrollador Frontend (VueJS)", "department1": "Desarrollo Front End", "responsibility1": "Utilicé VueJS para construir interfaces de usuario e implementé características como gestión de pedidos, notificaciones de estado de entrega y pago en línea integrado con VNPay.", "responsibility2": "Usé Vue Router para manejar la navegación y optimicé la aplicación para la experiencia del usuario.", "responsibility3": "Mejoré la experiencia del usuario y resolví problemas basándome en la retroalimentación del equipo de QA.", "period2": "01/01/2024 - 05/03/2024", "date2": "Enero 2024 - Marzo 2024", "company2": "Nacecomm Technology Joint Stock Company", "position2": "Desarrollador Web Full-stack (ReactJS, Laravel)", "department2": "Sistema de Gestión de Biblioteca", "responsibility4": "Desarrollé un sistema de gestión de biblioteca como proyecto personal.", "responsibility5": "Implementación de Controlador, Modelo para un sitio web usando el patrón arquitectónico MVC.", "responsibility6": "API RESTful (Interfaces de Programación de Aplicaciones), Eloquent ORM (Mapeo Objeto-Relacional), MVC.", "responsibility7": "Tecnologías utilizadas: Laravel." };
const education$1 = { "title": "Educación", "degree": "Título", "field": "Campo de Estudio", "gpa": "GPA", "schoolName": "Hanoi College of Industrial Economics College", "major": "Especialización en Ingeniería de Software (GPA 3.56)", "location": "Hanoi, Vietnam (Último año)", "period": "01/05/2021 - 05/06/2024" };
const projects$1 = { "title": "Proyectos", "viewProject": "Ver Proyecto", "viewCode": "Ver Código", "featuredProject": "Proyecto Destacado", "soloProject": "Proyecto Individual", "teamSize": "Tamaño del Equipo", "teamSizeDescription": "Desarrolladores Frontend y Backend", "myRole": "Mi Rol", "technologyStack": "Stack de Tecnologías", "keyResponsibilities": "Responsabilidades Clave", "superAdmin": "Super Administrador", "userFeatures": "Características de Usuario", "adminDashboard": "Panel de Administración", "userWebsite": "Sitio Web de Usuario", "adminRepository": "Repositorio de Administración", "userRepository": "Repositorio de Usuario", "frontEnd": "Front End", "backEnd": "Back End", "project1": { "date": "01/11/2024 - 01/01/2025", "title": "Sitio Web de Comercio Electrónico C-to-C", "description": "Desarrollé una plataforma de comercio electrónico rica en características con controles de Super Administrador (gestión de usuarios/tiendas/productos/categorías/promociones/banners) y características de usuario web (autenticación, compras, pedidos, reseñas, herramientas de vendedor, chat, notificaciones y marketing).", "role": "Desarrollador Frontend", "roleDescription": "Desarrollando interfaces de usuario e integrando APIs", "responsibility1": "Desarrollé características de autenticación, incluyendo funcionalidad de inicio y cierre de sesión", "responsibility2": "Implementé sistema de aprobación de productos, permitiendo revisar, aprobar y rechazar nuevos productos", "responsibility3": "Diseñé un sistema de notificaciones para informar a los usuarios sobre actualizaciones de entrega y notificar a los administradores de tienda sobre pedidos de usuarios", "responsibility4": "Construí funcionalidad para agregar, editar, eliminar direcciones de usuario y establecer direcciones predeterminadas", "responsibility5": "Integré VNPay para pago en línea sin problemas durante el proceso de compra", "responsibility6": "Desarrollé características para gestión de pedidos, incluyendo seguimiento y cancelación de pedidos", "responsibility7": "Implementé gestión de estado de entrega, permitiendo a usuarios y administradores de tienda rastrear y actualizar estados de pedidos" }, "project2": { "date": "01/01/2024 - 05/03/2024", "title": "Sitio Web de Gestión de Biblioteca", "description": "Desarrollé un Sistema de Gestión de Biblioteca integral con interfaces duales (Administrador y Usuario). El sitio web de administrador incluye sistema de autenticación, gestión de libros/categorías, seguimiento de préstamos, gestión de multas, control de usuarios y soporte multilingüe. La interfaz de usuario incluye gestión de cuenta, navegación/búsqueda de libros, gestión de préstamos, temas de modo oscuro/claro y diseño responsivo.", "role": "Desarrollador Full-stack", "roleDescription": "Desarrollo integral de todas las características", "teamSizeDescription": "Desarrollo de proyecto personal", "responsibility1": "Lideré el desarrollo full-stack desde el diseño inicial hasta el despliegue", "responsibility2": "Implementé autenticación segura y control de acceso basado en roles", "responsibility3": "Desarrollé sistema integral de gestión de libros con operaciones CRUD", "responsibility4": "Construí sistema de seguimiento de préstamos y características de gestión de multas", "responsibility5": "Creé diseño UI/UX responsivo con frontends Vue.js y React.js", "responsibility6": "Diseñé e implementé APIs RESTful con backend Laravel" } };
const contact$1 = { "title": "Contáctame", "name": "Nombre", "email": "Correo Electrónico", "subject": "Asunto", "message": "Mensaje", "send": "Enviar Mensaje", "sending": "Enviando...", "required": "Este campo es requerido", "validEmail": "Por favor ingrese un correo electrónico válido", "success": "¡Mensaje enviado exitosamente!", "error": "Error al enviar mensaje. Por favor intente de nuevo.", "mobile": "Móvil", "phoneNumber": "0982743860", "emailAddress": "vanminhtruong95@gmail.com", "githubProject": "Proyecto GitHub", "libraryProject": "Proyecto Biblioteca", "projectWebsite": "Sitio Web del Proyecto", "namePlaceholder": "Ingrese su nombre", "emailPlaceholder": "Ingrese su correo electrónico", "subjectPlaceholder": "Ingrese el asunto del mensaje", "messagePlaceholder": "Ingrese su mensaje", "errors": { "nameRequired": "El nombre es requerido", "emailRequired": "El correo electrónico es requerido", "emailInvalid": "Por favor ingrese una dirección de correo electrónico válida", "subjectRequired": "El asunto es requerido", "messageRequired": "El mensaje es requerido", "messageTooShort": "El mensaje debe tener al menos 10 caracteres", "formInvalid": "Por favor corrija los errores en el formulario" } };
const footer$1 = { "copyright": "Todos los Derechos Reservados", "allRightsReserved": "Todos los Derechos Reservados", "description": "Desarrollador Frontend especializado en crear interfaces de usuario con experiencia en desarrollo de aplicaciones web.", "copyrightText": "Todos los derechos reservados." };
const colors$1 = { "selectTheme": "Seleccionar tema de color", "indigo": "Índigo", "blue": "Azul", "red": "Rojo", "green": "Verde", "purple": "Púrpura", "pink": "Rosa", "yellow": "Amarillo", "teal": "Verde azulado", "orange": "Naranja", "cyan": "Cian", "rainbow": "Arcoíris" };
const es = {
  common: common$1,
  app: app$2,
  nav: nav$1,
  home: home$1,
  about: about$1,
  skills: skills$1,
  experience: experience$1,
  education: education$1,
  projects: projects$1,
  contact: contact$1,
  footer: footer$1,
  colors: colors$1
};
const common = { "backToTop": "Retour en haut" };
const app$1 = { "title": "CV Personnel", "language": "Français" };
const nav = { "home": "Accueil", "about": "À propos", "skills": "Compétences", "experience": "Expérience", "education": "Formation", "projects": "Projets", "contact": "Contact", "downloadCV": "Télécharger CV", "links": "Liens", "connect": "Se connecter" };
const home = { "greeting": "Bonjour, je suis", "role": "Stagiaire ReactJS", "objective": "Objectif", "shortTermTitle": "Objectif à court terme", "longTermTitle": "Objectif à long terme", "shortTermGoal": "Devenir un développeur Full Stack Web junior dans l'année à venir.", "longTermGoal": "Évoluer vers un poste de développeur Full Stack Web senior dans les cinq prochaines années.", "downloadCV": "Télécharger CV", "contactMe": "Me contacter", "avatar": "TVM" };
const about = { "title": "À propos de moi", "content": "Je suis un étudiant en dernière année en Technologies de l'Information avec une passion forte pour la programmation, particulièrement dans le développement web utilisant des frameworks modernes comme ReactJS. J'ai effectué un stage de 3 mois chez CY Vietnam Software Development Co., Ltd., où j'ai acquis une expérience pratique précieuse dans le développement et l'optimisation d'applications web utilisant ReactJS. De plus, j'ai fait un stage chez Nacencom Technology Joint Stock Company, ce qui a encore amélioré mes compétences pratiques et mon expérience dans le domaine informatique. Je suis désireux d'appliquer mes connaissances et de continuer à perfectionner mes compétences de programmation dans un environnement de travail professionnel.", "description": "Je suis un développeur web dévoué avec une passion pour créer des solutions innovantes. J'aime travailler sur des projets stimulants et apprendre continuellement de nouvelles technologies.", "personalInfo": "Informations personnelles", "name": "Nom", "age": "Âge", "email": "Email", "phone": "Téléphone", "address": "Adresse", "addressValue": "District de Hoang Mai, Hanoi", "languages": "Langues" };
const skills = { "title": "Mes compétences", "backEnd": "Back End", "soft": "Compétences douces", "languages": "Langages de programmation", "frontEnd": "Front End", "tools": "Outils et technologies", "aiTools": "Outils IA", "course1": "Programmation orientée objet (A)", "course2": "Structures de données et algorithmes (A)", "course3": "Base de données relationnelle (A)" };
const experience = { "title": "Expérience professionnelle", "present": "Présent", "responsibilities": "Responsabilités", "period1": "01/11/2024 - 01/01/2025", "date1": "Novembre 2024 - Janvier 2025", "company1": "CY Vietnam Software Development Co., Ltd.", "position1": "Développeur Frontend (VueJS)", "department1": "Développement Front End", "responsibility1": "Utilisé VueJS pour construire des interfaces utilisateur et implémenté des fonctionnalités telles que la gestion des commandes, les notifications de statut de livraison et le paiement en ligne intégré VNPay.", "responsibility2": "Utilisé Vue Router pour gérer la navigation et optimisé l'application pour l'expérience utilisateur.", "responsibility3": "Amélioré l'expérience utilisateur et résolu les problèmes basés sur les retours de l'équipe QA.", "period2": "01/01/2024 - 05/03/2024", "date2": "Janvier 2024 - Mars 2024", "company2": "Nacecomm Technology Joint Stock Company", "position2": "Développeur Web Full-stack (ReactJS, Laravel)", "department2": "Système de gestion de bibliothèque", "responsibility4": "Développé un système de gestion de bibliothèque comme projet personnel.", "responsibility5": "Implémentation du Contrôleur, Modèle pour un site web utilisant le pattern architectural MVC.", "responsibility6": "API RESTful (Interfaces de programmation d'application), Eloquent ORM (Mapping objet-relationnel), MVC.", "responsibility7": "Technologies utilisées : Laravel." };
const education = { "title": "Formation", "degree": "Diplôme", "field": "Domaine d'étude", "gpa": "Moyenne", "schoolName": "Collège d'économie industrielle de Hanoi", "major": "Spécialisation en génie logiciel (Moyenne 3.56)", "location": "Hanoi, Vietnam (Dernière année)", "period": "01/05/2021 - 05/06/2024" };
const projects = { "title": "Projets", "viewProject": "Voir le projet", "viewCode": "Voir le code", "featuredProject": "Projet vedette", "soloProject": "Projet solo", "teamSize": "Taille de l'équipe", "teamSizeDescription": "Développeurs Frontend & Backend", "myRole": "Mon rôle", "technologyStack": "Stack technologique", "keyResponsibilities": "Responsabilités principales", "superAdmin": "Super Admin", "userFeatures": "Fonctionnalités utilisateur", "adminDashboard": "Tableau de bord admin", "userWebsite": "Site web utilisateur", "adminRepository": "Dépôt admin", "userRepository": "Dépôt utilisateur", "frontEnd": "Front End", "backEnd": "Back End", "project1": { "date": "01/11/2024 - 01/01/2025", "title": "Site e-commerce C-to-C", "shortDescription": "Développé une plateforme e-commerce riche en fonctionnalités avec des contrôles Super Admin et des fonctionnalités utilisateur avancées.", "description": "Développé une plateforme e-commerce riche en fonctionnalités avec des contrôles Super Admin (gestion utilisateur/boutique/produit/catégorie/promotion/bannière) et des fonctionnalités utilisateur Web (authentification, shopping, commandes, avis, outils vendeur, chat, notifications et marketing).", "role": "Développeur Frontend", "roleDescription": "Développement d'interfaces utilisateur et intégration d'APIs", "responsibility1": "Développé des fonctionnalités d'authentification, incluant la connexion et déconnexion", "responsibility2": "Implémenté un système d'approbation de produits, permettant la révision, l'approbation et le rejet de nouveaux produits", "responsibility3": "Conçu un système de notification pour informer les utilisateurs des mises à jour de livraison et notifier les admins de boutique des commandes utilisateur", "responsibility4": "Construit la fonctionnalité pour ajouter, modifier, supprimer les adresses utilisateur et définir des adresses par défaut", "responsibility5": "Intégré VNPay pour un paiement en ligne fluide lors du checkout", "responsibility6": "Développé des fonctionnalités de gestion des commandes, incluant le suivi et l'annulation des commandes", "responsibility7": "Implémenté la gestion du statut de livraison, permettant aux utilisateurs et admins de boutique de suivre et mettre à jour les statuts de commande" }, "project2": { "date": "01/01/2024 - 05/03/2024", "title": "Site de gestion de bibliothèque", "description": "Développé un système de gestion de bibliothèque complet avec des interfaces doubles (Admin & Utilisateur). Le site admin comprend un système d'authentification, gestion des livres/catégories, suivi des emprunts, gestion des amendes, contrôle utilisateur et support multilingue. L'interface utilisateur inclut la gestion de compte, navigation/recherche de livres, gestion des emprunts, thème mode sombre/clair et design responsive.", "role": "Développeur Full-stack", "roleDescription": "Développement end-to-end de toutes les fonctionnalités", "teamSizeDescription": "Développement de projet personnel", "responsibility1": "Dirigé le développement full-stack de la conception initiale au déploiement", "responsibility2": "Implémenté une authentification sécurisée et un contrôle d'accès basé sur les rôles", "responsibility3": "Développé un système de gestion de livres complet avec opérations CRUD", "responsibility4": "Construit un système de suivi des emprunts et des fonctionnalités de gestion des amendes", "responsibility5": "Créé un design UI/UX responsive avec des frontends Vue.js et React.js", "responsibility6": "Conçu et implémenté des APIs RESTful avec backend Laravel" } };
const contact = { "title": "Me contacter", "name": "Nom", "email": "Email", "subject": "Sujet", "message": "Message", "send": "Envoyer le message", "sending": "Envoi en cours...", "required": "Ce champ est requis", "validEmail": "Veuillez entrer un email valide", "success": "Message envoyé avec succès !", "error": "Erreur lors de l'envoi du message. Veuillez réessayer.", "mobile": "Mobile", "phoneNumber": "0982743860", "emailAddress": "vanminhtruong95@gmail.com", "githubProject": "Projet GitHub", "libraryProject": "Projet bibliothèque", "projectWebsite": "Site web du projet", "namePlaceholder": "Entrez votre nom", "emailPlaceholder": "Entrez votre email", "subjectPlaceholder": "Entrez le sujet du message", "messagePlaceholder": "Entrez votre message", "errors": { "nameRequired": "Le nom est requis", "emailRequired": "L'email est requis", "emailInvalid": "Veuillez entrer une adresse email valide", "subjectRequired": "Le sujet est requis", "messageRequired": "Le message est requis", "messageTooShort": "Le message doit contenir au moins 10 caractères", "formInvalid": "Veuillez corriger les erreurs dans le formulaire" } };
const footer = { "copyright": "Tous droits réservés", "allRightsReserved": "Tous droits réservés", "description": "Développeur Frontend spécialisé dans la création d'interfaces utilisateur avec de l'expérience dans le développement d'applications web.", "copyrightText": "Tous droits réservés." };
const colors = { "selectTheme": "Sélectionner le thème de couleur", "indigo": "Indigo", "blue": "Bleu", "red": "Rouge", "green": "Vert", "purple": "Violet", "pink": "Rose", "yellow": "Jaune", "teal": "Bleu-vert", "orange": "Orange", "cyan": "Cyan", "rainbow": "Arc-en-ciel" };
const fr = {
  common,
  app: app$1,
  nav,
  home,
  about,
  skills,
  experience,
  education,
  projects,
  contact,
  footer,
  colors
};
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    ko,
    vi,
    zh,
    es,
    fr
  }
});
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme !== "light") {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.add(`theme-${savedTheme}`);
}
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(src_default);
app.mount("#app");
export {
  __vitePreload as _,
  _export_sfc as a
};
//# sourceMappingURL=index-DC-5oGik.js.map

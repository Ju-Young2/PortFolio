# 포트폴리오 구조 설명

## 기본 구조

1.`src/components`

    - `./layout` : 레이아웃 관련
        - Footer.js 
        - Header.js 
        - Layout.js 

    - `./sections` : 메인 화면 연락처, 기술, 프로젝트 등 영역 관련
        - About.js
        - Contact.js
        - Hero.js
        - Projects.js 
        - Skills.js 
        
    - `./ui` : 메인 화면 버튼, 프로젝트 카드, 기술 등 UI 관련
        - Button.js 
        - ProjectCard.js 
        - SkillBar.js  

2. `src/data`
    - personalInfo.js : 개인 정보 관련 내용
    - projects.js : 프로젝트 관련 내용 
    - skills.js : 기술 관련 내용

3. `src/hooks`
    - useScrollAnimation.js : 

4. `src/pages`
    - AboutPage.js : 소개 페이지
    - ContactPage.js : 연락처 페이지
    - Home.js : 메인 페이지
    - ProjectsPage.js : 프로젝트 페이지
    - SkillsPage.js : 기술 페이지

5. `src/styles`
    - `./components`
        - About.css
        - Contact.css
        - Footer.css
        - Header.css
        - Hero.css
        - Projects.css
        - skills.css
    
    - globals.css

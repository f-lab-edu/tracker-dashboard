# 📊 Tracker Dashboard
> **방문자 행동 데이터 시각화 Dashboard**  
> Tracker SDK 를 통해 수집한 방문자 데이터를 시각적으로 분석하고, 실시간 트래픽 및 사용자 행동 통계를 한눈에 확인할 수 있는 Dashboard 입니다.

---

## 📺 기능 시연

### PC 화면
<p>
<img src="https://github.com/user-attachments/assets/40407000-c101-49b0-9a94-87f034d03cca" width="70%" alt="pc"/>
</p>

### Mobile 화면
<p>
<img src="https://github.com/user-attachments/assets/db4376df-b7fe-41bb-b0b7-717d01b89d08" width="30%" alt="mobile"/>
<p>
---

## 인증 및 데이터 흐름
![auth_data](https://github.com/user-attachments/assets/1456bf4b-6f3d-4488-b378-61680a3de8aa)

---

## 🍀 배포링크 
- [SDK](https://www.npmjs.com/package/tracker-sdk-nemo?activeTab=readme)
- [Dashboard](https://tracker-dashboard.site/login)
- [Server](https://tracker-server.site) _(서버 상태에 따라 접근이 제한될 수 있습니다.)_

---
## 🛠️ 기술 스택

### 🚀 Frontend
 - **React 19** - UI 라이브러리
 - **TypeScript** - 타입 안정성 
 - **Vite** - 번들링 및 개발 서버
 - **Tailwind CSS** - 유틸리티 css 프레임워크
 - **React Query** - 서버 상태 관리 및 데이터 fetching
 - **Tanstack React-Router** - SPA 라우팅
 - **Recharts** - 데이터 시각화 Chart
 - **React Icons** - 아이콘
 - **React Hook Form** - 폼 상태 관리
 - **React Toastify** - 토스트 알림
 - **Axios** - API 통신

### ☁️ 배포
 - **Cloud Front, S3** - Frontend 정적 파일 배포 및 CDN

### ⚙️ CI/CD
 - **GitHub Actions** - 자동 빌드 및 배포 파이프라인

---

## 💡 주요기능 
 - 실시간 사용자 수 집계
 - 방문자 국가 통계, 언어 통계, 해상도 분석 통계
 - 이탈자 페이지 위치 통계
 - 반응형 레이아웃 (모바일 / 태블릿 / PC)
 - 재방문률
 - 총 방문자 통계, 실제 방문자 통계
 - 유입 경로 통계
 - 장치 종류 통계, 운영체제 종류 통계, 브라우저 종류 통계
 - 날짜별 방문 페이지 통계, 날짜별 실제 방문자 수 및 총 방문자 수 통계
 - API key 복사
 - 회원가입 / 로그인 

---

 ## ⚙️ 설치 및 실행 방법
 https://tracker-dashboard.site/login

 ### Tracker SDK 실행
  1. npm install tracker-sdk-nemo@latest 설치
  2. TrackerWrapper 컴포넌트 생성 
  3. useEffect내부에 tracker.init('apiKey 작성')
  4. 상위 컴포넌트 trackerWrapper로 감싸기 

  ```ts
  import Tracker from 'tracker-sdk-nemo'

  useEffect(() => {
    Tracker.init('복사한 API Key')
  }, [])

 ### Tracker Dashboard 실행
  1. 회원가입
  2. 나의정보 이동 
  3. APIKey 복사
 



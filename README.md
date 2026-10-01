# ⚡ Hyegang Kwon — Engineering Portfolio

> **High-Performance Spatial Web & Resilient Frontend Architecture**  
> 복잡한 도메인 데이터와 3D 공간 인프라를 직관적인 사용자 경험과 고성능 웹 아키텍처로 구현하는 프론트엔드 엔지니어 권혜강의 포트폴리오 저장소입니다.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://hyegang-dev.netlify.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React_18_|_TypeScript_|_Tailwind_CSS-38BDF8?style=flat-square)](https://github.com/strongsun806/hyegang-portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-strongsun806-181717?style=flat-square&logo=github)](https://github.com/strongsun806)

---

## 🛠️ Core Tech Stack

- **Frontend & UI:** React 18, TypeScript, Tailwind CSS, Vite, Lucide Icons
- **3D & Graphics:** Three.js, React Three Fiber (R3F), HTML5 Canvas 2D Physics Engine
- **State & Architecture:** Zustand, Web Workers (Non-blocking Data Pipeline), WebSocket
- **Deployment & CI/CD:** Netlify, Git / GitHub Actions

---

## 📌 Featured Highlights

### 1. Flagship Engineering Projects

#### 🔷 FINDER — Digital Twin 3D Monitoring & Spatial Platform
* 대규모 센서 스트림 및 공간 인프라 데이터를 브라우저 3D 뷰포트에 가상화하여 실시간 모니터링을 지원하는 디지털 트윈 플랫폼
* **Key Achievements:**
  - `InstancedMesh` 배칭 기법을 적용해 1,400+ 노드 환경에서 **Draw Call 95% 감축 및 60 FPS 유지**
  - 대량의 실시간 좌표 스트림을 **Web Worker 백그라운드 스레드로 분리**하여 메인 UI 스레드 Freezing 방지
  - Raycasting 기반 3D 피킹 및 LOD(Level of Detail) 알고리즘 적용

#### 🔷 Port Scrap — Automated Port Logistics Settlement & Rate Platform
* 부산항 등 컨테이너 터미널과 포워더 간 수기 전표·이메일 중심의 비효율적 물류비 정산 프로세스를 자동화한 B2B 핀테크 플랫폼
* **Key Achievements:**
  - 기산일·보관일수·할증(유류/야간/과적) 조건을 실시간 연산하는 **Rule Engine 기반 요율 계산기** 구현 (<15ms)
  - ISO 6346 규격 기반 컨테이너 체크디지트 검증 및 B/L 형식 검증 파이프라인 설계
  - `READY → PAID → CONFIRMED` 결제 승인 및 반출 HOLD 자동 해제 파이프라인 연계

---

### 2. Interactive Web & Service Planning

* **LocalHub:** Vue 3, Kakao Maps API, OpenAI API를 결합한 지역 관광 큐레이션 및 AI 챗봇 웹 서비스 (Netlify 배포)
* **시냅스(Synapse) 파크:** Vision AI 기반 군중 밀집도 모니터링 및 테마파크(에버랜드) AI 컨시어지 서비스 기획
* **폼폼푸린 인터랙티브 UI:** Vanilla JS/CSS 마이크로 인터랙션과 커스텀 위젯 애니메이션 연구

---

### 3. Engineering Lab & Automation

* **swea-picker bot:** 삼성 SW Expert Academy(SWEA) 알고리즘 스터디를 위한 난이도별(D1~D4) 문제 랜덤 큐레이션 및 운영 자동화 봇
* **AI & Data Science Archive:** PyMuPDF 기반 문서 파싱 & RAG 파이프라인 실험, Scikit-learn 회귀 모델 및 데이터 전처리(Pandas)
* **Spatial Dynamics Lab:** 브라우저 Canvas 상에서 N-Body 유클리드 거리 기반 토폴로지 연결과 중력장/척력 벡터 물리 엔진을 직접 구동하는 실시간 인터랙션 실험실

---

### 4. Tech Instruction & Mentorship

수강생의 눈높이에 맞춘 체감형 커리큘럼 설계 및 라이브 디버깅 코칭 경험

* **대학생 대상 AI 컴퓨터 비전 실습 지도:** 영상 프레임 전처리부터 실시간 객체 탐지(Object Detection) 모델 추론까지 파이프라인 구현 지도 및 레이턴시 병목 트러블슈팅
* **도원고등학교 출강:** 근전도(EMG) 센서 신호 수집 및 3채널 서보모터 독립 제어(엄지/검지/세 손가락) 기반 바이오닉 핸드 가위바위보 제어 워크숍
* **문경여자고등학교 출강:** Python Pygame 기반 떨어지는 공 회피(Dodge) 2D 게임 개발 및 충돌 감지(`colliderect`) 루프 실습
* **마산 용마고등학교 출강:** 적외선(IR) 센서 배열 데이터 판별 및 DC 모터 드라이버 차동 제어 기반 자율 주행 스마트 RC카 라인트레이싱 워크숍

---

## 💻 Local Development

```bash
# 1. 저장소 클론
git clone [https://github.com/strongsun806/hyegang-portfolio.git](https://github.com/strongsun806/hyegang-portfolio.git)

# 2. 의존성 패키지 설치
cd hyegang-portfolio
npm install

# 3. 로컬 개발 서버 실행
npm run dev

# 4. 프로덕션 빌드
npm run build
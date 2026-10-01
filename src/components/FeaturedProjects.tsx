import { useState } from 'react';
import { 
  Boxes, 
  MapPin, 
  Sparkles, 
  Bot, 
  Database, 
  ExternalLink,
  Cpu
} from 'lucide-react';

export const FeaturedProjects = () => {
  const [activeFinderTab, setActiveFinderTab] = useState<'orbit' | 'picking' | 'stream'>('orbit');

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-zinc-100 space-y-36">
      
      {/* ========================================================================= */}
      {/* 01. FLAGSHIP 1: FINDER (Digital Twin)                                     */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
            Flagship Engineering 01
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
                FINDER
              </h2>
              <p className="text-base text-cyan-400 font-mono">
                Digital Twin 3D Monitoring & Spatial Platform
              </p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              대규모 센서 스트림 및 공간 인프라 데이터를 브라우저 3D 뷰포트에 가상화하여 실시간 모니터링 및 시각적 추적을 지원하는 디지털 트윈 플랫폼입니다.
            </p>

            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">Rendering</div>
                <div className="text-lg font-bold text-white mt-1">60 FPS</div>
                <div className="text-[11px] text-zinc-400">InstancedMesh</div>
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">Draw Calls</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">95% ↓</div>
                <div className="text-[11px] text-zinc-400">Batching</div>
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">Data Thread</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">Worker</div>
                <div className="text-[11px] text-zinc-400">Zero UI Freeze</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-500">Tech Architecture</div>
              <div className="flex flex-wrap gap-1.5">
                {['Three.js', 'React Three Fiber', 'TypeScript', 'Web Workers', 'WebSocket', 'Zustand', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://finder-demo.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors rounded-lg shadow-sm"
              >
                Live Demo ↗
              </a>
              <a
                href="https://github.com/strongsun806"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 transition-colors rounded-lg"
              >
                GitHub Source ↗
              </a>
            </div>
          </div>

          {/* 우측: 공백을 채운 인터랙티브 테크 캔버스 시뮬레이터 */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col justify-between p-6">
              {/* 배경 3D 디지털 그리드 효과 */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

              {/* 중앙 동적 3D 노드 시각화 */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
                <div className="relative flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-cyan-500/30 animate-ping absolute" />
                  <div className="w-20 h-20 rounded-full border border-cyan-400/50 flex items-center justify-center bg-cyan-950/40 backdrop-blur-md">
                    <Boxes className="w-9 h-9 text-cyan-400 animate-pulse" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <div className="font-mono text-sm font-bold text-white tracking-wide">
                    {activeFinderTab === 'orbit' && 'SPATIAL ORBIT & INSTANCED 3D SCENE'}
                    {activeFinderTab === 'picking' && 'HIGH-PRECISION RAYCASTING PICKER'}
                    {activeFinderTab === 'stream' && 'WEB WORKER TELEMETRY STREAMING'}
                  </div>
                  <div className="font-mono text-xs text-zinc-500">
                    Real-time Coordinate Ingestion Active
                  </div>
                </div>
              </div>

              {/* HUD 오버레이 지표 */}
              <div className="relative z-10 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700/50 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  RENDER: 60.0 FPS
                </div>
                <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700/50 text-[11px] font-mono text-zinc-300">
                  ACTIVE NODES: 1,480 (INSTANCED)
                </div>
              </div>
            </div>

            {/* 시점 탭 전환 */}
            <div className="flex items-center justify-between p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
              <span className="text-xs font-mono text-zinc-500 pl-3">VIEW MODE:</span>
              <div className="flex gap-1">
                {(['orbit', 'picking', 'stream'] as const).map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFinderTab(tab)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      activeFinderTab === tab ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {idx + 1}. {tab === 'orbit' ? '공간 오빗 & LOD' : tab === 'picking' ? 'Raycasting 피킹' : '워커 실시간 스트림'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 02. FLAGSHIP 2: Port Scrap (Logistics & Rate Fintech)                     */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
            Flagship Engineering 02
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 p-4 sm:p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-zinc-500">Port Scrap — Automated Settlement Console</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Rule Engine: ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Container Verification</div>
                  <div className="text-sm font-mono text-white font-bold">ISO 6346 Checked</div>
                  <div className="text-[11px] text-zinc-400">B/L Format Validation & Status Check</div>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Settlement Pipeline</div>
                  <div className="text-sm font-mono text-cyan-400 font-bold">READY → CONFIRMED</div>
                  <div className="text-[11px] text-zinc-400">Automated Release Approval</div>
                </div>
              </div>

              <div className="p-3 rounded bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Rate Engine Latency (기산일·보관료·할증 계산)</span>
                <span className="text-cyan-400 font-bold">&lt; 15ms Real-time</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
                Port Scrap
              </h2>
              <p className="text-base text-blue-400 font-mono">
                Port Logistics Automated Settlement & Rate Platform
              </p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              부산항 등 컨테이너 터미널과 포워더 간 수기 전표·이메일 중심의 비효율적 항만물류비(경과보관료·하역료) 정산 프로세스를 자동화하고, 실시간 Rule Engine 기반 요율 산출 및 결제·반출 검증 파이프라인을 구축한 핀테크 플랫폼입니다.
            </p>

            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">RATE ENGINE</div>
                <div className="text-lg font-bold text-white mt-1">Rule-based</div>
                <div className="text-[11px] text-zinc-400">Real-time Calc</div>
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">VALIDATION</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">ISO 6346</div>
                <div className="text-[11px] text-zinc-400">Check Digit</div>
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">SETTLEMENT</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">Automated</div>
                <div className="text-[11px] text-zinc-400">PG & HOLD Release</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-500">Tech Architecture</div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'State Machine', 'Tailwind CSS', 'Fintech API', 'Rule Engine'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://portscrap.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors rounded-lg shadow-sm"
              >
                Service Overview ↗
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 transition-colors rounded-lg"
              >
                GitHub Source ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 03. APPLIED WEB APPS & AI SERVICE PLANNING (LocalHub, Synapse, Pompom)    */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
            Interactive Apps & AI Services 03
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: LocalHub */}
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">LocalHub</h3>
              <p className="text-xs font-mono text-emerald-400">Regional Tourism Web App</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                구미 및 경북 지역 타깃 관광 정보 웹 서비스. Kakao Maps API 기반 위치 시각화 및 OpenAI API를 결합한 관광 챗봇 구축. Netlify 프로덕션 배포.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-1">
                {['Vue 3', 'Kakao Maps API', 'OpenAI API', 'Netlify'].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                <a href="#" className="hover:text-white inline-flex items-center gap-1">Demo <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </div>

          {/* Card 2: Synapse Park */}
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">시냅스(Synapse) 파크</h3>
              <p className="text-xs font-mono text-indigo-400">Everland AI Planning & Vision AI</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                에버랜드 테마파크 대상 비즈니스 기획 및 AI 서비스 프로젝트. Vision AI 기반 군중 밀집도 모니터링 시나리오와 LLM 연계 AI 컨시어지 경험 설계.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-1">
                {['Vision AI', 'Crowd Analysis', 'LLM Concierge', 'Service UX'].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500">Service Planning & Architecture</span>
              </div>
            </div>
          </div>

          {/* Card 3: Pompompurin Interactive */}
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">폼폼푸린 인터랙티브 UI</h3>
              <p className="text-xs font-mono text-amber-400">Theme Widget & Custom Animation</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                캐릭터 테마 기반 감각적인 프론트엔드 인터랙션과 커스텀 위젯 구현. 마이크로 인터랙션과 정밀한 CSS 스타일링을 통한 사용자 경험 극대화.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-1">
                {['JavaScript', 'CSS Animation', 'Micro-interaction', 'UI Widget'].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-1 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                <a href="#" className="hover:text-white inline-flex items-center gap-1">Widget Live <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 04. ENGINEERING LAB: BOT AUTOMATION & AI / DATA ARCHIVE                   */}
      {/* ========================================================================= */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <span className="px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
            Engineering Lab & Archive 04
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: swea-picker Bot */}
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded">
                Automation Tool
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">swea-picker bot</h3>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">SWEA Problem Curator & Automation</p>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              삼성 SW Expert Academy(SWEA) 코딩 테스트 준비 스터디를 위한 알고리즘 자동 픽커 봇. 난이도별(D1~D4) 문제 랜덤 선별 및 스터디원 과제 큐레이션 파이프라인 자동화.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'Web Scraping', 'Automation Bot', 'Algorithm Ops'].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: AI & Data Science Archive */}
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded">
                RAG & Machine Learning
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AI & Data Analytics Archive</h3>
              <p className="text-xs font-mono text-purple-400 mt-0.5">RAG Parsing, ML Regression & Problem Solving</p>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              PyMuPDF 기반 문서 파싱 및 RAG(검색 증강 생성) 파이프라인 실험, Scikit-learn 회귀 분석 및 데이터 전처리(Pandas), SWEA 알고리즘 문제 해결 풀이 아카이브.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'Pandas', 'Scikit-learn', 'PyMuPDF', 'RAG Pipeline'].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FeaturedProjects;
import { useState } from 'react';
import { 
  Boxes, 
  MapPin, 
  Sparkles, 
  Bot, 
  Database, 
  ExternalLink,
  Cpu,
  ShieldCheck,
  Radio,
  Volume2
} from 'lucide-react';

export const FeaturedProjects = () => {
  const [activeFinderTab, setActiveFinderTab] = useState<'orbit' | 'picking' | 'stream'>('orbit');
  const [activeSafeCityTab, setActiveSafeCityTab] = useState<'dualpath' | 'verifier' | 'multilingual'>('dualpath');

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-zinc-100 space-y-36">

      {/* ========================================================================= */}
      {/* 00. SPECIAL HIGHLIGHT: 2026 GOOGLE DEEPMIND AI HACKATHON (SafeCity AI)    */}
      {/* ========================================================================= */}
      <div id="hackathon" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-purple-500/15 text-purple-300 border border-purple-500/30 rounded flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            2026 Google DeepMind AI Hackathon
          </span>
          <span className="text-xs font-mono text-emerald-400 hidden sm:inline">
            Track 3: Google AI for Social Good
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 mb-1.5">
                <span>OFFICIAL HACKATHON SUBMISSION · GDM_HACK1</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
                SafeCity AI
              </h2>
              <p className="text-base text-purple-300 font-mono">
                Autonomous 3D Underground Disaster &amp; Accessible Evacuation Digital Twin
              </p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              시간당 110mm 극한호우나 지하철 화재 시 180초 만에 폭포(`&gt;2.7m/s`)로 변하는 계단에서 고립되는 휠체어 이용자·고령자·외국인을 구하기 위해 설계된 <strong className="text-zinc-200">실시간 3D 지하역사 재난 관제 및 배리어프리 대피 디지털 트윈</strong>입니다.{' '}
              <strong className="text-purple-300">Gemini 4 Argon의 1M 통합 컨텍스트(418.2k 토큰: 184p 역사 CAD 도면 + 기상청 레이더 + 24개 IoT 수위 센서)</strong>를 기반으로 일반 승객(106명)과 교통약자(14명, IP68 방수 엘리베이터 #3)의 3D 대피 경로를 분리 생성하고, <strong className="text-emerald-400">Companion Safety Verifier 루프</strong>로 물리적 안전성을 검증합니다.
            </p>

            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">1M Context</div>
                <div className="text-lg font-bold text-purple-300 mt-1">418.2k</div>
                <div className="text-[11px] text-zinc-400">CAD + IoT Fusion</div>
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">Safety Audit</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">99.6%</div>
                <div className="text-[11px] text-zinc-400">Verifier + HITL</div>
              </div>
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-[11px] text-zinc-500 font-mono uppercase">3D Twin &amp; PA</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">60 FPS</div>
                <div className="text-[11px] text-zinc-400">KO·EN·JA·ZH Voice</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-500">Tech Architecture</div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Gemini 4 Argon (1M Context)',
                  'Next.js 14',
                  'Three.js / R3F',
                  'Safety Verifier Loop',
                  'Gemma 3 On-Device Fallback',
                  'Web Speech API (4-Lang)',
                  'Google Cloud Run',
                  'Docker'
                ].map((tech) => (
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
                href="https://github.com/strongsun806/GDM_HACK1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors rounded-lg shadow-sm"
              >
                GitHub Source (GDM_HACK1) ↗
              </a>
            </div>
          </div>

          {/* 우측: SafeCity AI 3D 지하역사 디지털 트윈 관제 시뮬레이터 */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-purple-500/30 bg-zinc-950 shadow-2xl p-5 sm:p-6 space-y-4">
              {/* 상단 관제 헤더 */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-xs font-mono font-bold text-white">
                    YEOUIDO B2 METRO TWIN — GOLDEN TIME 05:40
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  HITL COMMANDER: APPROVED
                </span>
              </div>

              {/* 탭별 시뮬레이션 뷰 */}
              {activeSafeCityTab === 'dualpath' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-emerald-500/30 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-emerald-400 font-bold">● NEON GREEN TUBE (일반 승객)</span>
                        <span className="text-zinc-400">106명 대피</span>
                      </div>
                      <div className="text-white font-semibold">고지대 동측 4번 출구 프리패스 개방</div>
                      <div className="text-[11px] text-zinc-400">
                        서측 1번 출구 계단 폭포 유입(2.7m/s) 감지 ➔ 차수판(Floodgate) 자동 기립 및 우회 유도
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-amber-400/40 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-amber-300 font-bold">● NEON YELLOW TUBE (교통약자)</span>
                        <span className="text-zinc-400">14명 보호</span>
                      </div>
                      <div className="text-white font-semibold">IP68 방수·양압 엘리베이터 #3 직결</div>
                      <div className="text-[11px] text-zinc-400">
                        휠체어·고령자 전용 ADA 완경사(&le;1/20) 보장 경로 및 지상 안전 구역 수직 이송
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="text-cyan-300 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      3D MeshPhysicalMaterial 수면 파동 &amp; 360+ 폭포 파티클 렌더링
                    </span>
                    <span className="text-zinc-400">CAM: 4-Angle Tactical Switcher</span>
                  </div>
                </div>
              )}

              {activeSafeCityTab === 'verifier' && (
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-purple-500/30 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-purple-300">
                    <span className="flex items-center gap-1.5 font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> 2-STAGE COMPANION SAFETY VERIFIER LOOP
                    </span>
                    <span className="text-[10px] bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/30">
                      CONFIDENCE: 99.6%
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800">
                      <div className="text-purple-400 font-bold">1. Primary Planner</div>
                      <div className="text-white mt-0.5">gemini-4-argon</div>
                      <div className="text-zinc-500 text-[10px] mt-0.5">1M 컨텍스트 3D 벡터 탐색</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950 border border-emerald-500/30">
                      <div className="text-emerald-400 font-bold">2. Safety Verifier</div>
                      <div className="text-white mt-0.5">gemini-2.0-flash</div>
                      <div className="text-zinc-500 text-[10px] mt-0.5">위험반경(&gt;3.8m)·경사도 교정</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950 border border-cyan-500/30">
                      <div className="text-cyan-400 font-bold">3. Edge Fallback</div>
                      <div className="text-white mt-0.5">gemma-3-4b-it</div>
                      <div className="text-zinc-500 text-[10px] mt-0.5">무지연 오프라인 안전망</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    • 생성된 모든 3D 노드가 침수 위험 구역(3.8m 이내)을 침범할 경우 렌더링 전 자동으로 좌표를 자가 교정(Self-Correction)합니다.
                  </div>
                </div>
              )}

              {activeSafeCityTab === 'multilingual' && (
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-cyan-500/30 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-cyan-300">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Volume2 className="w-4 h-4" /> 4-LANGUAGE EMERGENCY PA &amp; UAV-01 DRONE
                    </span>
                    <span className="text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      KO · EN · JA · ZH LIVE TTS
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 space-y-1">
                      <div className="text-amber-300 font-bold">[KO / EN 실시간 음성 안내]</div>
                      <div className="text-zinc-300">&quot;휠체어 이용자 14분은 방수 엘리베이터 3호기로 즉시 이동하십시오.&quot;</div>
                      <div className="text-zinc-500 text-[10px]">&quot;CODE RED FLOOD: Proceed to Waterproof Elevator #3...&quot;</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 space-y-1">
                      <div className="text-cyan-300 font-bold">[UAV-01 Argon Scout 자율 드론]</div>
                      <div className="text-zinc-300">Target Lock: [-11.5, 3.9, 8.5]</div>
                      <div className="text-zinc-500 text-[10px]">환승통로 2차 전기 화재 발생 시 열화상 서치라이트 추적 및 실시간 재라우팅</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 하단 상태 표시 */}
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
                <span>MODEL: Gemini 4 Argon + Companion Verifier</span>
                <span className="text-emerald-400 font-bold">EVACUATION: 120 / 120 TRACED</span>
              </div>
            </div>

            {/* 시점 탭 전환 */}
            <div className="flex items-center justify-between p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
              <span className="text-xs font-mono text-zinc-500 pl-3">TWIN MODE:</span>
              <div className="flex gap-1">
                {(['dualpath', 'verifier', 'multilingual'] as const).map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSafeCityTab(tab)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      activeSafeCityTab === tab ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {idx + 1}. {tab === 'dualpath' ? '듀얼 3D 대피 경로' : tab === 'verifier' ? 'Safety Verifier 루프' : '4개국어 음성 & 드론'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                Digital Twin 3D Monitoring &amp; Spatial Platform
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
                href="https://github.com/strongsun806"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors rounded-lg shadow-sm"
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
                  <div className="text-[11px] text-zinc-400">B/L Format Validation &amp; Status Check</div>
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
                Port Logistics Automated Settlement &amp; Rate Platform
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
                <div className="text-[11px] text-zinc-400">PG &amp; HOLD Release</div>
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
                href="https://github.com/strongsun806"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors rounded-lg shadow-sm"
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
            Interactive Apps &amp; AI Services 03
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
                <a href="https://github.com/strongsun806" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
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
              <p className="text-xs font-mono text-indigo-400">Everland AI Planning &amp; Vision AI</p>
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
                <span className="text-zinc-500">Service Planning &amp; Architecture</span>
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
              <p className="text-xs font-mono text-amber-400">Theme Widget &amp; Custom Animation</p>
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
                <a href="https://github.com/strongsun806" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
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
            Engineering Lab &amp; Archive 04
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
              <p className="text-xs font-mono text-cyan-400 mt-0.5">SWEA Problem Curator &amp; Automation</p>
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
                RAG &amp; Machine Learning
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AI &amp; Data Analytics Archive</h3>
              <p className="text-xs font-mono text-purple-400 mt-0.5">RAG Parsing, ML Regression &amp; Problem Solving</p>
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

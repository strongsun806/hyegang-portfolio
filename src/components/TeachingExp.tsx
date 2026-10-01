import { Eye, Users, Gamepad2, Navigation, Activity, ShieldCheck } from 'lucide-react';

export const TeachingExp = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-zinc-100 space-y-16">
      {/* 1. 상단 라벨 & 타이틀 헤더 */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
            03 / INSTRUCTION & MENTORSHIP
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              기술을 실체로 전달하는 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                핸즈온 교육과 멘토링.
              </span>
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
              복잡한 비전 알고리즘과 피지컬 컴퓨팅 하드웨어 제어 지식을 수강생의 눈높이에 맞춰 체감형 실습으로 설계했습니다. 
              단순 지식 전달에 그치지 않고 환경 설정부터 실시간 에러 디버깅까지 책임지며 전원 완주를 이끌어냈습니다.
            </p>
          </div>

          <div className="lg:col-span-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Users className="w-4 h-4" />
              <span>핵심 티칭 강점</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              • 수강생별 OS/환경 차이에 따른 의존성 충돌 실시간 트러블슈팅<br />
              • 하드웨어 핀 배선 오류 및 센서 신호 노이즈 시각적 디버깅 지도
            </p>
          </div>
        </div>
      </div>

      {/* 2. 강의 이력 와이드 카드 리스트 */}
      <div className="space-y-6">

        {/* ========================================================================= */}
        {/* Track 01: 대학생 AI 컴퓨터 비전 실습                                       */}
        {/* ========================================================================= */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  UNIVERSITY TRACK
                </span>
                <span className="text-xs font-mono text-zinc-500">대학생 대상 심화 실습</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  AI 컴퓨터 비전(Computer Vision) 실습 지도
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  영상 처리 파이프라인 구축 & 실시간 객체 인식 모델 추론 코칭
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                영상 프레임 캡처, 전처리(Filtering & Resize), 객체 탐지(Object Detection) 모델 추론까지 이어지는 비전 파이프라인을 대학생 수강생들이 직접 코드로 구현하도록 지도했습니다. 
                특히 가상환경 라이브러리 충돌 및 실시간 웹캠 렌더링 시 발생하는 지연(Latency) 병목 현상을 실시간 코칭하며 전원 실습 과제를 성공적으로 완주하도록 이끌었습니다.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Computer Vision', 'OpenCV', 'Python', 'Object Detection', 'Live Debugging', 'Pipeline Opt'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-52 rounded-xl overflow-hidden border border-zinc-800 bg-[#060a10] p-4 flex flex-col justify-between font-mono select-none">
                <div className="absolute inset-2 border border-cyan-500/20 rounded pointer-events-none" />
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-24 border border-dashed border-cyan-400/60 rounded flex flex-col items-center justify-center bg-cyan-950/20 backdrop-blur-[1px] animate-pulse">
                    <Eye className="w-6 h-6 text-cyan-400 mb-1" />
                    <span className="text-[10px] text-cyan-300">DETECTED: 98.4%</span>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    FRAME FEED: 1080p
                  </span>
                  <span>FPS: 60.0</span>
                </div>
                <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>MODEL: YOLO / OpenCV DNN</span>
                  <span>LATENCY: 14ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Track 02: 도원고 - 아두이노 전자의수 제어 (EMG 센서 & 3모터 가위바위보)     */}
        {/* ========================================================================= */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  DOWON HIGH SCHOOL
                </span>
                <span className="text-xs font-mono text-zinc-500">도원고등학교 출강 특강</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  아두이노 기반 전자의수(Bionic Hand) 생체 신호 제어
                </h3>
                <p className="text-xs font-mono text-amber-400 mt-1">
                  근전도(EMG) 센서 근육 악력 감지 · 3채널 서보모터 가위바위보 제스처 구현
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                팔에 근전도(EMG) 센서를 부착하여 수축하는 근육 신호와 악력 강도를 읽어내고, 총 3개의 서보모터(엄지 / 검지 / 나머지 세 손가락)를 독립 제어하여 가위·바위·보 손동작을 완성하는 워크숍을 지도했습니다. 
                생체 아날로그 신호의 노이즈 필터링(Threshold 판별 알고리즘)과 3채널 PWM 각도 맵핑을 직관적인 예제로 풀어내어 학생들의 높은 몰입도를 이끌어냈습니다.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Arduino', 'EMG Muscle Sensor', '3-Servo Control', 'Gesture (Rock-Paper-Scissors)', 'PWM Mapping', 'Noise Filtering'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측 테크 비주얼: 근전도 강도 & 3모터 가위바위보 HUD */}
            <div className="lg:col-span-5">
              <div className="relative h-56 rounded-xl overflow-hidden border border-zinc-800 bg-[#0d0a06] p-4 flex flex-col justify-between font-mono select-none">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-amber-400" /> EMG BIO-SIGNAL & 3-SERVO
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> ACTIVE
                  </span>
                </div>

                {/* EMG 센서 악력 강도 바 */}
                <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800/80 space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-zinc-400">팔 근육 수축도 (EMG Intensity)</span>
                    <span className="text-amber-300 font-bold">78% [PEAK]</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-rose-400 w-[78%] animate-pulse" />
                  </div>
                </div>

                {/* 3채널 모터 구동 상태 */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">MOTOR 1</div>
                    <div className="text-white font-bold mt-0.5">엄지 (Thumb)</div>
                    <div className="text-amber-400 text-[10px] mt-1 font-mono">180° [접힘]</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">MOTOR 2</div>
                    <div className="text-white font-bold mt-0.5">검지 (Index)</div>
                    <div className="text-cyan-400 text-[10px] mt-1 font-mono">0° [펴짐]</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">MOTOR 3</div>
                    <div className="text-white font-bold mt-0.5">중지·약지·소지</div>
                    <div className="text-amber-400 text-[10px] mt-1 font-mono">180° [접힘]</div>
                  </div>
                </div>

                {/* 제스처 판정 결과 */}
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-zinc-800">
                  <span className="text-zinc-500">DETECTED GESTURE:</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    ✌ SCISSORS (가위)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Track 03: 문경여고 - 떨어지는 공 피하기 파이게임(Pygame)                      */}
        {/* ========================================================================= */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 shadow-xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  MUNGYEONG GIRLS' HIGH SCHOOL
                </span>
                <span className="text-xs font-mono text-zinc-500">문경여자고등학교 출강 특강</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  Python Pygame 떨어지는 공 회피(Dodge) 게임 개발
                </h3>
                <p className="text-xs font-mono text-rose-400 mt-1">
                  중력 낙하 알고리즘 · 좌우 키 입력 리스너 & 실시간 충돌 감지 로직 구현
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                파이썬 기본 문법을 활용해 상단에서 무작위 위치로 낙하하는 공들을 하단 플레이어가 좌우 방향키로 민첩하게 피하는 2D 닷지(Dodge) 게임을 제작했습니다. 
                `pygame.time.Clock` 프레임 틱 조절, `pygame.KEYDOWN` 이벤트 핸들링, `Rect.colliderect` 충돌 판정 알고리즘을 학생들이 직접 작성하며 프로그래밍의 실시간 그래픽 피드백을 경험하도록 지도했습니다.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Python', 'Pygame', 'Falling Ball Physics', 'Collision Detection', 'Keyboard Events', 'Game Loop'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측 테크 비주얼: 떨어지는 공 회피 2D 시뮬레이션 */}
            <div className="lg:col-span-5">
              <div className="relative h-56 rounded-xl overflow-hidden border border-zinc-800 bg-[#0d0608] p-4 flex flex-col justify-between font-mono select-none">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="text-rose-400 flex items-center gap-1.5 font-bold">
                    <Gamepad2 className="w-3.5 h-3.5" /> PYGAME FALLING-BALL DODGE
                  </span>
                  <span className="text-rose-300">FPS: 60</span>
                </div>

                {/* 2D 게임 영역 시뮬레이션 */}
                <div className="relative flex-1 rounded border border-zinc-800/80 my-2 overflow-hidden bg-black/40">
                  {/* 상단에서 낙하하는 공들 */}
                  <div className="absolute top-2 left-[20%] w-3.5 h-3.5 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-bounce" />
                  <div className="absolute top-7 left-[55%] w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_6px_#fb7185]" />
                  <div className="absolute top-3 right-[25%] w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" />

                  {/* 하단 플레이어 (좌우 이동 제어) */}
                  <div className="absolute bottom-2 left-[48%] flex flex-col items-center">
                    <div className="px-2.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400 text-[10px] text-emerald-300 font-bold shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                      PLAYER ▲
                    </div>
                  </div>

                  {/* 좌우 이동 방향 힌트 */}
                  <div className="absolute bottom-2 left-2 text-[9px] text-zinc-600">◀ [LEFT]</div>
                  <div className="absolute bottom-2 right-2 text-[9px] text-zinc-600">[RIGHT] ▶</div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-800">
                  <span>COLLISION: SAFE</span>
                  <span className="text-emerald-400 font-bold">SURVIVED: 01:42s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Track 04: 마산 용마고 - 아두이노 스마트 RC카 라인트레이싱                     */}
        {/* ========================================================================= */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/50 transition-all duration-300 shadow-xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  MASAN YONGMA HIGH SCHOOL
                </span>
                <span className="text-xs font-mono text-zinc-500">마산 용마고등학교 출강 특강</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  아두이노 기반 스마트 RC카 라인트레이싱(Line Tracing)
                </h3>
                <p className="text-xs font-mono text-sky-400 mt-1">
                  적외선(IR) 센서 배열 데이터 판별 & L298N 모터 드라이버 차동 제어
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                적외선 라인 트레이서 센서로 검은색 바닥 가이드라인을 추적하여 자율 주행하는 스마트 RC카 제작을 이끌었습니다. 
                좌우 바퀴의 속도 차를 제어하는 차동 구동(Differential Drive) 원리와 센서 임계치 설정 방법을 지도하고, 학생들이 주행 트랙에서 탈선하지 않고 완주할 수 있도록 현장에서 피드백을 제공했습니다.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Arduino', 'Infrared (IR) Sensors', 'DC Motor Driver', 'Line Tracing', 'Autonomous RC Car', 'Differential Drive'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측 테크 비주얼: 역동적인 탑뷰 RC카 섀시 & 트랙 주행 HUD */}
            <div className="lg:col-span-5">
              <div className="relative h-56 rounded-xl overflow-hidden border border-zinc-800 bg-[#060a12] p-4 flex flex-col justify-between font-mono select-none">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="text-sky-400 flex items-center gap-1.5 font-bold">
                    <Navigation className="w-3.5 h-3.5" /> LINE TRACER TELEMETRY
                  </span>
                  <span className="text-emerald-400 font-bold animate-pulse">AUTONOMOUS RUN</span>
                </div>

                {/* 탑뷰 주행 트랙 & RC카 시뮬레이터 */}
                <div className="relative flex-1 my-2 rounded border border-zinc-800/80 bg-zinc-950/70 overflow-hidden flex items-center justify-center">
                  {/* 검은 가이드라인 트랙 곡선 */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path
                      d="M 10 70 Q 70 20, 100 50 T 190 30"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="12"
                    />
                    <path
                      d="M 10 70 Q 70 20, 100 50 T 190 30"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="2.5"
                      strokeDasharray="4 3"
                    />
                  </svg>

                  {/* 트랙 위 RC카 섀시 (헤드라이트 & 센서 빔) */}
                  <div className="relative z-10 flex flex-col items-center transform rotate-12">
                    {/* 전방 IR 센서 빔 */}
                    <div className="w-10 h-4 bg-gradient-to-t from-sky-400/30 to-transparent blur-xs rounded-t-full" />
                    {/* 차체 */}
                    <div className="w-14 h-18 bg-zinc-900 border border-sky-400/60 rounded-md shadow-[0_0_15px_rgba(56,189,248,0.25)] flex flex-col items-center justify-between p-1">
                      <div className="flex justify-between w-full px-1">
                        <div className="w-1 h-3 bg-sky-400 rounded-xs" />
                        <div className="w-1 h-3 bg-sky-400 rounded-xs" />
                      </div>
                      <span className="text-[8px] text-sky-300 font-bold">RC-01</span>
                      <div className="flex justify-between w-full px-1">
                        <div className="w-1 h-3 bg-zinc-600 rounded-xs" />
                        <div className="w-1 h-3 bg-zinc-600 rounded-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1 border-t border-zinc-800">
                  <span>IR TRACKING: LOCK</span>
                  <span className="text-sky-300 font-bold">PWM: L(190) R(175)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeachingExp;
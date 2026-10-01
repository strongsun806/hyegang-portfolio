import { useEffect, useRef, useState } from 'react';
import { RotateCcw, Activity, Zap, Radio, Sliders } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseColor: string;
}

export const InteractiveLab = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [nodeCount, setNodeCount] = useState<number>(45);
  const [gravityMode, setGravityMode] = useState<'attract' | 'repel' | 'orbit'>('attract');
  const [fps, setFps] = useState<number>(60);
  const [activeConnections, setActiveConnections] = useState<number>(0);

  const mousePos = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCounter = 0;

    // 반응형 캔버스 크기 맞춤
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const rect = canvas.getBoundingClientRect();
    const colors = ['#22d3ee', '#38bdf8', '#818cf8', '#34d399'];

    // 파티클 초기화
    const particles: Particle[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 2 + 1.8,
      baseColor: colors[Math.floor(Math.random() * colors.length)],
    }));

    const render = () => {
      const now = performance.now();
      frameCounter++;
      if (now - lastTime >= 1000) {
        setFps(frameCounter);
        frameCounter = 0;
        lastTime = now;
      }

      const clientW = canvas.width / window.devicePixelRatio;
      const clientH = canvas.height / window.devicePixelRatio;

      // 캔버스 클리어 및 잔상 효과
      ctx.fillStyle = 'rgba(7, 10, 15, 0.28)';
      ctx.fillRect(0, 0, clientW, clientH);

      let connectionCount = 0;

      // 물리 업데이트 및 렌더링
      particles.forEach((p, i) => {
        // 기본 관성 이동
        p.x += p.vx;
        p.y += p.vy;

        // 벽면 바운스
        if (p.x < 0 || p.x > clientW) p.vx *= -1;
        if (p.y < 0 || p.y > clientH) p.vy *= -1;

        // 마우스 인터랙션 물리 연산
        if (mousePos.current.active) {
          const dx = mousePos.current.x - p.x;
          const dy = mousePos.current.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 180 && dist > 5) {
            const force = (180 - dist) / 180;
            const angle = Math.atan2(dy, dx);

            if (gravityMode === 'attract') {
              p.vx += Math.cos(angle) * force * 0.45;
              p.vy += Math.sin(angle) * force * 0.45;
            } else if (gravityMode === 'repel') {
              p.vx -= Math.cos(angle) * force * 0.8;
              p.vy -= Math.sin(angle) * force * 0.8;
            } else if (gravityMode === 'orbit') {
              p.vx += -Math.sin(angle) * force * 0.55;
              p.vy += Math.cos(angle) * force * 0.55;
            }
          }
        }

        // 감속 마찰계수
        p.vx *= 0.985;
        p.vy *= 0.985;

        // 노드 간 토폴로지 연결선 계산
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 85) {
            connectionCount++;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 85) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // 노드 포인트 드로잉
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.baseColor;
        ctx.shadowColor = p.baseColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 마우스 포인터 중심 인력장 가이드 링
      if (mousePos.current.active) {
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 45, 0, Math.PI * 2);
        ctx.strokeStyle =
          gravityMode === 'attract'
            ? 'rgba(34, 211, 238, 0.4)'
            : gravityMode === 'repel'
            ? 'rgba(244, 63, 94, 0.4)'
            : 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      setActiveConnections(connectionCount);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodeCount, gravityMode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mousePos.current.active = false;
  };

  const handleReset = () => {
    setNodeCount(45);
    setGravityMode('attract');
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-zinc-100">
      {/* 라벨 헤더 */}
      <div className="flex items-center gap-3 mb-10">
        <span className="px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
          02 / SPATIAL DYNAMICS LAB
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* 좌측 텍스트 설명 */}
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            공간 텔레메트리 & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              실시간 동역학 실험실.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            디지털 트윈 상의 자율 센서 노드들이 마우스 인력장에 실시간 반응하는 2D 물리 엔진 시뮬레이션입니다. 
            좌표 간 거리 기반 유클리드 토폴로지 연결과 벡터 가속도 연산을 브라우저 캔버스 루프로 직접 구동합니다.
          </p>

          <div className="space-y-2 pt-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Canvas 2D Vector Velocity & Spring Physics</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>실시간 근접 노드 간 토폴로지 메쉬 자동 생성</span>
            </div>
          </div>
        </div>

        {/* 우측 인터랙티브 캔버스 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden border border-zinc-800 bg-[#06090e] shadow-2xl group cursor-crosshair">
            {/* 캔버스 드로잉 영역 */}
            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full block"
            />

            {/* 좌상단 HUD 실시간 모니터링 지표 */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-cyan-400">
                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                GRAVITY ENGINE: {gravityMode.toUpperCase()}
              </div>
              <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-zinc-400">
                NODES: {nodeCount} | LINKS: {activeConnections}
              </div>
            </div>

            {/* 우상단 FPS 측정 */}
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-emerald-400 pointer-events-none">
              {fps} FPS
            </div>

            {/* 하단 인터랙션 가이드 힌트 */}
            <div className="absolute bottom-4 right-4 text-xs font-mono text-zinc-500 pointer-events-none">
              마우스를 올려 중력장을 형성해 보세요 ↗
            </div>
          </div>

          {/* 하단 조작 컨트롤 패널 */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
            {/* 노드 밀도 슬라이더 */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Sliders className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-xs font-mono text-zinc-400 whitespace-nowrap">
                센서 밀도 <strong className="text-cyan-400 ml-1">{nodeCount}</strong>
              </span>
              <input
                type="range"
                min="20"
                max="80"
                value={nodeCount}
                onChange={(e) => setNodeCount(Number(e.target.value))}
                className="w-full sm:w-40 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* 물리 모드 전환 탭 */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
              <button
                onClick={() => setGravityMode('attract')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  gravityMode === 'attract'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-zinc-400 hover:text-white bg-zinc-800/80'
                }`}
              >
                인력 (Pull)
              </button>
              <button
                onClick={() => setGravityMode('repel')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  gravityMode === 'repel'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-zinc-400 hover:text-white bg-zinc-800/80'
                }`}
              >
                척력 (Push)
              </button>
              <button
                onClick={() => setGravityMode('orbit')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                  gravityMode === 'orbit'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                    : 'text-zinc-400 hover:text-white bg-zinc-800/80'
                }`}
              >
                소용돌이 (Orbit)
              </button>
              <button
                onClick={handleReset}
                title="초기화"
                className="p-1 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors ml-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-600 pl-1">
            Pure Canvas 2D Vector Dynamics · N-Body Distance Linking Algorithm
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLab;
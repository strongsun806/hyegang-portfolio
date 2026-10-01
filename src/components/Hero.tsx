import { useState } from 'react';
import { Mail, Check, ArrowDown, Code2 } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com"; // 본인 실제 이메일로 변경하세요

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* 상태 표시 태그 */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>AVAILABLE FOR FRONTEND & GRAPHICS ROLES</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* 좌측: 타이틀 및 핵심 엔지니어링 철학 */}
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Engineering Fluid Web & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              High-Performance
            </span> Experiences.
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            대규모 공간·센서 데이터의 실시간 시각화(Digital Twin)부터 
            렌더링 병목 없는 반응형 웹 플랫폼까지, 사용성과 엔지니어링 성능 지표를 집요하게 최적화하는 프론트엔드 개발자입니다.
          </p>

          {/* 소셜 및 CTA 링크 */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-sm"
            >
              Explore Works
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-sm font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* 순수 SVG GitHub 아이콘 (타입/버전 에러 없음) */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 우측: 핵심 엔지니어링 포커스 보드 */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-800 pb-3">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>ENGINEERING FOCUS</span>
          </div>

          <ul className="space-y-3 text-xs font-mono text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">01.</span>
              <div>
                <span className="text-white font-medium">3D Graphics & Spatial Web</span>
                <p className="text-zinc-500 text-[11px] mt-0.5">Three.js, WebGL, InstancedMesh 최적화</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">02.</span>
              <div>
                <span className="text-white font-medium">Non-blocking Thread Pipeline</span>
                <p className="text-zinc-500 text-[11px] mt-0.5">Web Workers, WebSocket 실시간 스트림 분리</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">03.</span>
              <div>
                <span className="text-white font-medium">Resilient Web Architecture</span>
                <p className="text-zinc-500 text-[11px] mt-0.5">React, TypeScript, Optimistic Updates, CLS 최소화</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
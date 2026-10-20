import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TeachingExp from './components/TeachingExp';
import InteractiveLab from './components/InteractiveLab';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 상단 고정 네비게이션 헤더 */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-mono font-bold text-sm tracking-wider text-white hover:text-cyan-400 transition-colors flex items-center gap-2">
            <span>HYEGANG.DEV</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
              GDM &apos;26
            </span>
          </a>
          <nav className="flex items-center gap-5 sm:gap-6 text-xs font-mono text-zinc-400">
            <a href="#hackathon" className="text-purple-300 hover:text-purple-200 transition-colors font-semibold">
              HACKATHON &apos;26
            </a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#teaching" className="hover:text-white transition-colors">TEACHING</a>
            <a href="#lab" className="hover:text-white transition-colors">LAB</a>
            <a 
              href="https://github.com/strongsun806" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors"
            >
              GITHUB ↗
            </a>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main>
        {/* 1. 메인 히어로 섹션 */}
        <Hero />

        {/* 2. 2026 Google DeepMind AI Hackathon 및 대표 프로젝트 쇼케이스 */}
        <div id="projects" className="border-t border-zinc-900">
          <FeaturedProjects />
        </div>

        {/* 3. 대학생 AI 비전 & 고등학생 아두이노 전자의수 교육 트랙 */}
        <div id="teaching" className="border-t border-zinc-900 bg-zinc-950/40">
          <TeachingExp />
        </div>

        {/* 4. 시그니처 텔레메트리 동역학 실험실 */}
        <div id="lab" className="border-t border-zinc-900 bg-zinc-950/80">
          <InteractiveLab />
        </div>
      </main>

      {/* 하단 푸터 */}
      <footer className="border-t border-zinc-900 py-12 px-6 text-center text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Hyegang Kwon (권혜강). All rights reserved.</span>
          <span>Designed & Engineered with React, TypeScript & Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

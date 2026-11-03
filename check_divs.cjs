const fs = require('fs');
const content = fs.readFileSync('C:/Users/SSAFY/Desktop/hyegang-portfolio/src/components/FeaturedProjects.tsx', 'utf8');
const lines = content.split('\n');
let depth = 0;
lines.forEach((line, idx) => {
  const opens = (line.match(/<div(\s|>)/g) || []).length;
  const closes = (line.match(/<\/div>/g) || []).length;
  const selfCloses = (line.match(/<div[^>]*\/>/g) || []).length;
  depth += (opens - selfCloses) - closes;
  if (line.includes('Flagship Engineering') || line.includes('Agentic AI') || line.includes('Interactive Apps') || line.includes('Engineering Lab') || line.includes('SafeCity AI') || line.includes('FINDER') || line.includes('Port Scrap')) {
    console.log('Line ' + (idx+1) + ' (depth ' + depth + '): ' + line.trim().substring(0, 60));
  }
});
console.log('Final depth:', depth);

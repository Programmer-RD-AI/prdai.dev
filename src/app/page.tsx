'use client';

import Aurora from '@components/Aurora';
import ShinyText from '@components/ShinyText';
import SplitText from '@components/SplitText';

import './main.css';

export default function Home() {
  return (
    <div className="hero bg-black">
      <Aurora
        colorStops={['#FFFFFF', '#E5E5E5', '#A3A3A3', '#4B4B4B', '#000000']}
        blend={0.75}
        amplitude={1.0}
        speed={0.5}
      >
      </Aurora>
      <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999]">
        <div>
          <SplitText
            text="Coming Soon"
            className="text-white text-5xl font-semibold text-center p-3"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {}}
          />
        </div>
        <div>
          <ShinyText
            text="As soon as we finish... procrastinating."
            disabled={false}
            speed={3}
            className="text-white custom-class"
          />
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const animations = [
  {
    name: 'Running Text',
    description: 'A simple animation that makes text move from right to left.',
    html: '<p class="running-text-example">This is a running text animation.</p>',
    css: `
      .running-text-example {
        animation: running-text 20s linear infinite;
      }
      @keyframes running-text {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(-100%);
        }
      }
    `,
  },
  {
    name: 'Rubber Band Effect',
    description: 'A fun animation that makes an element stretch and bounce like a rubber band.',
    html: '<div class="rubber-band-example">Rubber Band</div>',
    css: `
      .rubber-band-example {
        animation: rubber-band 1s;
      }
      @keyframes rubber-band {
        from {
          transform: scale3d(1, 1, 1);
        }
        30% {
          transform: scale3d(1.25, 0.75, 1);
        }
        40% {
          transform: scale3d(0.75, 1.25, 1);
        }
        50% {
          transform: scale3d(1.15, 0.85, 1);
        }
        65% {
          transform: scale3d(0.95, 1.05, 1);
        }
        75% {
          transform: scale3d(1.05, 0.95, 1);
        }
        to {
          transform: scale3d(1, 1, 1);
        }
      }
    `,
  },
];

const CssAnimation: React.FC = () => {
  const [runningAnimation, setRunningAnimation] = useState<string | null>(null);

  const runAnimation = (animationName: string) => {
    setRunningAnimation(animationName);
    setTimeout(() => {
      setRunningAnimation(null);
    }, 20000); // Reset after 20 seconds
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">CSS Animations</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Learn CSS animations with these examples.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {animations.map((anim) => (
          <div key={anim.name} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{anim.name}</h2>
            <p className="text-muted-foreground mb-4">{anim.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">HTML</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto">
                <code>{anim.html}</code>
              </pre>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">CSS</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md overflow-x-auto">
                <code>{anim.css}</code>
              </pre>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Output</h3>
              <div
                className={`p-4 border rounded-md overflow-hidden text-center ${runningAnimation === anim.name ? 'animate' : ''}`}
                dangerouslySetInnerHTML={{ __html: anim.html }}
              />
              <style>{`
                .animate .running-text-example {
                  animation: running-text 20s linear infinite;
                }
                @keyframes running-text {
                  from { transform: translateX(100%); }
                  to { transform: translateX(-100%); }
                }
                .animate .rubber-band-example {
                  animation: rubber-band 1s;
                }
                @keyframes rubber-band {
                  from { transform: scale3d(1, 1, 1); }
                  30% { transform: scale3d(1.25, 0.75, 1); }
                  40% { transform: scale3d(0.75, 1.25, 1); }
                  50% { transform: scale3d(1.15, 0.85, 1); }
                  65% { transform: scale3d(.95, 1.05, 1); }
                  75% { transform: scale3d(1.05, .95, 1); }
                  to { transform: scale3d(1, 1, 1); }
                }
              `}</style>
            </div>
            <Button onClick={() => runAnimation(anim.name)}>Run</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssAnimation;

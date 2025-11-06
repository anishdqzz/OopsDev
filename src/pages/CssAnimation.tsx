
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Copy, Download } from 'lucide-react';

const animations = [
  {
    name: 'Running Text',
    description: 'A simple animation that makes text move from right to left.',
    html: '<p class="running-text-example">This is a running text animation.</p>',
    css: `
      .running-text-example {
        animation: running-text 20s linear infinite;
        word-spacing: 10px;
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
  {
    name: 'Pulse Effect',
    description: 'An animation that makes an element grow and shrink.',
    html: '<div class="pulse-example">Pulse</div>',
    css: `
      .pulse-example {
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  },
  {
    name: 'Flash Effect',
    description: 'An animation that makes an element flash.',
    html: '<div class="flash-example">Flash</div>',
    css: `
      .flash-example {
        animation: flash 1s infinite;
      }
      @keyframes flash {
        0%, 50%, 100% {
          opacity: 1;
        }
        25%, 75% {
          opacity: 0;
        }
      }
    `,
  },
  {
    name: 'Swing Effect',
    description: 'An animation that makes an element swing.',
    html: '<div class="swing-example">Swing</div>',
    css: `
      .swing-example {
        animation: swing 2s ease-out infinite;
        transform-origin: top center;
      }
      @keyframes swing {
        20% {
          transform: rotate3d(0, 0, 1, 15deg);
        }
        40% {
          transform: rotate3d(0, 0, 1, -10deg);
        }
        60% {
          transform: rotate3d(0, 0, 1, 5deg);
        }
        80% {
          transform: rotate3d(0, 0, 1, -5deg);
        }
        100% {
          transform: rotate3d(0, 0, 1, 0deg);
        }
      }
    `,
  },
    {
        name: 'Bounce',
        description: 'An animation that makes an element bounce.',
        html: '<div class="bounce-example">Bounce</div>',
        css: `
      .bounce-example {
        animation: bounce 1s;
      }
      @keyframes bounce {
        from, 20%, 53%, 80%, to {
          animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
          transform: translate3d(0, -30px, 0);
        }
        70% {
          animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
          transform: translate3d(0, -15px, 0);
        }
        90% {
          transform: translate3d(0,-4px,0);
        }
      }
    `,
    },
    {
        name: 'Tada',
        description: 'An animation that makes an element attract attention.',
        html: '<div class="tada-example">Tada</div>',
        css: `
      .tada-example {
        animation: tada 1s;
      }
      @keyframes tada {
        from {
          transform: scale3d(1, 1, 1);
        }
        10%, 20% {
          transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        }
        30%, 50%, 70%, 90% {
          transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }
        40%, 60%, 80% {
          transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        }
        to {
          transform: scale3d(1, 1, 1);
        }
      }
    `,
    },
    {
        name: 'Wobble',
        description: 'An animation that makes an element wobble.',
        html: '<div class="wobble-example">Wobble</div>',
        css: `
      .wobble-example {
        animation: wobble 1s;
      }
      @keyframes wobble {
        from {
          transform: translate3d(0, 0, 0);
        }
        15% {
          transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
        }
        30% {
          transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
        }
        45% {
          transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
        }
        60% {
          transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
        }
        75% {
          transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
        }
        to {
          transform: translate3d(0, 0, 0);
        }
      }
    `,
    },
    {
        name: 'Jello',
        description: 'An animation that makes an element jiggle.',
        html: '<div class="jello-example">Jello</div>',
        css: `
      .jello-example {
        animation: jello 1s;
      }
      @keyframes jello {
        from, 11.1%, to {
          transform: translate3d(0, 0, 0);
        }
        22.2% {
          transform: skewX(-12.5deg) skewY(-12.5deg);
        }
        33.3% {
          transform: skewX(6.25deg) skewY(6.25deg);
        }
        44.4% {
          transform: skewX(-3.125deg) skewY(-3.125deg);
        }
        55.5% {
          transform: skewX(1.5625deg) skewY(1.5625deg);
        }
        66.6% {
          transform: skewX(-0.78125deg) skewY(-0.78125deg);
        }
        77.7% {
          transform: skewX(0.390625deg) skewY(0.390625deg);
        }
        88.8% {
          transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        }
      }
    `,
    },
    {
        name: 'Heartbeat',
        description: 'An animation that makes an element beat like a heart.',
        html: '<div class="heartbeat-example">Heartbeat</div>',
        css: `
      .heartbeat-example {
        animation: heartbeat 1s ease-in-out infinite;
      }
      @keyframes heartbeat {
        0% {
          transform: scale(1);
        }
        14% {
          transform: scale(1.3);
        }
        28% {
          transform: scale(1);
        }
        42% {
          transform: scale(1.3);
        }
        70% {
          transform: scale(1);
        }
      }
    `,
    },
    {
        name: 'Fade In',
        description: 'An animation that makes an element fade in.',
        html: '<div class="fade-in-example">Fade In</div>',
        css: `
      .fade-in-example {
        animation: fadeIn 1s;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
  },
  {
    name: 'Shake X',
    description: 'An animation that makes an element shake horizontally.',
    html: '<div class="shake-x-example">Shake X</div>',
    css: `
      .shake-x-example {
        animation: shakeX 1s;
      }
      @keyframes shakeX {
        from, to {
          transform: translate3d(0, 0, 0);
        }
        10%, 30%, 50%, 70%, 90% {
          transform: translate3d(-10px, 0, 0);
        }
        20%, 40%, 60%, 80% {
          transform: translate3d(10px, 0, 0);
        }
      }
    `,
  },
  {
    name: 'Shake Y',
    description: 'An animation that makes an element shake vertically.',
    html: '<div class="shake-y-example">Shake Y</div>',
    css: `
      .shake-y-example {
        animation: shakeY 1s;
      }
      @keyframes shakeY {
        from, to {
          transform: translate3d(0, 0, 0);
        }
        10%, 30%, 50%, 70%, 90% {
          transform: translate3d(0, -10px, 0);
        }
        20%, 40%, 60%, 80% {
          transform: translate3d(0, 10px, 0);
        }
      }
    `,
  },
  {
    name: 'Head Shake',
    description: 'An animation that makes an element shake its head.',
    html: '<div class="head-shake-example">Head Shake</div>',
    css: `
      .head-shake-example {
        animation: headShake 1s;
      }
      @keyframes headShake {
        0% {
          transform: translateX(0);
        }
        6.5% {
          transform: translateX(-6px) rotateY(-9deg);
        }
        18.5% {
          transform: translateX(5px) rotateY(7deg);
        }
        31.5% {
          transform: translateX(-3px) rotateY(-5deg);
        }
        43.5% {
          transform: translateX(2px) rotateY(3deg);
        }
        50% {
          transform: translateX(0);
        }
      }
    `,
  },
];

const CssAnimation: React.FC = () => {
  const { theme } = useTheme();
  const [runningAnimation, setRunningAnimation] = useState<string | null>(null);
  const [copiedAnimation, setCopiedAnimation] = useState<string | null>(null);

  const runAnimation = (animationName: string) => {
    setRunningAnimation(animationName);
    setTimeout(() => {
      setRunningAnimation(null);
    }, 2000); // Reset after 2 seconds
  };

  const handleCopy = (text: string, animationName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAnimation(animationName);
    setTimeout(() => {
        setCopiedAnimation(null);
    }, 2000);
  };

  const handleDownload = (text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isDark = theme === 'dark';
  const cardBgColor = isDark ? '#1a202c' : '#ffffff';
  const cardTextColor = isDark ? '#ffffff' : '#000000';
  const preBgColor = isDark ? '#2d3748' : '#f7fafc';
  const preTextColor = isDark ? '#e2e8f0' : '#2d3748';

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">CSS Animations</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Learn CSS animations with these examples.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {animations.map((anim) => (
          <div key={anim.name} className="rounded-lg shadow-lg p-6 flex flex-col transition-transform transform hover:-translate-y-1" style={{ backgroundColor: cardBgColor, color: cardTextColor }}>
            <h2 className="text-2xl font-semibold mb-2">{anim.name}</h2>
            <p className="text-muted-foreground mb-4 flex-grow">{anim.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">HTML</h3>
              <pre className="p-4 rounded-lg text-sm overflow-x-auto mt-4" style={{ backgroundColor: preBgColor, color: preTextColor }}>
                <code>{anim.html}</code>
              </pre>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">CSS</h3>
              <pre className="p-4 rounded-lg text-sm overflow-x-auto mt-4" style={{ backgroundColor: preBgColor, color: preTextColor }}>
                <code>{anim.css}</code>
              </pre>
              <div className="flex gap-2 mt-2">
                <Button
                    onClick={() => handleCopy(anim.css, anim.name)}
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy CSS
                </Button>
                <Button
                    onClick={() => handleDownload(anim.css, `${anim.name.toLowerCase().replace(/ /g, '-')}.css`)}
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                </Button>
              </div>
              {copiedAnimation === anim.name && (
                <p className="text-sm text-green-600 mt-2 animate-fade-in-out">
                    Copied!
                </p>
              )}
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Output</h3>
              <div
                className={`p-4 border rounded-md overflow-hidden text-center ${runningAnimation === anim.name ? 'animate' : ''}`}
                dangerouslySetInnerHTML={{ __html: anim.html }}
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              />
              <style>{`
                .animate .running-text-example {
                  animation: running-text 20s linear infinite;
                  word-spacing: 5px;
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
                .animate .pulse-example {
                  animation: pulse 2s infinite;
                }
                @keyframes pulse {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.1); }
                  100% { transform: scale(1); }
                }
                .animate .flash-example {
                  animation: flash 1s infinite;
                }
                @keyframes flash {
                  0%, 50%, 100% { opacity: 1; }
                  25%, 75% { opacity: 0; }
                }
                .animate .swing-example {
                  animation: swing 2s ease-out infinite;
                  transform-origin: top center;
                }
                @keyframes swing {
                  20% { transform: rotate3d(0, 0, 1, 15deg); }
                  40% { transform: rotate3d(0, 0, 1, -10deg); }
                  60% { transform: rotate3d(0, 0, 1, 5deg); }
                  80% { transform: rotate3d(0, 0, 1, -5deg); }
                  100% { transform: rotate3d(0, 0, 1, 0deg); }
                }
                .animate .bounce-example {
                  animation: bounce 1s;
                }
                @keyframes bounce {
                  from, 20%, 53%, 80%, to {
                    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                    transform: translate3d(0,0,0);
                  }
                  40%, 43% {
                    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                    transform: translate3d(0, -30px, 0);
                  }
                  70% {
                    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                    transform: translate3d(0, -15px, 0);
                  }
                  90% {
                    transform: translate3d(0,-4px,0);
                  }
                }
                .animate .tada-example {
                  animation: tada 1s;
                }
                @keyframes tada {
                  from {
                    transform: scale3d(1, 1, 1);
                  }
                  10%, 20% {
                    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
                  }
                  30%, 50%, 70%, 90% {
                    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
                  }
                  40%, 60%, 80% {
                    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
                  }
                  to {
                    transform: scale3d(1, 1, 1);
                  }
                }
                .animate .wobble-example {
                  animation: wobble 1s;
                }
                @keyframes wobble {
                  from {
                    transform: translate3d(0, 0, 0);
                  }
                  15% {
                    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
                  }
                  30% {
                    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
                  }
                  45% {
                    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
                  }
                  60% {
                    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
                  }
                  75% {
                    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
                  }
                  to {
                    transform: translate3d(0, 0, 0);
                  }
                }
                .animate .jello-example {
                  animation: jello 1s;
                }
                @keyframes jello {
                  from, 11.1%, to {
                    transform: translate3d(0, 0, 0);
                  }
                  22.2% {
                    transform: skewX(-12.5deg) skewY(-12.5deg);
                  }
                  33.3% {
                    transform: skewX(6.25deg) skewY(6.25deg);
                  }
                  44.4% {
                    transform: skewX(-3.125deg) skewY(-3.125deg);
                  }
                  55.5% {
                    transform: skewX(1.5625deg) skewY(1.5625deg);
                  }
                  66.6% {
                    transform: skewX(-0.78125deg) skewY(-0.78125deg);
                  }
                  77.7% {
                    transform: skewX(0.390625deg) skewY(0.390625deg);
                  }
                  88.8% {
                    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
                  }
                }
                .animate .heartbeat-example {
                  animation: heartbeat 1s ease-in-out infinite;
                }
                @keyframes heartbeat {
                  0% {
                    transform: scale(1);
                  }
                  14% {
                    transform: scale(1.3);
                  }
                  28% {
                    transform: scale(1);
                  }
                  42% {
                    transform: scale(1.3);
                  }
                  70% {
                    transform: scale(1);
                  }
                }
                .animate .fade-in-example {
                  animation: fadeIn 1s;
                }
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .animate .shake-x-example {
                  animation: shakeX 1s;
                }
                @keyframes shakeX {
                  from, to {
                    transform: translate3d(0, 0, 0);
                  }
                  10%, 30%, 50%, 70%, 90% {
                    transform: translate3d(-10px, 0, 0);
                  }
                  20%, 40%, 60%, 80% {
                    transform: translate3d(10px, 0, 0);
                  }
                }
                .animate .shake-y-example {
                  animation: shakeY 1s;
                }
                @keyframes shakeY {
                  from, to {
                    transform: translate3d(0, 0, 0);
                  }
                  10%, 30%, 50%, 70%, 90% {
                    transform: translate3d(0, -10px, 0);
                  }
                  20%, 40%, 60%, 80% {
                    transform: translate3d(0, 10px, 0);
                  }
                }
                .animate .head-shake-example {
                  animation: headShake 1s;
                }
                @keyframes headShake {
                  0% {
                    transform: translateX(0);
                  }
                  6.5% {
                    transform: translateX(-6px) rotateY(-9deg);
                  }
                  18.5% {
                    transform: translateX(5px) rotateY(7deg);
                  }
                  31.5% {
                    transform: translateX(-3px) rotateY(-5deg);
                  }
                  43.5% {
                    transform: translateX(2px) rotateY(3deg);
                  }
                  50% {
                    transform: translateX(0);
                  }
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

const TopWave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className="w-full"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color4Light)" />
          <stop offset="100%" stopColor="var(--color4)" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 C360,90 1080,0 1440,50 L1440,100 L0,100 Z"
        fill="url(#waveGradient)"
      />
    </svg>
  );
};

export default TopWave;

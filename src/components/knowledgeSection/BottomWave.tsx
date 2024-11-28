const BottomWave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8FA984" />
          <stop offset="100%" stopColor="#7A8E6F" />
        </linearGradient>
      </defs>
      <path
        d="M0,50 C480,100 960,0 1440,50 L1440,0 L0,0 Z"
        fill="url(#waveGradient)"
      />
    </svg>
  );
};

export default BottomWave;

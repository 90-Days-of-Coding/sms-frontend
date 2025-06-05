export default function CGPACircle({ value, max = 5.0 }) {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = (value / max) * circumference;
  const strokeDashoffset = circumference - progress;

  return (
    <div className="relative w-[100px] h-[100px] flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg]"
      >
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#4ade80"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {/* Value fixed in center */}
      <div className="absolute text-white font-bold text-lg">
        {value.toFixed(1)}
      </div>
    </div>
  );
}

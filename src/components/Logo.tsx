const Logo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 ${className}`}
  >
    <rect
      x="1"
      y="1"
      width="46"
      height="46"
      rx="8"
      className="stroke-primary"
      strokeWidth="1.5"
      fill="none"
    />
    {/* L */}
    <path
      d="M12 12 L12 36 L24 36"
      className="stroke-primary"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* M */}
    <path
      d="M24 36 L24 12 L32 28 L40 12 L40 36"
      className="stroke-primary"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Accent line */}
    <line
      x1="8"
      y1="42"
      x2="40"
      y2="42"
      className="stroke-accent"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export default Logo;

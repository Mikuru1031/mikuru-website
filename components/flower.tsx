export default function Flower() {
  return (
    <svg
      className="flower-animation"
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main wreath circle */}
      <circle cx="150" cy="150" r="120" stroke="#B0BEC5" strokeWidth="2" strokeDasharray="4 4" />

      {/* Leaves */}
      {Array.from({ length: 24 }).map((_, index) => (
        <g key={index} transform={`rotate(${index * 15} 150 150)`}>
          <path d="M150 30 Q 160 10, 170 30 T 150 60" fill="#B0BEC5" opacity="0.6" />
        </g>
      ))}

      {/* Flowers */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 150 150)`}>
          <g transform="translate(150 30)">
            {[0, 72, 144, 216, 288].map((petal) => (
              <path
                key={petal}
                d="M0 -10 C 5 -15, 15 -15, 15 -5 S 5 10, 0 10 S -5 10, -15 -5 S -5 -15, 0 -10"
                fill="#E3F2FD"
                opacity="0.9"
                transform={`rotate(${petal})`}
              />
            ))}
            <circle cx="0" cy="0" r="5" fill="#90CAF9" />
            <circle cx="0" cy="0" r="3" fill="#64B5F6" />
          </g>
        </g>
      ))}

      {/* Small decorative elements */}
      {Array.from({ length: 12 }).map((_, index) => (
        <g key={index} transform={`rotate(${index * 30} 150 150)`}>
          <circle cx="150" cy="45" r="2" fill="#64B5F6" />
        </g>
      ))}
    </svg>
  )
}


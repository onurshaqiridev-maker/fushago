// Decoration for the landing page: a 5-a-side pitch seen from above.
// Pure SVG drawing (no images to load), only brand colours.

function PitchArt() {
  return (
    <div className="pitch-art" aria-hidden="true">
      <svg viewBox="0 0 400 260" className="pitch-svg">
        {/* Grass with mowing stripes */}
        <rect x="0" y="0" width="400" height="260" rx="18" fill="#12A150" />
        {[0, 2, 4, 6, 8].map((i) => (
          <rect key={i} x={i * 40 + 20} y="10" width="40" height="240" fill="#FFFFFF" opacity="0.06" />
        ))}

        {/* White lines */}
        <g fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.9">
          <rect x="20" y="10" width="360" height="240" rx="6" />
          <line x1="200" y1="10" x2="200" y2="250" />
          <circle cx="200" cy="130" r="34" />
          {/* Penalty areas */}
          <path d="M20 80 h44 v100 h-44" />
          <path d="M380 80 h-44 v100 h44" />
        </g>
        <circle cx="200" cy="130" r="4" fill="#FFFFFF" />

        {/* Goals */}
        <rect x="8" y="108" width="12" height="44" rx="2" fill="none" stroke="#F4F7F2" strokeWidth="3" />
        <rect x="380" y="108" width="12" height="44" rx="2" fill="none" stroke="#F4F7F2" strokeWidth="3" />

        {/* Team 1 (lime) */}
        <g fill="#C8F31D" stroke="#0B1F17" strokeWidth="2">
          <circle cx="45" cy="130" r="9" />
          <circle cx="110" cy="75" r="9" />
          <circle cx="110" cy="185" r="9" />
          <circle cx="160" cy="105" r="9" />
          <circle cx="235" cy="150" r="9" />
        </g>

        {/* Team 2 (white) */}
        <g fill="#FFFFFF" stroke="#0B1F17" strokeWidth="2">
          <circle cx="355" cy="130" r="9" />
          <circle cx="290" cy="80" r="9" />
          <circle cx="290" cy="180" r="9" />
          <circle cx="250" cy="110" r="9" />
          <circle cx="170" cy="190" r="9" />
        </g>

        {/* Ball (moves with CSS animation) */}
        <g className="ball">
          <circle cx="0" cy="0" r="7" fill="#FFFFFF" stroke="#0B1F17" strokeWidth="2" />
          <circle cx="0" cy="0" r="2.5" fill="#0B1F17" />
        </g>
      </svg>

      {/* Floating card: a hint of what the product will do */}
      <div className="slot-card">
        <span className="slot-dot" />
        <div>
          <strong>Sonte 20:00</strong>
          <span>Fusha 1 · E lirë</span>
        </div>
      </div>
    </div>
  );
}

export default PitchArt;

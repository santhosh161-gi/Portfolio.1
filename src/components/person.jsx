import { useEffect } from "react";

export default function HeroCard({ personal, stack = "React · Spring" }) {
 // useEffect — swap the Google Fonts URL
useEffect(() => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(link);
}, []);

  return (
    <div className="hc-root">
      <style>{`
        .hc-root {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3rem 1rem;
        }
        .hc-wrap {
          position: relative;
          display: inline-block;
        }
        .hc-ring {
          position: absolute;
          inset: -8px;
          border-radius: 26px;
          border: 1px dashed rgba(255,255,255,0.12);
          pointer-events: none;
          z-index: 0;
        }
        .hc-frame {
          position: relative;
          width: 380px;
          height: 480px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          display: inline-block;
          max-width: 100%;
        }
        .hc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .hc-badge-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .hc-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #ffffff;
          margin: 0 0 2px;
          letter-spacing: -0.3px;
        }
        .hc-role {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: var(--accent, #a78bfa);
          margin: 0;
        }
        .hc-status-pill {
          position: absolute;
          top: -14px;
          left: -4px;
          background: var(--bg, #0f0f0f);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 5px 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 10;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .hc-accent-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          flex-shrink: 0;
          box-shadow: 0 0 0 2px rgba(74,222,128,0.25);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 2px rgba(74,222,128,0.25); }
          50%       { box-shadow: 0 0 0 4px rgba(74,222,128,0.1); }
        }
        .hc-status-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.5);
        }
        .hc-exp-badge {
          position: absolute;
          top: -14px;
          right: -20px;
          background: var(--bg, #0f0f0f);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 10px 16px;
          z-index: 10;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .hc-exp-num {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #ffffff;
          display: block;
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .hc-exp-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          display: block;
          margin-top: 2px;
        }
        .hc-corner-tag {
          position: absolute;
          bottom: 60px;
          left: -24px;
          z-index: 10;
          background: var(--bg, #0f0f0f);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .hc-corner-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          flex-shrink: 0;
        }
        .hc-corner-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
        }
        .hc-corner-value {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 12px;
          color: #ffffff;
          letter-spacing: -0.2px;
          display: block;
        }
          /* Mobile */
@media (max-width: 576px) {
  .hc-frame {
    width: 280px;
    height: 360px;
  }

  .hc-exp-badge {
    right: -8px;
  }

  .hc-corner-tag {
    left: -10px;
    bottom: 55px;
    padding: 6px 10px;
  }

  .hc-corner-value {
    font-size: 10px;
  }

  .hc-name {
    font-size: 13px;
  }

  .hc-root {
    padding: 1.5rem 0.5rem;
  }
}

/* Small Tablets */
@media (min-width: 577px) and (max-width: 768px) {
  .hc-frame {
    width: 320px;
    height: 420px;
  }
}

/* Tablets */
@media (min-width: 769px) and (max-width: 992px) {
  .hc-frame {
    width: 340px;
    height: 440px;
  }
}

/* Large Screens */
@media (min-width: 1400px) {
  .hc-frame {
    width: 420px;
    height: 540px;
  }
}
      `}</style>

      <div className="hc-wrap">
        <div className="hc-ring" />

        {/* Status pill — top left */}
        <div className="hc-status-pill">
          <span className="hc-accent-dot" />
          <span className="hc-status-text">Open to work</span>
        </div>

        {/* Experience badge — top right */}
        <div className="hc-exp-badge">
          <span className="hc-exp-num">1+</span>
          <span className="hc-exp-label">Yrs exp.</span>
        </div>

        {/* Main image frame */}
        <div className="hc-frame">
          <img
            src={personal.avatar}
            alt={personal.name}
            className="hc-img"
          />

          {/* Name overlay */}
          <div className="hc-badge-bottom">
            <p className="hc-name">{personal.name}</p>
            <p className="hc-role">{personal.role}</p>
          </div>
        </div>

        {/* Stack tag — bottom left, floats outside */}
        <div className="hc-corner-tag">
          <div className="hc-corner-icon">
            {/* simple code icon inline */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div>
            <span className="hc-corner-label">Stack</span>
            <span className="hc-corner-value">{stack}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
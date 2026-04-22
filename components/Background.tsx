"use client";

/**
 * Animated gradient background — matches the Figma "Bg" component (node 181:14102).
 * Layers: gradient → 2 animated cloud blobs → blur + tint overlay.
 * Used on Home and Sign-up screens.
 */
export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Layer 1 — brand gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0c1e26 0%, #0f3a50 28%, #1b6080 55%, #3d90a8 78%, #5ab0c8 100%)",
        }}
      />

      {/* Layer 2 — cloud blob: bottom-left */}
      <div
        className="absolute"
        style={{
          bottom: "-136px",
          left: "-130px",
          width: "871px",
          height: "580px",
          opacity: 0.75,
          animation: "blobFloat1 22s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cloud-texture.svg"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Layer 3 — cloud blob: bottom-right */}
      <div
        className="absolute"
        style={{
          top: "55%",
          left: "57%",
          width: "871px",
          height: "580px",
          opacity: 0.65,
          animation: "blobFloat2 28s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cloud-texture.svg"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Layer 4 — blur + dark tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(200px)",
          WebkitBackdropFilter: "blur(200px)",
          background: "rgba(28, 28, 28, 0.2)",
        }}
      />
    </div>
  );
}

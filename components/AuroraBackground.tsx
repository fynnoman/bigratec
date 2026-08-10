export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base — near-white with barely-there warmth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #FFFFFF 0%, #FAFAF8 55%, #F4F3EF 100%)",
        }}
      />

      {/* Aurora — dialed back for a whiter base, still enough color for glass to breathe */}
      <div
        className="absolute -top-40 -left-32 h-[52rem] w-[52rem] rounded-full opacity-60 blur-[120px] animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(217,182,176,0.55), rgba(217,182,176,0) 70%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-40 h-[58rem] w-[58rem] rounded-full opacity-55 blur-[130px] animate-drift-med"
        style={{
          background:
            "radial-gradient(closest-side, rgba(138,162,144,0.45), rgba(138,162,144,0) 70%)",
        }}
      />
      <div
        className="absolute top-[55%] -left-40 h-[46rem] w-[46rem] rounded-full opacity-50 blur-[120px] animate-drift-fast"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,184,162,0.45), rgba(201,184,162,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-[-14rem] right-1/4 h-[42rem] w-[42rem] rounded-full opacity-45 blur-[110px] animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgba(217,182,176,0.4), rgba(217,182,176,0) 70%)",
        }}
      />
      <div
        className="absolute top-[80%] left-[35%] h-[36rem] w-[36rem] rounded-full opacity-40 blur-[100px] animate-drift-med"
        style={{
          background:
            "radial-gradient(closest-side, rgba(138,162,144,0.4), rgba(138,162,144,0) 70%)",
        }}
      />

      {/* Highlight spot — mimics soft light source */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.95), rgba(255,255,255,0) 70%)",
        }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 noise" style={{ opacity: 0.04 }} />

      {/* Edge vignette — barely there */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 100% at 50% 50%, transparent 60%, rgba(18,24,26,0.04) 100%)",
        }}
      />
    </div>
  );
}

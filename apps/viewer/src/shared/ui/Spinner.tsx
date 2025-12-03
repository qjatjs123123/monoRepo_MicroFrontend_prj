export function Spinner({ size = 60, thickness = 8 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `
          conic-gradient(
            #F66D00,
            rgba(246, 109, 0, 0)
          )
        `,
        WebkitMask: `
          radial-gradient(
            farthest-side,
            transparent calc(100% - ${thickness}px),
            black calc(100% - ${thickness}px)
          )
        `,
        mask: `
          radial-gradient(
            farthest-side,
            transparent calc(100% - ${thickness}px),
            black calc(100% - ${thickness}px)
          )
        `,
        animation: "spin 0.8s linear infinite",
      }}
    />
  );
}

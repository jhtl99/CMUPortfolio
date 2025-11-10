// src/components/BackgroundLayer.tsx
import AnimatedBackground from "./AnimatedBackground";

const BackgroundLayer = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* You can tune opacity or blending to your liking */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b10] via-[#0d1117] to-[#101018]" />
      <div className="absolute inset-0 opacity-40">
        <AnimatedBackground
          nodeCount={120}
          maxDistance={250}
          nodeSpeed={3}
          mouseRepelDistance={250}
          mouseRepelStrength={5}
        />
      </div>
    </div>
  );
};

export default BackgroundLayer;
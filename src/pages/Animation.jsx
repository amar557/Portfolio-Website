import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Animation() {
  return (
    <div className="absolute right-0 top-0 -z-10 h-full w-full ">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={3}>
            <MeshDistortMaterial
              color="white"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Animation;

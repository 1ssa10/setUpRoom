import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Experience from "./Experience";
import { Physics } from "@react-three/rapier";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 1, 6],
        }}
      >
        <Suspense
          fallback={
            <mesh scale={[2, 3, 2]}>
              <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
              <meshBasicMaterial wireframe color="red" />
            </mesh>
          }
        >
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;

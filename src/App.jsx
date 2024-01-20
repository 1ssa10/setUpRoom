import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Experience from "./Experience";

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
          position: [0, 0, 6],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;

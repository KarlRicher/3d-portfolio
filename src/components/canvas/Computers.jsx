import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// This function fetches the 3D model and changes some of its properties like the lighting and the positioning.
const Models = ({ isMobile }) => {
  // The main 3D model is fetched here.
  const Model = useGLTF("./trailer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={Model.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, -1, 0] : [0, -1.5, 0]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // This state object will detect whether the website is being viewed from a smaller device (like a phone) or not.
  const [isMobile, setIsMobile] = useState(false);

  // This useEffect hook creates the functionality for the isMobile state object we just created.
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 720px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense makes everything inside it become asynchronous. Models and
      OrbitControls, which here are the main 3D model and the ability to rotate
      it, will only render when both are finished/have finished loading. In the
      meantime, CanvasLoader will be shown in their place. */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Models isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

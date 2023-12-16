"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import styles from "./style.module.css";

function Index() {
  return (
    <div className={styles.main}>
      <Canvas className={styles.canvaCoche} shadows={true}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={7} />
        <directionalLight
         position={
          [2, 5, 2]
          }  
          />

        <Model />
      </Canvas>
    </div>
  );
}

function Model({ controlsRef }) {
  const gltf = useLoader(GLTFLoader, "/assets/models/mercedes_benz.glb");

  const mesh = useRef();
  useFrame((state, delta) => {
    // mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    // mesh.current.rotation.z += delta * 0.25;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={mesh}
      scale={[1.70, 1.70, 1.70]}
      rotation={[0, Math.PI / 2, 0]}
      
    />
  );
}

export default Index;

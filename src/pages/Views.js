import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';

function Views() {
  return (
    <>
    <div style={{ width: "100%", height: "70vh" }}>
    <Canvas>
  <Environment
    background
    blur={0.1}
    preset="apartment"
  />

{/* Historic Vase */}
<mesh position={[0, 1, 0]}>
      
      </mesh>


  <ContactShadows
    blur={2}
    far={10}
    opacity={1}
    position={[
      0,
      0,
      0
    ]}
    resolution={1024}
    scale={100}
  />
  <OrbitControls/>
  <PerspectiveCamera
    makeDefault
    position={[
      40,
      40,
      40
    ]}
  />
  </Canvas>
  </div>
</>
  );

}

export default Views;

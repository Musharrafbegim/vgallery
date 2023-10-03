import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Views() {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />

      {/* Floor */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[10, 0.01, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 2.5, -5.05]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 2.5, 5.05]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-5.05, 2.5, 0]}>
        <boxGeometry args={[0.1, 5, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[5.05, 2.5, 0]}>
        <boxGeometry args={[0.1, 5, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Art Displays or Objects */}
      <mesh position={[1, 1, 1]}>
        <boxGeometry args={[0.2, 0.5, 0.05]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[-1, 1, 1]}>
        <boxGeometry args={[0.2, 0.5, 0.05]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Add more art displays or objects as needed */}
    </Canvas>
  );
}

export default Views;

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Views() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {/* Create walls */}
      <mesh position={[0, 0, -5]} scale={[10, 5, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 0, 5]} scale={[10, 5, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[5, 0, 0]} scale={[1, 5, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[-5, 0, 0]} scale={[1, 5, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Create floor */}
      <mesh position={[0, -2.5, 0]} scale={[10, 1, 10]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* Add objects/art displays */}
      <mesh position={[-2, 0, 2]}>
        <boxGeometry args={[0.2, 0.5, 0.05]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[2, 0, 2]}>
        <boxGeometry args={[0.2, 0.5, 0.05]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}

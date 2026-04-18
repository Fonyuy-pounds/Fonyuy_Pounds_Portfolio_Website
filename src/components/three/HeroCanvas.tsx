'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function HeroGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Very slow, intentional rotation — breathing, not spinning
    meshRef.current.rotation.x += delta * 0.08
    meshRef.current.rotation.y += delta * 0.12

    // Mouse parallax — subtle world shift felt, not dramatic
    meshRef.current.position.x +=
      (state.mouse.x * 0.3 - meshRef.current.position.x) * 0.05
    meshRef.current.position.y +=
      (state.mouse.y * 0.2 - meshRef.current.position.y) * 0.05
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C9A96E"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  )
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#C9A96E" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      <HeroGeometry />
    </Canvas>
  )
}

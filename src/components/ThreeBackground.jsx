import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function DeepGalaxy({ count = 3000 }) {
  const pointsRef = useRef()

  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)
    return new THREE.CanvasTexture(canvas)
  }, [])

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const sz = new Float32Array(count)

    const colorWhite = new THREE.Color('#ffffff')
    const colorGold = new THREE.Color('#ffd166')
    const colorCyan = new THREE.Color('#00f0ff')
    const colorIndigo = new THREE.Color('#3a0ca3')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 30
      const spinAngle = radius * 0.4
      const branchAngle = ((i % 3) * Math.PI * 2) / 3

      const spread = 0.5 * radius
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (spread * 0.35)
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread

      pos[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX
      pos[i3 + 1] = randomY
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ - 12

      const mixedColor = colorWhite.clone()
      if (radius < 6) {
        mixedColor.lerp(colorGold, 0.85)
      } else if (radius < 16) {
        mixedColor.lerp(colorCyan, 0.75)
      } else {
        mixedColor.lerp(colorIndigo, 0.85)
      }

      col[i3] = mixedColor.r
      col[i3 + 1] = mixedColor.g
      col[i3 + 2] = mixedColor.b

      sz[i] = Math.random() * 0.35 + 0.1
    }
    return [pos, col, sz]
  }, [count])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015
      pointsRef.current.rotation.z += delta * 0.005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.24} map={starTexture} vertexColors transparent opacity={0.65} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function RealSudarshanaChakra({ position = [0, 0, -16], scale = 1.9 }) {
  const chakraMeshRef = useRef()
  const chakraTexture = useLoader(THREE.TextureLoader, './assets/sudarshana_chakra.jpg')

  useFrame((state, delta) => {
    if (chakraMeshRef.current) {
      chakraMeshRef.current.rotation.z -= delta * 0.45
      chakraMeshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.12 + 0.06
      chakraMeshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.14
    }
  })

  return (
    <group position={position} scale={scale}>
      <pointLight color="#ffd166" intensity={3.5} distance={24} position={[0, 0, 2]} />
      <pointLight color="#00f0ff" intensity={2.5} distance={24} position={[0, 0, 2]} />
      <mesh ref={chakraMeshRef}>
        <planeGeometry args={[10.5, 10.5]} />
        <meshBasicMaterial map={chakraTexture} transparent blending={THREE.AdditiveBlending} opacity={0.78} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

// 3. Floating 3D Comic Book Cover Tiles
function FloatingBookCover({ position, rotation, imageUrl, accentColor = '#ffd166' }) {
  const texture = useLoader(THREE.TextureLoader, imageUrl)

  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position} rotation={rotation}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 4.5, 0.1]} />
          <meshStandardMaterial color="#05091a" roughness={0.6} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[3.0, 4.3]} />
          <meshBasicMaterial map={texture} />
        </mesh>
        <pointLight color={accentColor} distance={3} intensity={0.6} position={[0, 0, 0.6]} />
      </group>
    </Float>
  )
}

function CameraSplineRig({ scrollProgress }) {
  const { camera } = useThree()

  const spline = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 9),          
      new THREE.Vector3(-3.2, 1.0, 2),     
      new THREE.Vector3(3.5, -0.8, -5),    
      new THREE.Vector3(-2.0, 0.6, -10),   
      new THREE.Vector3(0, 0.3, -12.5),    
    ])
  }, [])

  const currentLookAt = useRef(new THREE.Vector3(0, 0, -16))

  useFrame((state) => {
    const t = THREE.MathUtils.clamp(scrollProgress.current, 0, 1)
    const targetPos = spline.getPointAt(t)

    const targetLookAt = new THREE.Vector3(
      Math.sin(t * Math.PI) * 0.4,
      -t * 0.2,
      -16
    )

    camera.position.lerp(targetPos, 0.06)
    camera.position.x += state.pointer.x * 0.35
    camera.position.y += state.pointer.y * 0.3

    currentLookAt.current.lerp(targetLookAt, 0.06)
    camera.lookAt(currentLookAt.current)
  })

  return null
}

export default function ThreeBackground({ scrollProgress }) {
  // Config for automatic book uploads:
  // Tile 1: Latest (Book 01)
  // Tile 2: Previous (Placeholder 2)
  // Tile 3: Older (Placeholder 3)
  const TILE_1_LATEST = "./reader-book02/pages/00_cover.jpg" // Using the official epic cover
  const TILE_2_PREVIOUS = "./reader/pages/00_cover.jpg"
  const TILE_3_OLDER = "./assets/cover_placeholder_3.jpg"

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-cosmic-950 overflow-hidden">
      <React.Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
          <color attach="background" args={['#02040a']} />
          <ambientLight intensity={0.35} />

          <DeepGalaxy count={3800} />

          {/* 2. Floating Book Covers */}
          <FloatingBookCover position={[-2.8, 0.6, 2]} rotation={[0, 0.4, 0.03]} accentColor="#00f0ff" imageUrl={TILE_1_LATEST} />
          <FloatingBookCover position={[3.2, -0.6, -5]} rotation={[0, -0.45, -0.04]} accentColor="#ffd166" imageUrl={TILE_2_PREVIOUS} />
          <FloatingBookCover position={[-2.4, 0.8, -11]} rotation={[0.04, 0.35, 0.02]} accentColor="#f4a261" imageUrl={TILE_3_OLDER} />

          <RealSudarshanaChakra position={[0, 0, -16]} scale={1.9} />
          <CameraSplineRig scrollProgress={scrollProgress} />
        </Canvas>
      </React.Suspense>

      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-cosmic-950/40 to-cosmic-950/85 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-cosmic-950/60 to-cosmic-950 pointer-events-none" />
      <div className="absolute inset-0 bg-cosmic-950/25 pointer-events-none" />
    </div>
  )
}

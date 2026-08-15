import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Helper: Generates a soft, glowing circular star sprite texture
function createStarTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.25, 'rgba(255, 225, 150, 0.85)')
  gradient.addColorStop(0.55, 'rgba(0, 240, 255, 0.35)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

// 1. Organic Glowing Deep Galaxy with Soft Circular Stars
function DeepGalaxy({ count = 3800 }) {
  const pointsRef = useRef()
  const starTexture = useMemo(() => createStarTexture(), [])

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const sz = new Float32Array(count)

    const colorGold = new THREE.Color('#ffd166')
    const colorCyan = new THREE.Color('#00f0ff')
    const colorIndigo = new THREE.Color('#4361ee')
    const colorWhite = new THREE.Color('#ffffff')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 36
      const spinAngle = radius * 0.75
      const branchAngle = ((i % 4) * ((2 * Math.PI) / 4))

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
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.28}
        map={starTexture}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// 2. Real High-Definition Sudarshana Chakra with Physics Rotation & Depth
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
      {/* Soft Ambient Point Lights */}
      <pointLight color="#ffd166" intensity={6} distance={26} position={[0, 0, 2]} />
      <pointLight color="#00f0ff" intensity={4} distance={26} position={[0, 0, 2]} />

      {/* The Authentic Sudarshana Chakra Plane */}
      <mesh ref={chakraMeshRef}>
        <planeGeometry args={[10.5, 10.5]} />
        <meshBasicMaterial
          map={chakraTexture}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={0.92}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

// 3. Floating 3D Storyboard Manuscript Draft Canvases along Flight Path
function FloatingDraftCanvas({ position, rotation, accentColor = '#ffd166' }) {
  const canvasTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 720
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#040714'
    ctx.fillRect(0, 0, 512, 720)

    ctx.strokeStyle = accentColor + '60'
    ctx.lineWidth = 3
    ctx.strokeRect(20, 20, 472, 680)

    ctx.strokeStyle = '#152454'
    ctx.lineWidth = 2
    ctx.strokeRect(36, 36, 440, 260)
    ctx.strokeRect(36, 316, 210, 360)
    ctx.strokeRect(266, 316, 210, 360)

    ctx.strokeStyle = accentColor
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(10, 20); ctx.lineTo(30, 20)
    ctx.moveTo(20, 10); ctx.lineTo(20, 30)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(482, 20); ctx.lineTo(502, 20)
    ctx.moveTo(492, 10); ctx.lineTo(492, 30)
    ctx.stroke()

    ctx.fillStyle = accentColor + '10'
    ctx.beginPath()
    ctx.arc(256, 166, 60, 0, Math.PI * 2)
    ctx.fill()

    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    return tex
  }, [accentColor])

  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position} rotation={rotation}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 4.5, 0.1]} />
          <meshStandardMaterial color="#070d24" roughness={0.5} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[3.0, 4.3]} />
          <meshBasicMaterial map={canvasTexture} />
        </mesh>
        <pointLight color={accentColor} distance={3} intensity={1} position={[0, 0, 0.6]} />
      </group>
    </Float>
  )
}

// 4. 3D Camera Spline Flight Controller
function CameraSplineRig({ scrollProgress }) {
  const { camera } = useThree()

  const spline = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 9),          // 0%: Galaxy wide view
      new THREE.Vector3(-3.2, 1.0, 2),     // 25%: Fly past Manuscript Draft 1 (Left)
      new THREE.Vector3(3.5, -0.8, -5),    // 50%: Fly past Manuscript Draft 2 (Right)
      new THREE.Vector3(-2.0, 0.6, -10),   // 75%: Fly past Manuscript Draft 3 (Left depth)
      new THREE.Vector3(0, 0.3, -12.5),    // 100%: Grand close-up centered on the Sudarshana Chakra
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
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-cosmic-950 overflow-hidden">
      <React.Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 9], fov: 55 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={['#02040a']} />
          <ambientLight intensity={0.5} />

          {/* 1. Deep Galaxy Starfield with Natural Soft Circular Stars */}
          <DeepGalaxy count={3800} />

          {/* 2. Floating 3D Storyboard Manuscript Draft Canvases */}
          <FloatingDraftCanvas
            position={[-2.8, 0.6, 2]}
            rotation={[0, 0.4, 0.03]}
            accentColor="#00f0ff"
          />
          <FloatingDraftCanvas
            position={[3.2, -0.6, -5]}
            rotation={[0, -0.45, -0.04]}
            accentColor="#ffd166"
          />
          <FloatingDraftCanvas
            position={[-2.4, 0.8, -11]}
            rotation={[0.04, 0.35, 0.02]}
            accentColor="#f4a261"
          />

          {/* 3. Real High-Definition Spinning Sudarshana Chakra */}
          <RealSudarshanaChakra position={[0, 0, -16]} scale={1.9} />

          {/* 4. 3D Camera Spline Flight Controller */}
          <CameraSplineRig scrollProgress={scrollProgress} />
        </Canvas>
      </React.Suspense>

      {/* Deep Space Vignette and Atmospheric Cosmic Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950 via-transparent to-cosmic-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-cosmic-950/40 to-cosmic-950 pointer-events-none" />
    </div>
  )
}

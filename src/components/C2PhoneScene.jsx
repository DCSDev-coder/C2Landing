import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const MODEL_URL = '/models/c2-phone.glb?v=3'
const VIDEO_URL = '/media/app-demo2-v2.mp4'

export default function C2PhoneScene({ poster }) {
  const hostRef = useRef(null)
  const canvasRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return undefined

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.08

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0, 0.05, 11.6)

    const phoneGroup = new THREE.Group()
    phoneGroup.rotation.set(0, 0, 0)
    phoneGroup.scale.setScalar(0.84)
    phoneGroup.position.y = -0.15
    scene.add(phoneGroup)

    scene.add(new THREE.HemisphereLight(0xfff6e5, 0x17342e, 2.25))
    const keyLight = new THREE.DirectionalLight(0xfff2d4, 4.8)
    keyLight.position.set(-4, 6, 8)
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0x8ed9c4, 3.4)
    rimLight.position.set(5, 1, -4)
    scene.add(rimLight)

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1, 64),
      new THREE.MeshBasicMaterial({ color: 0x17342e, transparent: true, opacity: 0.16, depthWrite: false }),
    )
    shadow.scale.set(1.88, 0.34, 1)
    shadow.position.set(0.08, -3.08, -0.24)
    scene.add(shadow)

    const video = document.createElement('video')
    video.src = VIDEO_URL
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.preload = 'auto'
    video.crossOrigin = 'anonymous'

    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.colorSpace = THREE.SRGBColorSpace
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.magFilter = THREE.LinearFilter
    videoTexture.generateMipmaps = false
    videoTexture.flipY = false
    videoTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

    const fitVideoToDisplay = () => {
      const displayAspect = 1206 / 2622
      const videoAspect = video.videoWidth / Math.max(video.videoHeight, 1)
      if (videoAspect > displayAspect) {
        videoTexture.repeat.set(displayAspect / videoAspect, 1)
        videoTexture.offset.set((1 - videoTexture.repeat.x) / 2, 0)
      }
    }
    video.addEventListener('loadedmetadata', fitVideoToDisplay)

    const screenMaterial = new THREE.MeshBasicMaterial({ map: videoTexture, toneMapped: false, side: THREE.DoubleSide })
    const loader = new GLTFLoader()
    let model = null
    let animationFrame = 0
    let isVisible = false
    let targetPointerX = 0
    let targetPointerY = 0
    let currentPointerX = 0
    let currentPointerY = 0

    loader.load(
      MODEL_URL,
      (gltf) => {
        model = gltf.scene
        model.traverse((child) => {
          if (child.isMesh && child.name === 'Screen') child.material = screenMaterial
          if (child.name === 'DynamicIsland') child.visible = false
        })
        phoneGroup.add(model)
        setIsReady(true)
      },
      undefined,
      (error) => console.error('Unable to load the C2 phone model.', error),
    )

    const resize = () => {
      const width = host.clientWidth
      const height = host.clientHeight
      const isMobile = width < 480
      phoneGroup.scale.setScalar(isMobile ? 0.72 : 0.84)
      shadow.scale.set(isMobile ? 1.58 : 1.88, isMobile ? 0.29 : 0.34, 1)
      shadow.position.y = isMobile ? -2.7 : -3.08
      renderer.setSize(width, height, false)
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
    }

    const onPointerMove = (event) => {
      const x = (event.clientX / Math.max(window.innerWidth, 1)) * 2 - 1
      const y = (event.clientY / Math.max(window.innerHeight, 1)) * 2 - 1
      targetPointerX = Math.max(-1, Math.min(1, x * 1.25))
      targetPointerY = Math.max(-1, Math.min(1, y * 1.25))
    }

    const onPointerLeave = () => {
      targetPointerX = 0
      targetPointerY = 0
    }

    const render = () => {
      if (!isVisible) return

      // Smooth double-interpolated mouse tracking
      currentPointerX += (targetPointerX - currentPointerX) * 0.055
      currentPointerY += (targetPointerY - currentPointerY) * 0.055

      // Elegant idle breathing float
      const time = performance.now() * 0.0016
      const idleFloatY = Math.sin(time * 1.5) * 0.03
      const idleFloatRotZ = Math.cos(time * 1.2) * 0.006

      // Faces directly front at rest, smoothly glides & tilts left-right with cursor
      const targetRotationX = -currentPointerY * 0.12
      const targetRotationY = currentPointerX * 0.38
      const targetRotationZ = -currentPointerX * 0.032 + idleFloatRotZ
      const targetPositionX = currentPointerX * 0.28
      const targetPositionY = -0.15 - currentPointerY * 0.04 + idleFloatY

      const damp = 0.06
      phoneGroup.rotation.x += (targetRotationX - phoneGroup.rotation.x) * damp
      phoneGroup.rotation.y += (targetRotationY - phoneGroup.rotation.y) * damp
      phoneGroup.rotation.z += (targetRotationZ - phoneGroup.rotation.z) * damp
      phoneGroup.position.x += (targetPositionX - phoneGroup.position.x) * damp
      phoneGroup.position.y += (targetPositionY - phoneGroup.position.y) * damp

      keyLight.position.x += ((-3.5 + currentPointerX * 3.5) - keyLight.position.x) * 0.05
      keyLight.position.y += ((6 - currentPointerY * 1.8) - keyLight.position.y) * 0.05
      rimLight.position.x += ((5 - currentPointerX * 2.5) - rimLight.position.x) * 0.05
      shadow.position.x += ((0.02 + currentPointerX * 0.26) - shadow.position.x) * 0.05

      renderer.render(scene, camera)
      animationFrame = window.requestAnimationFrame(render)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        window.cancelAnimationFrame(animationFrame)
        if (isVisible) {
          video.play().catch(() => undefined)
          render()
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.05 },
    )

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    observer.observe(host)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('mouseout', onPointerLeave)
    resize()

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('mouseout', onPointerLeave)
      window.cancelAnimationFrame(animationFrame)
      video.pause()
      video.removeEventListener('loadedmetadata', fitVideoToDisplay)
      video.removeAttribute('src')
      video.load()
      videoTexture.dispose()
      screenMaterial.dispose()
      renderer.dispose()
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose()
          if (child.material !== screenMaterial) {
            const materials = Array.isArray(child.material) ? child.material : [child.material]
            materials.forEach((material) => material?.dispose())
          }
        }
      })
    }
  }, [])

  return (
    <div ref={hostRef} className="relative h-[590px] sm:h-[680px] w-full max-w-[520px]" role="img" aria-label="Interactive 3D phone showing the C2 Coffee mobile app">
      <img
        src={poster}
        alt=""
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-auto -translate-x-1/2 -translate-y-1/2 rounded-[2.4rem] shadow-2xl transition-opacity duration-500 ${isReady ? 'opacity-0' : 'opacity-100'}`}
      />
      <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  )
}

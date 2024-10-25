import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as Three from "three"

function MacContainer() {
  let model = useGLTF("./mac.glb") //load a GLTF or GLB 3D model
  let tex = useTexture("./red02.jpg") 

  let meshes = {}
  model.scene.traverse(e =>{
    meshes[e.name] = e
  })

  meshes.screen.rotation.x = Three.MathUtils.degToRad(180)
  meshes.matte.material.map = tex 
  meshes.matte.material.emissiveIntensity = 0
  meshes.matte.material.metalness = 1.3
  meshes.matte.material.roughness = 1


  let data = useScroll() //data.offset value go from 0 to 1 as you scroll

  useFrame((state, delta)=>{ //useFrame works on every frame
    meshes.screen.rotation.x = Three.MathUtils.degToRad(180 - data.offset * 90)
  })

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
// import { EffectComposer, N8AO } from '@react-three/postprocessing';

function Scene(props:any) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true, pixelRatio: window.devicePixelRatio}}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      tyle={{ height: '100%' }}
      {...props}
    >
      <color attach="background" args={['#171720']} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      {/* Add your custom mesh components here */}
      {props.children}

      {/* Postprocessing effects for ambient occlusion */}
      {/* <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer> */}

      {/* Environment lighting for a studio-like look */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Canvas>
  );
}

export default Scene;

import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#3d5af1"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* <Suspense fallback={<CanvasLoader />}>  */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        {/* </Suspense>
        <Preload all /> */}
      </Canvas>
      <p className="text-center">{name}</p>
    </>
  );
};

export default BallCanvas;

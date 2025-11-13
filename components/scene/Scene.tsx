'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Sky } from '@react-three/drei';
import { Shape } from './Shape';
import { SceneTransformControls } from './TransformControls';
import { useSceneStore } from '@/lib/store/scene-store';

interface SceneProps {
  onTransformChange?: (objectId: string, position: [number, number, number], rotation: [number, number, number], scale: [number, number, number]) => void;
}

export function Scene({ onTransformChange }: SceneProps) {
  const { objects, selectedObjectId, selectObject } = useSceneStore();

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [10, 10, 10], fov: 50 }}
        onPointerMissed={() => selectObject(null)}
        shadows
        gl={{ antialias: true }}
      >
        {/* Improved Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 15, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <hemisphereLight args={['#b1e1ff', '#5c7cfa', 0.3]} />
        <pointLight position={[-10, 5, -5]} intensity={0.3} color="#ffa94d" />

        {/* Environment */}
        <Sky
          sunPosition={[100, 20, 100]}
          turbidity={8}
          rayleigh={2}
        />
        <Grid
          args={[30, 30]}
          cellSize={1}
          cellThickness={0.6}
          cellColor="#9ca3af"
          sectionSize={5}
          sectionThickness={1.2}
          sectionColor="#6366f1"
          fadeDistance={50}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid
        />

        {/* Scene Objects */}
        {objects.map((obj) => (
          <Shape
            key={obj.id}
            object={obj}
            isSelected={obj.id === selectedObjectId}
            onSelect={selectObject}
          />
        ))}

        {/* Transform Controls */}
        {selectedObjectId && <SceneTransformControls onTransformChange={onTransformChange} />}

        {/* Camera Controls */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

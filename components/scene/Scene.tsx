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
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Sky & Grid */}
        <Sky sunPosition={[100, 20, 100]} />
        <Grid
          args={[20, 20]}
          cellSize={1}
          cellThickness={0.5}
          cellColor="#6b7280"
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#374151"
          fadeDistance={50}
          fadeStrength={1}
          followCamera={false}
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

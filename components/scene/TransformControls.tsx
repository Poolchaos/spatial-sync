'use client';

import { useEffect } from 'react';
import { TransformControls as DreiTransformControls } from '@react-three/drei';
import { useSceneStore } from '@/lib/store/scene-store';
import { useThree } from '@react-three/fiber';

interface SceneTransformControlsProps {
  onTransformChange?: (objectId: string, position: [number, number, number], rotation: [number, number, number], scale: [number, number, number]) => void;
}

export function SceneTransformControls({ onTransformChange }: SceneTransformControlsProps) {
  const { selectedObjectId, objects, transformMode } = useSceneStore();
  const { scene } = useThree();

  const selectedObject = objects.find((obj) => obj.id === selectedObjectId);

  useEffect(() => {
    if (!selectedObject) return;

    const targetObject = scene.getObjectByProperty('uuid', selectedObject.id);
    if (!targetObject) return;

    const handleTransform = () => {
      const position = targetObject.position.toArray() as [number, number, number];
      const rotation = [targetObject.rotation.x, targetObject.rotation.y, targetObject.rotation.z] as [number, number, number];
      const scale = targetObject.scale.toArray() as [number, number, number];

      onTransformChange?.(selectedObject.id, position, rotation, scale);
    };

    // Call on each frame during transform
    const interval = setInterval(handleTransform, 50);
    return () => clearInterval(interval);
  }, [selectedObject, scene, onTransformChange]);

  if (!selectedObject) return null;

  return (
    <DreiTransformControls
      mode={transformMode}
      position={selectedObject.position}
      rotation={selectedObject.rotation}
      scale={selectedObject.scale}
    />
  );
}

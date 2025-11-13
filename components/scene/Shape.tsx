'use client';

import { useRef } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import { Mesh } from 'three';
import { SceneObject } from '@/lib/sync/types';

interface ShapeProps {
  object: SceneObject;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function Shape({ object, isSelected, onSelect }: ShapeProps) {
  const meshRef = useRef<Mesh>(null);

  const getGeometry = () => {
    switch (object.type) {
      case 'cube':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.5, 0.5, 1, 32]} />;
      case 'plane':
        return <planeGeometry args={[1, 1]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={object.position}
      rotation={object.rotation}
      scale={object.scale}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onSelect(object.id);
      }}
    >
      {getGeometry()}
      <meshStandardMaterial
        color={object.color}
        emissive={isSelected ? '#ffffff' : '#000000'}
        emissiveIntensity={isSelected ? 0.2 : 0}
      />
    </mesh>
  );
}

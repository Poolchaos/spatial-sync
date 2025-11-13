'use client';

import { useRef, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

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
      castShadow
      receiveShadow
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onSelect(object.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {getGeometry()}
      <meshStandardMaterial
        color={object.color}
        metalness={0.1}
        roughness={0.4}
        emissive={isSelected ? '#6366f1' : isHovered ? '#818cf8' : '#000000'}
        emissiveIntensity={isSelected ? 0.4 : isHovered ? 0.2 : 0}
      />
    </mesh>
  );
}

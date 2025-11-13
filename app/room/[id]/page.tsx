'use client';

import { useParams } from 'next/navigation';
import { Scene } from '@/components/scene/Scene';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { useYjsSync } from '@/lib/hooks/use-yjs-sync';
import { useSceneStore } from '@/lib/store/scene-store';
import { useCallback } from 'react';
import { Badge } from '@/components/ui/badge';

export default function RoomPage() {
  const params = useParams();
  const roomId = params.id as string;

  const { addObject, updateObject } = useYjsSync(roomId);
  const { isConnected, activeTool } = useSceneStore();

  const handleCanvasClick = useCallback(() => {
    // Only add objects when a shape tool is selected
    if (['cube', 'sphere', 'cylinder', 'plane'].includes(activeTool)) {
      const newObject = {
        id: crypto.randomUUID(),
        type: activeTool as 'cube' | 'sphere' | 'cylinder' | 'plane',
        position: [0, 1, 0] as [number, number, number],
        rotation: [0, 0, 0] as [number, number, number],
        scale: [1, 1, 1] as [number, number, number],
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        timestamp: Date.now(),
      };
      addObject(newObject);
    }
  }, [activeTool, addObject]);

  const handleTransformChange = useCallback(
    (objectId: string, position: [number, number, number], rotation: [number, number, number], scale: [number, number, number]) => {
      updateObject(objectId, { position, rotation, scale });
    },
    [updateObject]
  );

  return (
    <div className="w-screen h-screen relative">
      {/* Connection Status */}
      <div className="absolute top-4 right-4 z-10">
        <Badge variant={isConnected ? 'default' : 'destructive'}>
          {isConnected ? 'Connected' : 'Disconnected'}
        </Badge>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* 3D Scene */}
      <div className="w-full h-full" onClick={handleCanvasClick}>
        <Scene onTransformChange={handleTransformChange} />
      </div>
    </div>
  );
}

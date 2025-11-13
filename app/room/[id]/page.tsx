'use client';

import { useParams } from 'next/navigation';
import { Scene } from '@/components/scene/Scene';
import { Toolbar } from '@/components/toolbar/Toolbar';
import { UserList } from '@/components/user-list/UserList';
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
    <div className="w-screen h-screen relative bg-gray-50 dark:bg-gray-950">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-20 flex items-center justify-between px-6">
        {/* Room Info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Collaboration Room
            </span>
          </div>
        </div>

        {/* Connection Status */}
        <Badge
          variant={isConnected ? 'default' : 'destructive'}
          className="shadow-sm"
        >
          {isConnected ? (
            <span className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Connected
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Disconnected
            </span>
          )}
        </Badge>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* User List */}
      <UserList />

      {/* Instructions Overlay (when no tool selected) */}
      {activeTool === 'select' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="bg-black/75 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full shadow-lg">
            💡 Select a shape tool from the toolbar to add objects
          </div>
        </div>
      )}

      {/* 3D Scene */}
      <div className="w-full h-full pt-16" onClick={handleCanvasClick}>
        <Scene onTransformChange={handleTransformChange} />
      </div>
    </div>
  );
}

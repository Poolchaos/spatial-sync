'use client';

import { useEffect, useRef, useCallback } from 'react';
import { YjsSync } from '../sync/yjs-provider';
import { useSceneStore } from '../store/scene-store';
import { SceneObject } from '../sync/types';

export function useYjsSync(roomId: string | null) {
  const syncRef = useRef<YjsSync | null>(null);
  const { setObjects, setUsers, setIsConnected } = useSceneStore();

  useEffect(() => {
    if (!roomId) return;

    const sync = new YjsSync(roomId);
    syncRef.current = sync;

    // Subscribe to object changes
    const unsubscribeObjects = sync.onObjectsChange((objects) => {
      setObjects(objects);
    });

    // Subscribe to user presence changes
    const unsubscribePresence = sync.onPresenceChange((users) => {
      setUsers(users);
    });

    // Subscribe to connection changes
    const unsubscribeConnection = sync.onConnectionChange((connected) => {
      setIsConnected(connected);
    });

    // Initial state
    setObjects(sync.getAllObjects());
    setUsers(sync.getAllPresence());
    setIsConnected(sync.isConnected);

    return () => {
      unsubscribeObjects();
      unsubscribePresence();
      unsubscribeConnection();
      sync.destroy();
    };
  }, [roomId, setObjects, setUsers, setIsConnected]);

  const addObject = useCallback((object: SceneObject) => {
    syncRef.current?.addObject(object);
  }, []);

  const updateObject = useCallback((id: string, updates: Partial<SceneObject>) => {
    syncRef.current?.updateObject(id, updates);
  }, []);

  const deleteObject = useCallback((id: string) => {
    syncRef.current?.deleteObject(id);
  }, []);

  const updatePresence = useCallback((presence: Parameters<YjsSync['setLocalPresence']>[0]) => {
    syncRef.current?.setLocalPresence(presence);
  }, []);

  return {
    addObject,
    updateObject,
    deleteObject,
    updatePresence,
  };
}

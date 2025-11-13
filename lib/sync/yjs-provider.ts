'use client';

import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { SceneObject, UserPresence } from './types';
import type { Awareness } from 'y-protocols/awareness';

export class YjsSync {
  private doc: Y.Doc;
  private provider: WebsocketProvider | null = null;
  private objectsMap: Y.Map<SceneObject>;
  private awareness: Awareness;

  constructor(roomId: string) {
    this.doc = new Y.Doc();
    this.objectsMap = this.doc.getMap('objects');

    // Connect to WebSocket server
    const wsUrl = process.env.NEXT_PUBLIC_YJS_WEBSOCKET_URL || 'ws://localhost:1234';
    this.provider = new WebsocketProvider(wsUrl, roomId, this.doc);
    this.awareness = this.provider.awareness;
  }

  // Object management
  addObject(object: SceneObject): void {
    this.objectsMap.set(object.id, object);
  }

  updateObject(id: string, updates: Partial<SceneObject>): void {
    const existing = this.objectsMap.get(id);
    if (existing) {
      this.objectsMap.set(id, { ...existing, ...updates, timestamp: Date.now() });
    }
  }

  deleteObject(id: string): void {
    this.objectsMap.delete(id);
  }

  getObject(id: string): SceneObject | undefined {
    return this.objectsMap.get(id);
  }

  getAllObjects(): SceneObject[] {
    return Array.from(this.objectsMap.values());
  }

  // Observation
  onObjectsChange(callback: (objects: SceneObject[]) => void): () => void {
    const observer = () => {
      callback(this.getAllObjects());
    };
    this.objectsMap.observe(observer);
    return () => this.objectsMap.unobserve(observer);
  }

  // User presence
  setLocalPresence(presence: Partial<UserPresence>): void {
    const current = this.awareness.getLocalState() || {};
    this.awareness.setLocalState({ ...current, ...presence, lastActive: Date.now() });
  }

  getPresence(userId: number): UserPresence | null {
    const state = this.awareness.getStates().get(userId);
    return state ? (state as UserPresence) : null;
  }

  getAllPresence(): UserPresence[] {
    return Array.from(this.awareness.getStates().values()) as UserPresence[];
  }

  onPresenceChange(callback: (users: UserPresence[]) => void): () => void {
    const observer = () => {
      callback(this.getAllPresence());
    };
    this.awareness.on('change', observer);
    return () => this.awareness.off('change', observer);
  }

  // Cleanup
  destroy(): void {
    this.provider?.destroy();
    this.doc.destroy();
  }

  // Connection status
  get isConnected(): boolean {
    return this.provider?.wsconnected || false;
  }

  onConnectionChange(callback: (connected: boolean) => void): () => void {
    const statusHandler = ({ status }: { status: string }) => {
      callback(status === 'connected');
    };
    this.provider?.on('status', statusHandler);
    return () => this.provider?.off('status', statusHandler);
  }
}

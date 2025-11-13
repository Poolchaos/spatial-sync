'use client';

import { create } from 'zustand';
import { SceneObject, UserPresence } from '../sync/types';

export type Tool = 'select' | 'cube' | 'sphere' | 'cylinder' | 'plane' | 'transform';
export type TransformMode = 'translate' | 'rotate' | 'scale';

interface SceneStore {
  // Scene state
  objects: SceneObject[];
  setObjects: (objects: SceneObject[]) => void;

  // Selection
  selectedObjectId: string | null;
  selectObject: (id: string | null) => void;

  // Tools
  activeTool: Tool;
  setActiveTool: (tool: Tool) => void;

  // Transform
  transformMode: TransformMode;
  setTransformMode: (mode: TransformMode) => void;

  // Users
  users: UserPresence[];
  setUsers: (users: UserPresence[]) => void;

  // Connection
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;

  // Camera
  cameraPosition: [number, number, number];
  setCameraPosition: (position: [number, number, number]) => void;

  // UI
  showUserList: boolean;
  toggleUserList: () => void;

  showExportModal: boolean;
  setShowExportModal: (show: boolean) => void;
}

export const useSceneStore = create<SceneStore>((set) => ({
  // Scene state
  objects: [],
  setObjects: (objects) => set({ objects }),

  // Selection
  selectedObjectId: null,
  selectObject: (id) => set({ selectedObjectId: id }),

  // Tools
  activeTool: 'select',
  setActiveTool: (tool) => set({ activeTool: tool }),

  // Transform
  transformMode: 'translate',
  setTransformMode: (mode) => set({ transformMode: mode }),

  // Users
  users: [],
  setUsers: (users) => set({ users }),

  // Connection
  isConnected: false,
  setIsConnected: (connected) => set({ isConnected: connected }),

  // Camera
  cameraPosition: [10, 10, 10],
  setCameraPosition: (position) => set({ cameraPosition: position }),

  // UI
  showUserList: true,
  toggleUserList: () => set((state) => ({ showUserList: !state.showUserList })),

  showExportModal: false,
  setShowExportModal: (show) => set({ showExportModal: show }),
}));

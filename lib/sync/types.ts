export interface SceneObject {
  id: string;
  type: 'cube' | 'sphere' | 'cylinder' | 'plane';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  userId?: string;
  timestamp: number;
}

export interface UserPresence {
  userId: string;
  name: string;
  color: string;
  cursor?: {
    position: [number, number, number];
    visible: boolean;
  };
  selectedObjectId?: string;
  lastActive: number;
}

export interface RoomState {
  objects: Map<string, SceneObject>;
  users: Map<string, UserPresence>;
}

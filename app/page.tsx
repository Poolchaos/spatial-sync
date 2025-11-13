'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Box } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);

  const createRoom = () => {
    setIsCreating(true);
    const roomId = crypto.randomUUID();
    router.push(`/room/${roomId}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 text-center px-4">
        <div className="flex items-center gap-3">
          <Box className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            SpatialSync
          </h1>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
          Real-time 3D collaboration whiteboard. Create and manipulate 3D objects together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={createRoom}
            disabled={isCreating}
          >
            {isCreating ? 'Creating...' : 'Create New Room'}
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Features: Real-time sync  3D shapes  Transform controls</p>
        </div>
      </main>
    </div>
  );
}

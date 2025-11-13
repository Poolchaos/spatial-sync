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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <main className="flex flex-col items-center gap-8 text-center px-4 max-w-2xl">
        {/* Logo & Title */}
        <div className="flex items-center gap-4 animate-in fade-in duration-500">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl">
            <Box className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            SpatialSync
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-2xl font-medium text-gray-700 dark:text-gray-200 animate-in fade-in duration-700 delay-100">
          Real-time 3D Collaboration
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed animate-in fade-in duration-700 delay-200">
          Create and manipulate 3D objects together in a shared workspace. Perfect for design teams, educators, and creative collaboration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-in fade-in duration-700 delay-300">
          <Button
            size="lg"
            onClick={createRoom}
            disabled={isCreating}
            className="text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all"
          >
            {isCreating ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating Room...
              </span>
            ) : (
              'Create New Room'
            )}
          </Button>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full animate-in fade-in duration-700 delay-500">
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl">⚡</div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Real-time Sync</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{'<100ms latency'}</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl">🎨</div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">3D Shapes</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Cubes, spheres & more</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <div className="text-3xl">🎮</div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Transform Tools</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Move, rotate, scale</p>
          </div>
        </div>
      </main>
    </div>
  );
}

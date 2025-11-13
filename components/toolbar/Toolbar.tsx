'use client';

import { Box, Circle, Cylinder, Square, Move, RotateCw, Scale, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useSceneStore, type Tool, type TransformMode } from '@/lib/store/scene-store';

export function Toolbar() {
  const { activeTool, setActiveTool, transformMode, setTransformMode, selectedObjectId } = useSceneStore();

  const tools: { id: Tool; icon: React.ReactNode; label: string; description: string }[] = [
    { id: 'select', icon: <MousePointer2 className="h-5 w-5" />, label: 'Select', description: 'Select and manipulate objects' },
    { id: 'cube', icon: <Box className="h-5 w-5" />, label: 'Cube', description: 'Add a cube to the scene' },
    { id: 'sphere', icon: <Circle className="h-5 w-5" />, label: 'Sphere', description: 'Add a sphere to the scene' },
    { id: 'cylinder', icon: <Cylinder className="h-5 w-5" />, label: 'Cylinder', description: 'Add a cylinder to the scene' },
    { id: 'plane', icon: <Square className="h-5 w-5" />, label: 'Plane', description: 'Add a plane to the scene' },
  ];

  const transformTools: { id: TransformMode; icon: React.ReactNode; label: string; shortcut: string }[] = [
    { id: 'translate', icon: <Move className="h-5 w-5" />, label: 'Move', shortcut: 'G' },
    { id: 'rotate', icon: <RotateCw className="h-5 w-5" />, label: 'Rotate', shortcut: 'R' },
    { id: 'scale', icon: <Scale className="h-5 w-5" />, label: 'Scale', shortcut: 'S' },
  ];

  return (
    <TooltipProvider delayDuration={200}>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-2">
          <div className="flex items-center gap-1">
            {/* Shape Tools */}
            <div className="flex items-center gap-1 pr-2">
              {tools.map((tool) => (
                <Tooltip key={tool.id}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={activeTool === tool.id ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => setActiveTool(tool.id)}
                      className={`transition-all ${
                        activeTool === tool.id 
                          ? 'shadow-md scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      {tool.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">{tool.label}</p>
                      <p className="text-xs text-gray-500">{tool.description}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <Separator orientation="vertical" className="h-10 mx-1" />

            {/* Transform Tools */}
            <div className="flex items-center gap-1 pl-2">
              {transformTools.map((tool) => (
                <Tooltip key={tool.id}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={transformMode === tool.id ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => setTransformMode(tool.id)}
                      disabled={!selectedObjectId}
                      className={`transition-all relative ${
                        transformMode === tool.id 
                          ? 'shadow-md scale-105' 
                          : 'hover:scale-105'
                      }`}
                    >
                      {tool.icon}
                      {!selectedObjectId && (
                        <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 rounded-md" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <div className="flex flex-col gap-0.5">
                      <p className="font-semibold">{tool.label}</p>
                      <p className="text-xs text-gray-500">
                        Keyboard: <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">{tool.shortcut}</kbd>
                      </p>
                      {!selectedObjectId && (
                        <p className="text-xs text-amber-500 mt-1">Select an object first</p>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

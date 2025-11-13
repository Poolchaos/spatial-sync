'use client';

import { Box, Circle, Cylinder, Square, Move, RotateCw, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useSceneStore, type Tool, type TransformMode } from '@/lib/store/scene-store';

export function Toolbar() {
  const { activeTool, setActiveTool, transformMode, setTransformMode } = useSceneStore();

  const tools: { id: Tool; icon: React.ReactNode; label: string }[] = [
    { id: 'cube', icon: <Box className="h-5 w-5" />, label: 'Add Cube' },
    { id: 'sphere', icon: <Circle className="h-5 w-5" />, label: 'Add Sphere' },
    { id: 'cylinder', icon: <Cylinder className="h-5 w-5" />, label: 'Add Cylinder' },
    { id: 'plane', icon: <Square className="h-5 w-5" />, label: 'Add Plane' },
  ];

  const transformTools: { id: TransformMode; icon: React.ReactNode; label: string }[] = [
    { id: 'translate', icon: <Move className="h-5 w-5" />, label: 'Move' },
    { id: 'rotate', icon: <RotateCw className="h-5 w-5" />, label: 'Rotate' },
    { id: 'scale', icon: <Scale className="h-5 w-5" />, label: 'Scale' },
  ];

  return (
    <TooltipProvider>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border rounded-lg shadow-lg p-2 flex items-center gap-2 z-10">
        {/* Shape Tools */}
        {tools.map((tool) => (
          <Tooltip key={tool.id}>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === tool.id ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setActiveTool(tool.id)}
              >
                {tool.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tool.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="h-8" />

        {/* Transform Tools */}
        {transformTools.map((tool) => (
          <Tooltip key={tool.id}>
            <TooltipTrigger asChild>
              <Button
                variant={transformMode === tool.id ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setTransformMode(tool.id)}
              >
                {tool.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tool.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

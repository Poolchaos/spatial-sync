# SpatialSyncThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)## Getting Started

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)First, run the development server:

[![Three.js](https://img.shields.io/badge/Three.js-R3F-orange)](https://threejs.org/)

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)```bash

npm run dev

> Real-time 3D collaboration whiteboard — Figma-style collaboration, but in 3D# or

yarn dev

SpatialSync is a web application that enables teams to co-create in shared 3D space with real-time synchronization. Built with React Three Fiber and Yjs for low-latency collaboration.# or

pnpm dev

## ✨ Features# or

bun dev

- **Real-time 3D Collaboration**: Multiple users can see and manipulate the same 3D space simultaneously```

- **3D Primitive Shapes**: Create cubes, spheres, cylinders, and planes

- **Transform Controls**: Move, rotate, and scale objects in 3D spaceOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **Low-Latency Sync**: Changes sync across all participants in <100ms (local network)

- **Intuitive Toolbar**: Easy-to-use interface for shape creation and manipulationYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Session Management**: Create and join collaboration rooms via unique URLs

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🚀 Getting Started

## Learn More

### Prerequisites

To learn more about Next.js, take a look at the following resources:

- Node.js 20+

- npm or pnpm- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Installation

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

```bash

# Clone the repository## Deploy on Vercel

git clone https://github.com/Poolchaos/spatial-sync.git

cd spatial-syncThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



# Install dependenciesCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

npm install

# Set up environment variables
cp .env.example .env

# Start development server (runs on port 5173)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to access the application.

### Environment Variables

```env
NEXT_PUBLIC_YJS_WEBSOCKET_URL=ws://localhost:1234
```

**Note**: You'll need to run a Yjs WebSocket server for real-time sync. For development, you can use:

```bash
# Install y-websocket server
npx y-websocket-server

# Or use a hosted solution like Liveblocks
```

## 🎯 Usage

1. **Create a Room**: Click "Create New Room" on the landing page
2. **Add Objects**: Use the toolbar to select a shape (cube, sphere, cylinder, plane) and click in the 3D space
3. **Transform Objects**: Click an object to select it, then use transform controls:
   - Move: Translate icon
   - Rotate: Rotation icon
   - Scale: Scale icon
4. **Collaborate**: Share the room URL with teammates to collaborate in real-time

## 🏗️ Architecture

```
app/
  page.tsx                    # Landing page (create/join room)
  room/[id]/page.tsx          # 3D collaboration workspace
components/
  scene/
    Scene.tsx                 # React Three Fiber canvas
    Shape.tsx                 # 3D primitive renderer
    TransformControls.tsx     # Transform manipulation
  toolbar/
    Toolbar.tsx               # Shape & transform tool selector
  ui/                         # shadcn/ui components
lib/
  sync/
    yjs-provider.ts           # Yjs integration for real-time sync
    types.ts                  # Shared data structures
  store/
    scene-store.ts            # Zustand local state management
  hooks/
    use-yjs-sync.ts           # Yjs sync React hook
```

### Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **3D Rendering**: React Three Fiber, Drei, Three.js
- **Real-time Sync**: Yjs + y-websocket
- **State Management**: Zustand
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Language**: TypeScript (strict mode)
- **Testing**: Jest, React Testing Library, Playwright

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Core Concepts

### Real-time Synchronization

SpatialSync uses **Yjs** (a CRDT library) for conflict-free real-time collaboration:
- Changes to 3D objects are synced via WebSocket
- Each user's cursor and selection are broadcast via awareness
- Sync latency: <100ms local, <300ms global

### 3D Scene Management

- **Scene Objects**: Each 3D primitive has position, rotation, scale, and color
- **Transform Controls**: Drei's TransformControls provide intuitive manipulation
- **Camera**: OrbitControls allow free camera movement

## 🛣️ Roadmap

### Completed (MVP)
- ✅ Real-time 3D scene sync
- ✅ 3D primitive shapes (cube, sphere, cylinder, plane)
- ✅ Transform controls (move, rotate, scale)
- ✅ Session management (create/join rooms)
- ✅ Basic toolbar UI

### In Progress
- 🚧 User presence indicators (cursors, selections)
- 🚧 Export functionality (glTF, screenshots)

### Planned
- [ ] 3D model import (glTF/FBX)
- [ ] Color/material editor
- [ ] Text annotations (3D labels)
- [ ] Undo/redo (collaborative)
- [ ] Spatial audio integration
- [ ] VR mode (WebXR)

## 📝 License

MIT License - see [LICENSE](LICENSE) for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🔗 Links

- **Repository**: [github.com/Poolchaos/spatial-sync](https://github.com/Poolchaos/spatial-sync)
- **Documentation**: [Project Wiki](https://github.com/Poolchaos/spatial-sync#readme)
- **Issues**: [GitHub Issues](https://github.com/Poolchaos/spatial-sync/issues)

---

**Built with** ❤️ **using Next.js, React Three Fiber, and Yjs**

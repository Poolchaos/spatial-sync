# SpatialSync# SpatialSyncThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)## Getting Started

[![Three.js](https://img.shields.io/badge/Three.js-R3F-orange)](https://threejs.org/)

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)



> Real-time 3D collaboration whiteboard — Figma-style collaboration, but in 3D[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)First, run the development server:



SpatialSync is a web application that enables teams to co-create in shared 3D space with real-time synchronization. Built with React Three Fiber and Yjs for low-latency collaboration.[![Three.js](https://img.shields.io/badge/Three.js-R3F-orange)](https://threejs.org/)



## ✨ Features[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)```bash



- **Real-time 3D Collaboration**: Multiple users can see and manipulate the same 3D space simultaneouslynpm run dev

- **3D Primitive Shapes**: Create cubes, spheres, cylinders, and planes

- **Transform Controls**: Move, rotate, and scale objects in 3D space> Real-time 3D collaboration whiteboard — Figma-style collaboration, but in 3D# or

- **Low-Latency Sync**: Changes sync across all participants in <100ms (local network)

- **Intuitive Toolbar**: Easy-to-use interface for shape creation and manipulationyarn dev

- **Session Management**: Create and join collaboration rooms via unique URLs

- **User Presence**: See who's online and what they're working onSpatialSync is a web application that enables teams to co-create in shared 3D space with real-time synchronization. Built with React Three Fiber and Yjs for low-latency collaboration.# or

- **Modern UI**: Polished interface with smooth animations and visual feedback

pnpm dev

## 🚀 Getting Started

## ✨ Features# or

### Prerequisites

bun dev

- Node.js 20+ 

- npm or pnpm- **Real-time 3D Collaboration**: Multiple users can see and manipulate the same 3D space simultaneously```



### Installation- **3D Primitive Shapes**: Create cubes, spheres, cylinders, and planes



```bash- **Transform Controls**: Move, rotate, and scale objects in 3D spaceOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Clone the repository

git clone https://github.com/Poolchaos/spatial-sync.git- **Low-Latency Sync**: Changes sync across all participants in <100ms (local network)

cd spatial-sync

- **Intuitive Toolbar**: Easy-to-use interface for shape creation and manipulationYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Install dependencies

npm install- **Session Management**: Create and join collaboration rooms via unique URLs



# Set up environment variablesThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

cp .env.example .env

## 🚀 Getting Started

# Start development server (runs on port 5173)

npm run dev## Learn More

```

### Prerequisites

Open [http://localhost:5173](http://localhost:5173) to access the application.

To learn more about Next.js, take a look at the following resources:

### Environment Variables

- Node.js 20+

```env

NEXT_PUBLIC_YJS_WEBSOCKET_URL=ws://localhost:1234- npm or pnpm- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

```

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

**Note**: You'll need to run a Yjs WebSocket server for real-time sync. For development, you can use:

### Installation

```bash

# Install y-websocket serverYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

npx y-websocket-server

```bash

# Or use a hosted solution like Liveblocks

```# Clone the repository## Deploy on Vercel



## 🎯 Usagegit clone https://github.com/Poolchaos/spatial-sync.git



1. **Create a Room**: Click "Create New Room" on the landing pagecd spatial-syncThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

2. **Add Objects**: Use the toolbar to select a shape (cube, sphere, cylinder, plane) and click in the 3D space

3. **Transform Objects**: Click an object to select it, then use transform controls:

   - Move: Translate icon (keyboard: G)

   - Rotate: Rotation icon (keyboard: R)# Install dependenciesCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

   - Scale: Scale icon (keyboard: S)

4. **Collaborate**: Share the room URL with teammates to collaborate in real-timenpm install



## 🏗️ Architecture# Set up environment variables

cp .env.example .env

```

app/# Start development server (runs on port 5173)

  page.tsx                    # Landing page (create/join room)npm run dev

  room/[id]/page.tsx          # 3D collaboration workspace```

components/

  scene/Open [http://localhost:5173](http://localhost:5173) to access the application.

    Scene.tsx                 # React Three Fiber canvas

    Shape.tsx                 # 3D primitive renderer### Environment Variables

    TransformControls.tsx     # Transform manipulation

  toolbar/```env

    Toolbar.tsx               # Shape & transform tool selectorNEXT_PUBLIC_YJS_WEBSOCKET_URL=ws://localhost:1234

  user-list/```

    UserList.tsx              # Active users panel

  ui/                         # shadcn/ui components**Note**: You'll need to run a Yjs WebSocket server for real-time sync. For development, you can use:

lib/

  sync/```bash

    yjs-provider.ts           # Yjs integration for real-time sync# Install y-websocket server

    types.ts                  # Shared data structuresnpx y-websocket-server

  store/

    scene-store.ts            # Zustand local state management# Or use a hosted solution like Liveblocks

  hooks/```

    use-yjs-sync.ts           # Yjs sync React hook

```## 🎯 Usage



### Tech Stack1. **Create a Room**: Click "Create New Room" on the landing page

2. **Add Objects**: Use the toolbar to select a shape (cube, sphere, cylinder, plane) and click in the 3D space

- **Framework**: Next.js 15 (App Router) + React 193. **Transform Objects**: Click an object to select it, then use transform controls:

- **3D Rendering**: React Three Fiber, Drei, Three.js   - Move: Translate icon

- **Real-time Sync**: Yjs + y-websocket   - Rotate: Rotation icon

- **State Management**: Zustand   - Scale: Scale icon

- **Styling**: Tailwind CSS v4 + shadcn/ui4. **Collaborate**: Share the room URL with teammates to collaborate in real-time

- **Language**: TypeScript (strict mode)

- **Testing**: Jest, React Testing Library, Playwright## 🏗️ Architecture



## 🧪 Testing```

app/

```bash  page.tsx                    # Landing page (create/join room)

# Run unit tests  room/[id]/page.tsx          # 3D collaboration workspace

npm testcomponents/

  scene/

# Run tests in watch mode    Scene.tsx                 # React Three Fiber canvas

npm run test:watch    Shape.tsx                 # 3D primitive renderer

    TransformControls.tsx     # Transform manipulation

# Run E2E tests  toolbar/

npm run test:e2e    Toolbar.tsx               # Shape & transform tool selector

```  ui/                         # shadcn/ui components

lib/

## 📦 Deployment  sync/

    yjs-provider.ts           # Yjs integration for real-time sync

### Vercel (Recommended)    types.ts                  # Shared data structures

  store/

```bash    scene-store.ts            # Zustand local state management

# Install Vercel CLI  hooks/

npm i -g vercel    use-yjs-sync.ts           # Yjs sync React hook

```

# Deploy

vercel### Tech Stack

```

- **Framework**: Next.js 15 (App Router) + React 19

### Manual Deployment- **3D Rendering**: React Three Fiber, Drei, Three.js

- **Real-time Sync**: Yjs + y-websocket

```bash- **State Management**: Zustand

# Build for production- **Styling**: Tailwind CSS v4 + shadcn/ui

npm run build- **Language**: TypeScript (strict mode)

- **Testing**: Jest, React Testing Library, Playwright

# Start production server

npm start## 🧪 Testing

```

```bash

## 🎨 Core Concepts# Run unit tests

npm test

### Real-time Synchronization

# Run tests in watch mode

SpatialSync uses **Yjs** (a CRDT library) for conflict-free real-time collaboration:npm run test:watch

- Changes to 3D objects are synced via WebSocket

- Each user's cursor and selection are broadcast via awareness# Run E2E tests

- Sync latency: <100ms local, <300ms globalnpm run test:e2e

```

### 3D Scene Management

## 📦 Deployment

- **Scene Objects**: Each 3D primitive has position, rotation, scale, and color

- **Transform Controls**: Drei's TransformControls provide intuitive manipulation### Vercel (Recommended)

- **Camera**: OrbitControls allow free camera movement

- **Lighting**: Professional setup with ambient, directional, hemisphere, and point lights```bash

- **Materials**: PBR materials with metalness and roughness for realistic rendering# Install Vercel CLI

npm i -g vercel

## 🛣️ Roadmap

# Deploy

### Completed (MVP)vercel

- ✅ Real-time 3D scene sync```

- ✅ 3D primitive shapes (cube, sphere, cylinder, plane)

- ✅ Transform controls (move, rotate, scale)### Manual Deployment

- ✅ Session management (create/join rooms)

- ✅ Modern toolbar with visual feedback```bash

- ✅ User presence panel# Build for production

- ✅ Professional lighting and materialsnpm run build

- ✅ Hover effects and visual feedback

# Start production server

### Planned Featuresnpm start

- [ ] 3D model import (glTF/FBX)```

- [ ] Color/material editor

- [ ] Text annotations (3D labels)## 🎨 Core Concepts

- [ ] Undo/redo (collaborative)

- [ ] Export functionality (glTF, screenshots)### Real-time Synchronization

- [ ] Spatial audio integration

- [ ] VR mode (WebXR)SpatialSync uses **Yjs** (a CRDT library) for conflict-free real-time collaboration:

- [ ] User cursors in 3D space- Changes to 3D objects are synced via WebSocket

- [ ] Object grouping and hierarchy- Each user's cursor and selection are broadcast via awareness

- [ ] Keyboard shortcuts- Sync latency: <100ms local, <300ms global



## 📝 License### 3D Scene Management



MIT License - see [LICENSE](LICENSE) for details- **Scene Objects**: Each 3D primitive has position, rotation, scale, and color

- **Transform Controls**: Drei's TransformControls provide intuitive manipulation

## 🤝 Contributing- **Camera**: OrbitControls allow free camera movement



Contributions are welcome! Please feel free to submit a Pull Request.## 🛣️ Roadmap



## 🔗 Links### Completed (MVP)

- ✅ Real-time 3D scene sync

- **Repository**: [github.com/Poolchaos/spatial-sync](https://github.com/Poolchaos/spatial-sync)- ✅ 3D primitive shapes (cube, sphere, cylinder, plane)

- **Documentation**: [Project Wiki](https://github.com/Poolchaos/spatial-sync#readme)- ✅ Transform controls (move, rotate, scale)

- **Issues**: [GitHub Issues](https://github.com/Poolchaos/spatial-sync/issues)- ✅ Session management (create/join rooms)

- ✅ Basic toolbar UI

---

### In Progress

**Built with** ❤️ **using Next.js, React Three Fiber, and Yjs**- 🚧 User presence indicators (cursors, selections)

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

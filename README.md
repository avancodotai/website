<div align="center">

# 🥋 Avanço

### *Notes That Level You Up*

**Your Complete BJJ Training Companion**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-FF6B6B?style=flat-square)](https://nextjs.org/docs/architecture/turbopack)

</div>

---

## ✨ About

**Avanço** *(ə-ˈvan-so)* – Portuguese for "to progress, to advance, to level up"

Transform your Brazilian Jiu-Jitsu training with AI-enhanced notes, smart flashcards, personalized training plans, and comprehensive progress tracking. Avanço helps you capture, organize, and learn from every roll, technique, and insight.

### 🎯 Key Features

- **📝 AI-Enhanced Notes** – Turn rough training notes into structured, searchable insights
- **🧠 Smart Flashcards** – Spaced repetition for technique retention
- **📊 Progress Tracking** – Visualize your journey from white to black belt
- **🎓 Personalized Training Plans** – Tailored to your goals and skill level
- **🤝 Training Partner History** – Track rolls and learn from each training session
- **🎥 Technique Library** – Curated collection of moves and setups

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/avanco-website.git
cd avanco-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 with App Router |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Build Tool** | Turbopack |
| **Animations** | Framer Motion |
| **UI Components** | Radix UI Primitives |
| **Icons** | Lucide React |
| **Code Quality** | Biome (Linting + Formatting) |
| **Git Hooks** | Lefthook |

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run Biome linter |
| `npm run format` | Format code with Biome |
| `npx tsc --noEmit` | Type-check TypeScript |

---

## 📁 Project Structure

```
avanco-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── hero.tsx      # Hero section
│   │   ├── features.tsx  # Features showcase
│   │   ├── cta.tsx       # Call-to-action
│   │   └── ...
│   └── lib/              # Utility functions
│       └── utils.ts      # Helper functions (cn, etc.)
├── public/               # Static assets
├── CLAUDE.md            # AI assistant instructions
└── lefthook.yml         # Git hooks configuration
```

---

## 💻 Development Workflow

### Code Quality

This project uses **Biome** for linting and formatting, replacing traditional ESLint + Prettier setups.

```bash
# Check code quality
npm run lint

# Auto-fix issues and format
npm run format
```

### Git Hooks

**Lefthook** automatically runs checks on commits and pushes:

- **Pre-commit**: Formats and lints staged files
- **Pre-push**: Validates code before pushing

### Type Safety

TypeScript is configured for strict type checking:

```bash
# Run type checker
npx tsc --noEmit
```

---

## 🎨 Styling

### Tailwind CSS v4

This project uses the latest Tailwind CSS v4 with PostCSS integration. The `cn()` utility function combines `clsx` and `tailwind-merge` for conditional classes:

```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)} />
```

### Color Palette

- **Primary**: Orange (`orange-400`, `orange-500`)
- **Accent**: Rose (`rose-400`, `rose-500`)
- **Neutral**: Gray scale
- **Success**: Emerald/Teal

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Commit Convention

Follow conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates
- `chore:` Build/tooling changes

---

## 📄 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

Built with modern web technologies and a passion for Brazilian Jiu-Jitsu.

- Inspired by the BJJ community
- Powered by Next.js and the Vercel ecosystem
- Styled with Tailwind CSS

---

<div align="center">

**Made with ❤️ for the BJJ community**

[Website](https://avanco.com) · [Contact](mailto:hello@avanco.com)

</div>

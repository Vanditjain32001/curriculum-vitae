# Vandit Jain — Modern Interactive Portfolio Website

A modern, high-performance portfolio website engineered for **Vandit Jain** — Strategic Backend Software Engineer specializing in Golang, microservices, distributed streaming pipelines, and AI-augmented engineering workflows.

---

## 🚀 Key Highlights & Features

- **Backend Engineering Command Center (Hero):**
  - Live impact KPI metric cards (3.5+ Years Experience, 300+ TSP Providers, -20% Latency, +15% Query Efficiency).
  - Code preview window showcasing Go concurrent worker pool and strict JSON schema normalization logic.
- **Interactive Telematics Pipeline Simulator (`#simulator`):**
  - Interactive IoT event simulator showing live telematics packet ingestion across 300+ providers through Go worker pools, schema normalization, Kafka bus, and Postgres/Redis caching with real-time latency traces.
- **Interactive Developer CLI Terminal (`>_ CLI`):**
  - Monospace command-line emulator accessible from the navbar, hero, or footer with commands: `help`, `bio`, `skills`, `projects`, `catena`, `panasonic`, `precium`, `fitpass`, `contact`, `resume`, `clear`, and `exit`.
- **Featured Systems & Deep-Dive Case Studies:**
  - **Catena Clearing:** 300+ telematics provider normalization platform in Go.
  - **Panasonic E-Mobility:** National EV rental & fleet management backend (dual-app ecosystem, operator dashboard, 20% latency reduction).
  - **Precium:** Dynamic pricing engine & revenue optimization tool.
  - **FITPASS:** HealthTech infrastructure with real-time computer vision workout tracking and nutrition consultation modules.
  - **Architecture Drawer:** Tabbed modal for each project covering System Architecture, Challenges, Pipeline Steps, and Impact Metrics.
- **Searchable Technical Stack Matrix:**
  - Instant live search & category filtering across Languages, Go Frameworks, Distributed Systems, Databases, Cloud/DevOps, and AI-Augmented SDLC.
- **Direct Resume Integration & Contact Utility:**
  - Built-in downloadable PDF resume (`/Vandit_Jain_Resume.pdf`).
  - One-click copy-to-clipboard for email and phone.
  - Verified links to LinkedIn and GitHub.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **UI & Styling:** Tailwind CSS 4
- **Animation & Motion:** Framer Motion
- **Icons:** Lucide React & Custom SVG Brand Icons

---

## 💻 How to Start the Server Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher) and **npm** installed.
Verify your installation:
```bash
node -v
npm -v
```

### 2. Navigate to Project Directory
```bash
cd /home/vandit/Projects/portfolio
```

### 3. Install Dependencies (if not already installed)
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload automatically as you edit files.

---

## 🏗️ Production Build & Deployment

To generate an optimized production build:
```bash
npm run build
```

To run the production server locally:
```bash
npm run start
```

### Deploying to Vercel (Recommended)
You can deploy this repository to **Vercel** with zero configuration:
1. Push this project to GitHub.
2. Import the repository into your Vercel dashboard.
3. Next.js will automatically detect build settings and deploy to a free global CDN.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── Vandit_Jain_Resume.pdf    # Downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css           # Custom dark theme styles & scrollbar
│   │   ├── layout.tsx            # Root HTML layout, Google Geist font, SEO metadata
│   │   └── page.tsx              # Assembled homepage
│   ├── components/
│   │   ├── About.tsx             # Engineering philosophy, AI advantage & education
│   │   ├── ContactSection.tsx    # One-click email/phone copying, socials, and resume banner
│   │   ├── ExperienceSection.tsx # RemoteState career milestones & achievements
│   │   ├── Footer.tsx            # Navigation shortcuts & back-to-top trigger
│   │   ├── Hero.tsx              # Header elevator pitch, KPI cards & code window
│   │   ├── Icons.tsx             # Crisp SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx            # Sticky blur navigation bar & CLI trigger
│   │   ├── PipelineSimulator.tsx # Interactive telematics pipeline visualizer
│   │   ├── ProjectModal.tsx      # Deep-dive architecture & challenges drawer
│   │   ├── ProjectsSection.tsx   # Project cards grid with links
│   │   ├── SkillsSection.tsx     # Filterable & searchable skills matrix
│   │   └── TerminalModal.tsx     # Interactive developer CLI emulator
│   └── data/
│       └── portfolioData.ts      # Single source of truth for personal info, projects & skills
├── package.json
└── tsconfig.json
```

---

## ✏️ How to Update Your Content

All data is centralized in a clean, typed TypeScript file:
- **Edit Projects, Skills, Contact Info, or Links:**  
  Modify [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
- **Update Resume PDF:**  
  Replace [`public/Vandit_Jain_Resume.pdf`](./public/Vandit_Jain_Resume.pdf) with your updated PDF file.

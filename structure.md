# Ta3allam Frontend

Welcome to the **Ta3allam frontend project**!
This repository contains the user interface for **Ta3allam**, a Syrian educational platform. It is designed to help students access course material, view schedules, and interact with instructors through a modern, mobile-friendly web interface.

---

## Agile README Template

### 1. Project Overview

Ta3allam aims to digitize and streamline student learning experiences for Arabic-speaking users, particularly in Syria and surrounding regions.
This frontend application replicates the core UI/UX of Brightspace, with localization support and mobile-friendly viewing.

The primary goals:

* Easy student access to courses and materials
* Centralized dashboard for communication and schedules
* Full Arabic support across UI

### 2. Technology Stack

* **Framework**: Next.js (React)
* **Styling**: Tailwind CSS
* **Auth**: Auth0 (email-based only for MVP)
* **Routing**: Next.js App Router
* **State Management**: Zustand / React Context
* **Localization**: i18n with full Arabic RTL support

### 3. Application Structure

```
/app              → Next.js App Router pages & layouts
/components       → Reusable UI components
/lib              → Utilities, API handlers
/store            → Zustand or Context stores
/styles           → Global Tailwind styles
/locales          → Arabic & English translation files
/public           → Static assets
```

### 4. Frontend Architecture

* **Login flow**: Auth0 (Email only)

* **Dashboard**: Course cards, timetable, messages/notifications

* **Course View**: Sticky sub-navbar with tabs:

  * Course Home (Announcements)
  * Content (Lessons & PDFs)
  * Course Tools (Assignments, Groups, Discussions)
  * Classlist
  * Help

* **Mobile Support**: View-only access on phones/tablets. Uploads and assignments restricted to desktop, like Brightspace.

* **RTL support**: Arabic is the primary course language. All components must render correctly in RTL.

### 5. Development Workflow

* Agile sprints (2-week)
* Feature branches via Git (`feat/`, `fix/`, `refactor/`)

### 6. Feature List (MVP)

* [x] Auth0 Email Auth (university-based domain only)
* [x] Student dashboard
* [x] Static course data + manual enrollment
* [x] View-only course content (PDFs, posts)
* [x] Notifications to admin for course submissions
* [ ] Upload assignments (desktop only)
* [ ] Groups & discussions UI

#### 🧑‍🎓 Example User Stories

* *As a student*, I want to log in with my university email so that I can access my courses securely.
* *As a student*, I want to view my course materials and deadlines in Arabic so I can follow my studies easily.

### 7. Contribution Guidelines

* Use feature branches for new functionality
* Follow ESLint/Prettier rules
* Ensure RTL support when modifying UI
* Submit PRs with clear titles and descriptions

### 8. Deployment

* **Preview**: Auto-deployed on PRs via Vercel
* **Production**: Deployed to Vercel main branch
* **Hosting**: Vercel edge for low-latency in MENA region

---
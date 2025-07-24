# Ta3allam Frontend

Welcome to the Ta3allam frontend project! This repository contains the source code for the user interface of Ta3allam, an educational platform designed to facilitate interactive learning experiences.

---

## Agile README Template

### 1. Project Overview
Brief summary of Ta3allam, its goals, and target users.

### 2. Technology Stack
Outline of main frameworks, libraries, and tools used.

### 3. Application Structure
High-level description of folder organization and key components.

### 4. Architecture
Summary of architectural patterns, state management, and data flow.

```mermaid
classDiagram
    class User {
        +UUID id
        +string name
        +string email
        +string role  // Student | Teacher | Admin
    }

    class Course {
        +UUID id
        +string title
        +string description
    }

    class Enrollment {
        +UUID id
        +UUID userId
        +UUID courseId
        +string status  // Active | Completed
    }

    class Lecture {
        +UUID id
        +UUID courseId
        +string title
        +string videoUrl
    }

    class Quiz {
        +UUID id
        +UUID courseId
        +string title
    }

    class Question {
        +UUID id
        +UUID quizId
        +string text
        +string type  // MCQ | TrueFalse
    }

    User "1" --> "0..*" Enrollment
    Course "1" --> "0..*" Enrollment
    Course "1" --> "0..*" Lecture
    Course "1" --> "0..*" Quiz
    Quiz "1" --> "1..*" Question
```

```mermaid
graph TD
    subgraph "Frontend - Next.js PWA"
        A[Student Dashboard]
        B[Teacher Dashboard]
        C[Video Player]
        D[Quiz Interface]
    end

    subgraph "Backend - Node.js + Express"
        E[REST API]
        F[Course Service]
        G[User Service]
        H[Quiz Service]
        I["Auth Service: Firebase or Auth0"]
    end

    subgraph "Database Layer"
        J[(PostgreSQL DB)]
    end

    A --> E
    B --> E
    C --> E
    D --> E

    E --> F
    E --> G
    E --> H
    E --> I

    F --> J
    G --> J
    H --> J
```
### 5. Development Workflow
Short explanation of agile practices, branching strategy, and CI/CD.

### 6. Feature List
Overview of planned features and user stories.

### 7. Contribution Guidelines
Summary of how to contribute, code standards, and review process.

### 8. Deployment
Brief notes on deployment strategy and environments.

---

Fill in each section as the project evolves to keep documentation up-to-date and useful for all contributors.
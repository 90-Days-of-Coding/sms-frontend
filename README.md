# Student Management System

A comprehensive web-based platform designed to enhance the academic experience for university and college students by providing a centralized hub for managing various aspects of student life.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Contributing](#contributing)
  - [Commit Message Guidelines](#commit-message-guidelines)
  - [Code Quality Standards](#code-quality-standards)
  - [Pull Request Process](#pull-request-process)
- [Environment Variables](#environment-variables)
- [Directory Structure](#directory-structure)
- [License](#license)

## Features

- **Student Dashboard**: Centralized view of academic progress, upcoming deadlines, and announcements
- **Course Management**: View enrolled courses, materials, and schedules
- **Grade Tracking**: Monitor academic performance across courses
- **Attendance System**: Digital attendance tracking and reporting
- **Resource Sharing**: Platform for sharing study materials and resources
- **Real-time Notifications**: Instant updates on important academic events
- **Admin Portal**: For faculty and administrative staff to manage student data

## Tech Stack

### Frontend
- **Next.js** - React framework for server-rendered applications
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Accessible UI components
- **Zustand** - State management
- **React Query** - Server state management
- **Socket.io (Client)** - Real-time communication

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/90-Days-of-Coding/sms-frontend.git
   cd student-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables))

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

### Running Locally

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
npm start
```

## Contributing

We welcome contributions from the community! Please follow these guidelines to ensure a smooth collaboration process.

You're absolutely right! Let me enhance the **Contributing** section with clear branch management guidelines. Here's the improved version:

---

## Contributing

We welcome contributions from the community! Please follow these guidelines to ensure a smooth collaboration process.

### Branch Workflow

1. **Always create a new branch** for your work:
   ```bash
   git checkout -b feat/add-student-profile
   ```
   or for bug fixes:
   ```bash
   git checkout -b fix/attendance-date-calculation
   ```

2. **Naming conventions** for branches:
   - Feature branches: `feat/description` (e.g., `feat/student-dashboard`)
   - Bug fixes: `fix/description` (e.g., `fix/login-validation`)
   - Documentation: `docs/description` (e.g., `docs/contributing-guide`)
   - Chores: `chore/description` (e.g., `chore/dependency-update`)

3. **Push your branch** to the remote repository:
   ```bash
   git push origin your-branch-name
   ```

4. **Create a Pull Request (PR)** from your branch to `main`:
   - Go to GitHub repository > Pull Requests > New Pull Request
   - Select `main` as base branch and your branch as compare branch
   - Follow the PR template (if available)
   - Request reviews from relevant team members

5. **Never push directly to `main` branch** - all changes must go through PR review.

### PR Approval Process
1. Two approved reviews required before merging
2. All CI checks and test must pass
3. Resolve all code review comments before merging
4. Squash merge preferred (maintains clean commit history)

### Syncing Your Branch
If your branch falls behind `main`:
```bash
git checkout main
git pull origin main
git checkout your-branch-name
git merge main
# Resolve any conflicts, then push
git push origin your-branch-name
```

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit messages must follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Examples:**
```
feat: add student profile page
```
```
fix(attendance): correct date calculation in attendance report

Closes #123
```
```
docs: update contribution guidelines
```

**Common commit types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code changes that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools/libraries

### Code Quality Standards

1. **Type Safety**: Always use TypeScript types properly. Avoid `any` type.
2. **Component Design**: 
   - Keep components small and focused (Single Responsibility Principle)
   - Use descriptive prop names and provide proper TypeScript interfaces
3. **Styling**:
   - Use Tailwind CSS utility classes
   - Extract repeated styles into reusable components
4. **Performance**:
   - Memoize expensive computations with `useMemo`
   - Avoid unnecessary re-renders with `React.memo` and proper dependency arrays
5. **Testing**:
   - Write unit tests for complex logic
   - Add Storybook stories for UI components
6. **Accessibility**:
   - Follow WCAG guidelines
   - Use semantic HTML
   - Ensure proper keyboard navigation

### Pull Request Process

1. Fork the repository and create your branch from `main`
2. Ensure your code follows the project's standards
3. Update the documentation if needed
4. Make sure your code passes all tests
5. Open a pull request with a clear description of changes
6. Reference any related issues in your PR description
7. Request reviews from at least two team members

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
# Add other environment variables as needed
```

## Directory Structure

```
sms-frontend/
├── app/
│   ├── (main routes)
│   ├── api/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── (shadcn components will be here)
├── lib/
│   ├── constants.ts (to be set-up)
│   ├── hooks/ (to be set-up)
│   ├── providers.tsx (to be set-up)
│   └── utils.ts
├── stores/
│   └── (zustand stores will be here)
└── styles/
    └── globals.css
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Happy Coding!** 🚀

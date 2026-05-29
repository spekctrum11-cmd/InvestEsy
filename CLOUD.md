# Cloud & Deployment Guidelines

## Deployment Environment
- **Platform:** Vercel is recommended for deploying this Next.js application.
- **Environment Variables:** Ensure any API keys (if added later for Web3 or AI features) are securely stored in `.env.local` and mirrored in your deployment environment variables.

## System Enforcement
- As stated in `AGENT.md`, this project strictly uses **Vanilla CSS**. Ensure no automated deployment steps or CI/CD pipelines attempt to run Tailwind build processes.
- The project is configured as a standard Next.js App Router application. Standard `npm run build` commands are sufficient.

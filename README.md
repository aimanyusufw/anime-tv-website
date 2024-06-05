# Next.js Project Starter

Welcome to this Next.js project! This project was bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Installation

First, install the dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Configuration

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Open the `.env` file and configure your environment variables:

```env
NEXT_EXAMPLE_ENV=EXAMPLE
```

### Database Migration

Migrate your Prisma database to the latest state:

```bash
npx prisma migrate dev
# or
yarn prisma migrate dev
# or
pnpm prisma migrate dev
# or
bun prisma migrate dev
```

### Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Happy Coding! 🚀

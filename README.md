# RocketFlag React Demo

A simple React application built with [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/) demonstrating the integration of feature flagging using the [@rocketflag/node-sdk](https://www.npmjs.com/package/@rocketflag/node-sdk).

## Overview

This repository provides a minimal example of how to use RocketFlag for managing feature toggles in a React environment. It showcases initialising the client and fetching flag status to conditionally render UI components.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rocketflag/react-rocketflag.git
   cd react-rocketflag
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## How it Works

### 1. Client Initialization

The RocketFlag client is initialized in `src/rocketflagClient.ts`:

```typescript
import createRocketflagClient from "@rocketflag/node-sdk";

export const rocketflag = createRocketflagClient();
```

### 2. Fetching Flags

In `src/App.tsx`, the application fetches the state of a feature flag using the `getFlag` method:

```typescript
useEffect(() => {
  void (async () => {
    try {
      const flag = await rocketflag.getFlag("<YOUR_FLAG_ID>");
      setFeature(flag.enabled);
    } catch (e) {
      console.error(e);
    }
  })();
}, []);
```

## Technologies Used

- **React**: Frontend UI library.
- **Vite**: Next-generation frontend tooling.
- **TypeScript**: Static typing for JavaScript.
- **RocketFlag SDK**: Feature flagging and configuration management.

## License

This project is licensed under the [MIT License](LICENSE.md).

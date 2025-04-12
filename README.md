# UI Components Library

A modern, accessible, and customizable React UI components library built with TypeScript, Tailwind CSS, and Storybook.

## Features

- 🎨 Beautiful and consistent design system
- ⚡️ Built with React and TypeScript
- 🎯 Fully accessible components
- 🎭 Customizable with Tailwind CSS
- 📚 Documentation with Storybook
- 🧪 Comprehensive test coverage
- 📦 Tree-shakeable and optimized for production

## Installation

```bash
# Using npm
npm install ui-components-library

# Using yarn
yarn add ui-components-library

# Using pnpm
pnpm add ui-components-library
```

## Usage

```tsx
import { Button } from 'ui-components-library';
import 'ui-components-library/css'; // Import styles

function App() {
  return (
    <Button color="primary" size="medium">
      Click me
    </Button>
  );
}
```

## Available Components

### Button

A customizable button component with various styles and sizes.

```tsx
import { Button } from 'ui-components-library';

// Default button
<Button>Click me</Button>

// Different colors
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="info">Info</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>

// With custom class
<Button className="custom-class">Custom</Button>
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/ui-components-library.git
cd ui-components-library
```

2. Install dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

3. Start the development server
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### Available Scripts

- `dev` - Start Storybook development server
- `build` - Build Storybook
- `build:lib` - Build the library
- `test` - Run tests
- `test:watch` - Run tests in watch mode
- `lint` - Run ESLint
- `format` - Format code with Prettier

## Testing

The library uses Vitest and React Testing Library for testing. Run the tests with:

```bash
# Using npm
npm test

# Using yarn
yarn test

# Using pnpm
pnpm test
```
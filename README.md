# OpenATS Documentation & Website

Welcome to the OpenATS documentation website.

This documentation is built with Docusaurus and contains guides, setup instructions, contribution guidelines, and project documentation for OpenATS.

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Local Development

Start the development server:

```bash
pnpm start
```

The documentation site will be available at:

```text
http://localhost:3000
```

Changes are automatically reloaded during development.

## Build

Generate a production build:

```bash
pnpm build
```

The generated static files will be available in the `build` directory.

## Preview Production Build

```bash
pnpm serve
```

## Contributing

We welcome contributions from the community.

### 1. Fork the Repository

Fork the repository to your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/openats-docs.git
cd openats-docs
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Create a Branch

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

Examples:

```bash
git checkout -b feature/add-api-docs
git checkout -b fix/update-installation-guide
```

### 5. Make Your Changes

Update documentation, fix issues, or add new content.

### 6. Commit Your Changes

```bash
git add .
git commit -m "docs: update installation guide"
```

### 7. Push Your Branch

```bash
git push origin feature/your-feature-name
```

### 8. Open a Pull Request

Create a Pull Request from your branch to the project's main branch and provide a clear description of your changes.

## Code of Conduct

Please be respectful and constructive when interacting with the community. We are committed to providing a welcoming environment for all contributors.

## Deployment

This documentation site is automatically deployed through Vercel.

Production deployments are triggered from the main branch.

# OptiChads App Monorepo

This repository uses [Rush](https://rushjs.io/) for monorepo management.

## Getting Started

1. Install Rush globally (if not already installed):

```bash
npm install -g @microsoft/rush
```

2. Install all dependencies:

```bash
rush update
```

3. Build all projects:

```bash
rush build
```

4. Start the development server:

```bash
rush start
```

# Common Rush Commands

### Dependency Management

- `rush update` - Install/update dependencies for all projects
- `rush update --full` - Force clean and reinstall all dependencies
- `rush add -p <package>` - Add a package to the current project
- `rush add -p <package> --make-consistent` - Add a package and enforce version across all projects
- `rush check` - Check for inconsistent dependency versions

### Building and Running

- `rush build` - Build all projects
- `rush rebuild` - Clean and rebuild all projects
- `rush build -t <project>` - Build a specific project and its dependencies
- `rush build --to-except <project>` - Build all projects except the specified one
- `rush start` - Start the development server
- `rush start -t <project>` - Start the development server for a specific project
- `rush start --to-except <project>` - Start the development server for all projects except the specified one

### Development

- `rush change` - Generate change logs for publishing
- `rush purge` - Clean up all temporary files and node_modules
- `rushx test` - Run tests
- `rushx <script>` - Run a package.json script in the current project

## Project-Specific Commands

### OpticHads Website (`apps/optichads-website`)

```bash
cd apps/optichads-website
rushx dev        # Start development server
rushx build      # Build for production
rushx start      # Start production server
rushx lint       # Run ESLint
```

### Shared UI Library (`packages/shared-ui`)

```bash
cd packages/shared-ui
rushx build      # Build the library
rushx dev        # Build in watch mode
rushx clean      # Clean build outputs
```

## Common Development Workflows

### Starting Development

1. Get latest changes:

```bash
git pull
rush update
```

2. Start the website development server:

```bash
cd apps/optichads-website
rushx dev
```

### Adding a New Package/Dependency

1. Add to a specific project:

```bash
cd <project-directory>
rush add -p <package-name>
```

2. Add to all projects:

```bash
rush add -p <package-name> --make-consistent
```

### Making Changes Across Multiple Projects

1. Make your code changes
2. Build affected projects:

```bash
rush build
```

### Before Committing

1. Check for dependency issues:

```bash
rush check
```

2. If publishing changes:

```bash
rush change
```

## Project Structure

```
optichads-app/
├── apps/
│   └── optichads-website/     # Next.js website
├── packages/
│   └── shared-ui/            # Shared UI components
├── common/                   # Rush configuration files
└── rush.json                # Rush configuration
```

## Additional Resources

- [Rush Documentation](https://rushjs.io/pages/developer/commands/)
- [Rush GitHub Repository](https://github.com/microsoft/rush)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

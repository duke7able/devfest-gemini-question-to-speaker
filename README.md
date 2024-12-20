# DevFest

DevFest is a modern web application built using the Next.js framework. This application leverages React for the frontend and includes various tools and libraries for an enhanced development and user experience.

## Features

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Google Generative AI**: Integrates generative AI capabilities via Google APIs.
- **Radix UI**: A set of accessible UI components.
- **Skeleton Loading**: Provides loading placeholders using `react-loading-skeleton`.
- **Social Sharing**: Easy integration of social sharing features with `react-share`.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 14 or higher
- **npm**: Version 11 or higher

## Installation

1. Clone the repository:

   ```bash
   git clone gitlab.com/purimuneer/devfest-project.git
   cd devfest
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Scripts

- **Start Development Server:**

  ```bash
  npm run dev
  ```

  Starts the application in development mode.

- **Build for Production:**

  ```bash
  npm run build
  ```

  Builds the application for production.

- **Start Production Server:**

  ```bash
  npm run start
  ```

  Runs the application in production mode.

- **Linting:**

  ```bash
  npm run lint
  ```

  Lints the codebase using ESLint.

## Folder Structure

The project structure follows the standard Next.js convention:

- **/pages**: Contains the application’s routes.
- **/public**: Static assets such as images and icons.
- **/styles**: Global styles and Tailwind CSS configurations.
- **/components**: Reusable React components.
- **/utils**: Helper functions and utilities.

## Libraries and Tools

### Dependencies

- **@google/generative-ai**: Google’s generative AI SDK
- **@radix-ui/react-avatar**, **@radix-ui/react-label**, **@radix-ui/react-slot**: Radix UI components for accessible design.
- **class-variance-authority**, **clsx**: Utilities for conditional class names.
- **googleapis**: Google API client library.
- **lucide-react**: Icon library for React.
- **react-loading-skeleton**: Skeleton loading UI.
- **react-share**: Social media sharing library.
- **tailwind-merge**: Merge and optimize Tailwind CSS classes.
- **tailwindcss-animate**: Animation utilities for Tailwind CSS.

### Dev Dependencies

- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions.
- **eslint**, **eslint-config-next**: ESLint configuration for Next.js.
- **postcss**, **tailwindcss**: CSS processing tools.
- **typescript**: TypeScript support.

## Styling

The project uses Tailwind CSS for styling with support for animations and class merging.

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add a new feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Open a pull request.

## License

This project is licensed under [MIT License](LICENSE).

---

For any questions or suggestions, please contact [your-email@example.com].


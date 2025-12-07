# GreeBooks Frontend Project Structure

This document outlines the proposed project structure for the GreeBooks frontend application, which includes a landing page and an admin panel, built with React and Vite.

```
GreeBooks-FE/
├── public/
│   ├── favicon.ico
│   └── ... (static assets like images, fonts)
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/ (global styles, variables)
│   ├── components/ (reusable UI components)
│   │   ├── common/ (e.g., Button, Input, Modal)
│   │   ├── layout/ (e.g., Header, Footer, Sidebar)
│   │   └── ui/ (more generic UI elements)
│   ├── hooks/ (custom React hooks)
│   ├── lib/ (utility functions, helpers)
│   ├── pages/
│   │   ├── landing/
│   │   │   ├── LandingPage.tsx
│   │   │   ├── sections/ (e.g., HeroSection, FeaturesSection, ContactSection)
│   │   │   └── components/ (landing page specific components)
│   │   ├── admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── users/
│   │   │   │   ├── UserList.tsx
│   │   │   │   └── UserDetail.tsx
│   │   │   ├── products/
│   │   │   │   ├── ProductList.tsx
│   │   │   │   └── ProductForm.tsx
│   │   │   └── settings/
│   │   │       └── AdminSettings.tsx
│   │   │   └── components/ (admin panel specific components)
│   │   └── auth/
│   │       ├── LoginPage.tsx
│   │       └── RegisterPage.tsx
│   ├── routes/
│   │   ├── index.tsx (main routing configuration)
│   │   ├── PublicRoutes.tsx
│   │   ├── PrivateRoutes.tsx
│   │   └── AdminRoutes.tsx
│   ├── services/ (API calls, data fetching)
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   └── products.ts
│   ├── store/ (state management, e.g., Zustand, Redux, Context API)
│   │   ├── index.ts
│   │   ├── authStore.ts
│   │   └── userStore.ts
│   ├── types/ (TypeScript type definitions)
│   │   ├── index.d.ts
│   │   ├── auth.d.ts
│   │   └── user.d.ts
│   ├── App.tsx (main application component)
│   ├── main.tsx (entry point)
│   └── index.css (global styles)
├── .env (environment variables)
├── .eslintrc.js (ESLint configuration)
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js (Tailwind CSS configuration)
├── tsconfig.json (TypeScript configuration)
├── vite.config.ts (Vite configuration)
└── yarn.lock (or package-lock.json)
```

## Key Considerations:

- **Routing:** React Router DOM will be used for navigation, with separate route configurations for public (landing page), authenticated (admin panel), and potentially guest routes.
- **State Management:** A lightweight state management solution (e.g., Zustand or React Context API) will be preferred for simplicity and performance.
- **Styling:** Tailwind CSS will be used for utility-first styling, complemented by global styles in `src/index.css` and component-specific styles as needed.
- **API Integration:** `services/` will encapsulate API calls, promoting reusability and separation of concerns.
- **TypeScript:** The entire project will be written in TypeScript for better type safety and developer experience.
- **Component Reusability:** Common UI components will be placed in `src/components/common` and `src/components/layout` to maximize reusability across the landing page and admin panel.
- **Admin Panel Structure:** The admin panel will be organized by feature (e.g., `users`, `products`, `settings`) within `src/pages/admin` to keep related functionalities together.

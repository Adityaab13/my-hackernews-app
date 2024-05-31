
# HackerNews Application

This is a HackerNews application built with Next.js, MobX, and Material-UI. It fetches the latest news, blogs, and reports from the HackerNews API and displays them in a paginated list with search functionality.

## Features

- **State Management**: MobX State Tree is used for state management.
- **Styling**: Material-UI is used for consistent and modern styling.
- **Search**: Search functionality to filter the news list.
- **Pagination**: Pagination to navigate through the news items.
- **Expand/Collapse**: Click on a news item to view more details.
- **Error Boundaries**: Catches and handles errors gracefully.
- **Logging**: Logs errors and information using a custom logging utility.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **MobX State Tree**: State management library.
- **Material-UI**: Component library for styling.
- **TypeScript**: Superset of JavaScript for static typing.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 12 or later)
- npm (version 6 or later) or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adityaab13/my-hackernews-app.git
   cd hackernews-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building the Application

To build the application for production, use the following command:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `.next` folder.

### Starting the Production Build

After building the application, you can start it in production mode with:

```bash
npm start
# or
yarn start
```

### Testing the Application

To run the tests, use the following command:

```bash
npm test
# or
yarn test
```

## Project Structure

```
.
├── components
│   ├── ErrorBoundary.tsx
│   ├── NewsCard.tsx
│   ├── NewsList.tsx
│   ├── Pagination.tsx
│   └── Search.tsx
├── pages
│   ├── _app.tsx
│   ├── index.tsx
├── stores
│   ├── newsStore.ts
│   ├── useStore.ts
├── styles
│   ├── GlobalStyle.ts
│   └── theme.ts
├── utils
│   └── logger.ts
├── public
│   ├── favicon.ico
├── types
│   └── declarations.d.ts
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── package-lock.json
```

## Additional Information

### Usage of Libraries

#### Next.js
- **Pros**: Easy to use, built-in SSR, fast refresh, API routes, great developer experience.
- **Cons**: Might be overkill for simple applications, learning curve for beginners.

#### MobX State Tree
- **Pros**: Simple and easy to learn, great for medium-sized applications, supports TypeScript well.
- **Cons**: Less community support compared to Redux, might not be suitable for very large and complex state management.

#### Material-UI
- **Pros**: Rich set of components, consistent design, highly customizable, good documentation.
- **Cons**: Can be heavy if not used carefully, learning curve for customization.

### Additional Features and Scaling Considerations

- **User Authentication**: Implement OAuth to allow users to log in and personalize their experience.
- **Notifications**: Implement a notification system to alert users of new articles or comments.
- **Load Balancing**: Use load balancers to handle increased traffic.
- **Caching**: Implement caching strategies to reduce API calls and improve performance.
- **Microservices**: Consider breaking the application into microservices for better scalability.

### Logging and Error Management

- **Logging**: Use libraries like `winston` for server-side logging and `Sentry` for client-side error tracking.
- **Monitoring**: Implement monitoring tools like `New Relic` or `Datadog` to monitor application performance and errors.

### Post Mortem

Given another chance, I would:

- **Plan the Architecture**: Spend more time planning the overall architecture and component structure to avoid major refactoring later.
- **Implement CI/CD**: Set up continuous integration and deployment early in the project to automate testing and deployment.
- **Comprehensive Testing**: Implement comprehensive unit and integration tests from the start to ensure code quality and reliability.
- **Performance Optimization**: Focus on performance optimization techniques like lazy loading, code splitting, and server-side rendering.

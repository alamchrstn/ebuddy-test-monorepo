# Turborepo kitchen sink starter

This Turborepo starter is maintained by the Turborepo core team.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e kitchen-sink
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Part 4 Answer

### Ensuring recently active field

What I would personally consider to achieve this is by using Firebase's Cloud Function. To further describe my answer, I assume the following:

1. The system has something to do with rents (referring EBuddy portfolio, RentBabe)
2. An `activity` for a user only has something to do with CUD from the CRUD operations available in the platform
3. Within each user object/document, there would be sub-collections that contain any actionable "properties" of the user (e.g. `rooms`, `rentals` collections)
4. Finally, properties updates (rooms, rentals, etc.) can ONLY be actioned/modified by the corresponding user

With these assumptions, we can put a firestore function trigger like the following

```
onDocumentWritten("users/{userId}/rooms/{roomId}", (event) => {
  // 1. get the userId
  // 2. update the user's `recentlyActive` field with a now() timestamp
  // leaving off the implementation details here...
});
```

With this function, we can have the `recentlyActive` field to be always updated by listening to the users' activities on their respective "properties".

## Part 5 Answer

1.
2. Personally, I think it depends on what kind of project and how far planned it is. If the plan is already laid out quite extensively and all of the moving parts are clear, I would try to chunk the features by the business logics and build them one by one, mocking the others that are not built yet. In other hand, if the plan is still early and there are unknowns, I would try to break down the project to its MVP state, then iteratively improving it along with building the new features.
3. I always learn faster by actually doing it. Trial and error is my go-to approach. But now, with the addition of an AI sidekick, I can buddy up with it and speeds up the process.
4. Consistency.
5. Unfortunately no.
6. I would say either March/April 2025. I feel like this should be discussed again later on.

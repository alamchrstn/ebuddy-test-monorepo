# EBuddy coding test result

### Apps

- `backend`: an [Express](https://expressjs.com/) server
- `frontend`: a [Next.js](https://nextjs.org/) app

## Part 1: Backend Setup

### Assumptions

In the requirement doc, it's mentioned that the framework of choice is Express.js, assuming no Express.js derivative should be used (e.g. NestJS). Thus, sticking to plain Express.js setup.

### Notes

1. The backend uses Firebase admin SDK
2. Backend is not considered as a cloud function backend, rather it's a standalone server that can communicate to firebase

### env vars

Refer to the `.env.sample` file within `apps/backend`, then populate your env vars in `.env` file

### Setup

Refer to part 3 to setup everything at once with turborepo 👇

## Part 2: Frontend setup

### env vars

Refer to the `.env.sample` file within `apps/frontend`, then populate your env vars in `.env` file

### Setup

Refer to part 3 to setup everything at once with turborepo 👇

## Part 3: Monorepo

### Requirements

1. Node.js >= 18 (22 or above is recommended)
2. firebase CLI
3. Java JDK version 11 or higher (for firebase emulator requirement [here](https://firebase.google.com/docs/emulator-suite/install_and_configure#install_the_local_emulator_suite))

### Setup

**NOTE:** Create an empty folder in the root of the project called `.firebase-emulated-data` so that we can persist our mocked/emulated firebase data locally

```
// install
npm install

// run emulator in terminal
firebase emulators:start --import .firebase-emulated-data --export-on-exit

// run app in a separate terminal process
npm run dev

```

## Part 4: Answers

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

## Part 5: Answers

1.
2. Personally, I think it depends on what kind of project and how far planned it is. If the plan is already laid out quite extensively and all of the moving parts are clear, I would try to chunk the features by the business logics and build them one by one, mocking the others that are not built yet. In other hand, if the plan is still early and there are unknowns, I would try to break down the project to its MVP state, then iteratively improving it along with building the new features.
3. I always learn faster by actually doing it. Trial and error is my go-to approach. But now, with the addition of an AI sidekick, I can buddy up with it and speeds up the process.
4. Consistency.
5. Unfortunately no.
6. I would say either March/April 2025. I feel like this should be discussed again later on.

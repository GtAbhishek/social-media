# Social Media App

A React TypeScript social media application with Firebase authentication and real-time posting features.

## Features

- Google Authentication via Firebase Auth
- Create and view posts
- Like/unlike posts functionality
- Real-time data with Firestore
- Responsive design

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn
- A Firebase project with Authentication and Firestore enabled

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase configuration:
   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your actual Firebase configuration values
   - You can find these values in your Firebase project settings

4. Enable Google Authentication in your Firebase Console:
   - Go to Authentication > Sign-in method
   - Enable Google sign-in provider

5. Set up Firestore:
   - Go to Firestore Database
   - Create a database in test mode or production mode
   - The app will automatically create the required collections (`posts` and `likes`)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

```
src/
├── components/         # Reusable components
│   └── navbar.tsx     # Navigation component
├── config/            # Configuration files
│   └── firebase.ts    # Firebase configuration
├── pages/             # Page components
│   ├── create-post/   # Post creation functionality
│   ├── login.tsx      # Login page
│   └── main/          # Home page with posts
└── App.tsx            # Main app component
```

## Technologies Used

- React 18
- TypeScript
- Firebase (Auth, Firestore)
- React Router
- React Hook Form with Yup validation
- CSS for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run build` to ensure everything compiles
5. Submit a pull request

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# React Application Features

## 1. Login with JWT Authentication
The login system uses JSON Web Tokens (JWT) for user authentication. Upon login, the server returns a token that is stored in the browser's local storage. This token is used to authenticate the user for subsequent requests.

## 2. New User Registration
The application allows new users to register by providing the necessary information. The data is sent to the server, which validates it and creates a new user if the data is correct.

## 3. Forms Controlled with Zod Validations
The forms in the application are controlled and use Zod to validate input data. Zod is a schema validation and parsing library that provides a declarative way to define the structure and constraints of data.

## 4. State Management with Redux Toolkit
The application uses Redux Toolkit to manage global state. Redux Toolkit simplifies the setup of Redux, providing tools to create slices and manage state efficiently.

## 5. Route Protection
The application's routes are protected to ensure that only authenticated users can access certain pages. We use a combination of private routes and redirection based on the user's authentication status.



# Preview images
![2024-06-16 17 07 14 localhost 42458728e576](https://github.com/laura-lamprea/pokeclient/assets/84552402/3c3e21a2-f5a9-4bfb-bbf5-11c503940f04)
![2024-06-16 17 08 41 localhost fc9eaf682517](https://github.com/laura-lamprea/pokeclient/assets/84552402/a3773d2e-ccc1-4cf0-8a51-4237667eea5d)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



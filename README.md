# React Native Mobx Template

This is a basic project structure for getting started with React Native, using MobX for state management. It is opinionated but easily configurable- providing a layout for you to build on and modify as needed.
Note: This template is currently iOS only.

## Getting Started

- Follow the [official React Native setup](https://facebook.github.io/react-native/docs/getting-started.html), up to `Testing your React Native Installation`
- Clone repo: `https://github.com/musefind/react-native-mobx-template.git`
- From the `ReactNativeMobxTemplate` directory run `npm install`, then `react-native run-ios`
- Open the project in your IDE and dive in!

## Features

- NavigatorIOS for basic routing
- MobX for state management in Stores
- FetchResource wrapper around the Fetch API for ease of use
- Cookie management with react-native-cookies
- Connectivity detection with NetInfo API
- Basic login setup

## Key Files

To get up to speed on the structure as fast as possible, take a tour of the following files:

- In root: index.ios.js for app setup
- In App/Views: LoginView and App/Views/DashboardView for the two views
- In App/Stores: DataStore and UserStore as an example of how to manage data in your state
- In App/Resources: FetchResource to see how to handle HTTP requests

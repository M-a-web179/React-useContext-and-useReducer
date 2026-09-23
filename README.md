# React State Management: Theme Switcher & Task Manager

A React + TypeScript app that demonstrates global state with the Context API
(`useContext`) and complex local state with `useReducer`.

## Features

 **Theme Switcher:** toggle between light and dark themes from the navbar.
 **Task Manager:** add and remove tasks; empty tasks are rejected and
  Enter adds a task.

## Technologies

React, TypeScript, Vite, useContext, useReducer, CSS Modules

## Installation

    git clone https://github.com/M-a-web179/React-useContext-and-useReducer.git
    cd React-useContext-and-useReducer/react-state-management
    npm install

## Run the development server

    npm run dev

## Build the project

    npm run build

## How useContext is used

`ThemeProvider` stores the current theme with `useState` and shares `theme`
and `toggleTheme` through `ThemeContext`. Components read them with the custom
`useTheme` hook, which throws an error if used outside the provider.

## How useReducer is used

`TaskManager` uses `useReducer(taskReducer, [])`. The typed reducer handles
`add` and `remove` actions, and the component sends them with `dispatch`.

## Repository

GitHub: https://github.com/M-a-web179/React-useContext-and-useReducer

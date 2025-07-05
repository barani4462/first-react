# React App

## What is NPM?

- NPM (Node Package Manager) is a package manager for the JavaScript programming language.
- It is used to manage dependencies in the JavaScript Projects.

## Managing Dependencies

- To install a package, use the command `npm install <package-name>`.

- To install a package for development purposes only, use the command `npm install -D <package-name>`.

- To uninstall a package, use the command `npm uninstall <package-name>`.

- To install all dependencies listed in the `package.json` file, use the command `npm install` or `npm i`.

## Framework vs Library

- Library: A collection of pre-written code with classes, functions and methods that can be used to perform specific tasks.

- Framework: A collection of libraries and tools that provide a structure for building applications by defining a set of rules and conventions.

## What is React?

- React is a Framework for building user interfaces.
- It is a JavaScript library for building user interfaces.
- It allows developers to create reusable UI components.

## Why React?

- React is fast and efficient.
- It allows developers to build complex UIs with ease.
- It has a large community and ecosystem.
- It is maintained by Facebook and has a strong backing.
- It uses a virtual DOM to optimize rendering performance.

## Virtual DOM

- The Virtual DOM is a lightweight copy of the actual DOM.
- It allows React to update the UI efficiently by only re-rendering the components that have changed.

React Repo for FSD-C-WE-T-B23

## setup to initialize the project as a Git Repo

1.**Initialize Git**: open your terminal and navoigate to the project directory. Run:

'''base
git init
''''

2. Visit [GitHup](http://githup.com) and create a new repository. Do not initialize it with a README, .gitignore, or license.

3.**Add Remote Orgin**: After creating the repository ,copy the remote URL and run:

'''base
git remote add orgin <your-repo-url>

4.**Rename the default branch**: If your Git version is 2.28 or later, you can set the default branch name to 'main' by running.

'''base
git branch -M main

5.**ADD Files**: Add all files to the staging area:

'''base
git add .
''''

6.**Commit Changes**: Commit the changes  with a message:

'''''base
git commit -m "Initial commit"

7.**Push to GitHub**: Finally, puse your changes to the remote repository:
'''''base
git puse -u origin main
'''

#### Component

-Component are the building blocks of REact applications.
- They are reusable pieces of code that can be composed to create complex UIs.

#### JSX

-JavScript XML (JSX) is a syntax extension for JavaScript that allows you to write HTML-LIKe code within JavaScirpt.
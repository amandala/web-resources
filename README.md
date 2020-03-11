# Web Resources

## A collection of tips, tricks, and commonly used components.

This project has three parts:

1. A React app that demos patterns and presents tips and tricks for building React SPAs.
2. A Storybook app that demos commonly implemented components published to [Github Pages](https://amandala.github.io/web-resources/?path=/story/button--with-text)
3. A resources directory full of .md files which contain my notes on various web topics. This is a less polished version of the React App tips and tricks.

The app is built using [Next.js](https://nextjs.org/docs), a React framework for building server rendered SPAs.

## Scripts

- `yarn dev` Starts a Next.js development server on `localhost:3000`
- `yarn build` Generates a production build of the app, outputted to the .next directory
- `yarn start` Starts a Next.js production server
- `yarn storybook` Starts the storybook server on `localhost:6006`
- `yarn storybook-build` Generates a production build of the storybook
- `yarn storybook-deploy` Deploys the storybook to Github Pages using [storybook-deployer](./resources/React/storybook-deployer.md)

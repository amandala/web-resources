# storybook-deployer

Storybook has a handy tool that allows you to publish a static version of your storybook to Github Pages.

It's super simple to set up! All you have to do is:

1. install the package and add a script to your package.json `"storybook-deploy": "storybook-to-ghpages"`
2. run `yarn storybook-deploy` and the package takes care of the rest.

It automatically sets up the deployment on a branch called `gh-pages` which is updated by the GH Pages Bot whenever you run the deploy command.

You can navigate to the Settings tab of your repo and look for the GitHub Pages section to find the url where your static storybook is hosted.

[Check out mine here](https://amandala.github.io/web-resources/)

[storybook-deployer docs](https://github.com/storybookjs/storybook-deployer)

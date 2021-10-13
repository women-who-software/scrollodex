# How To 101:  The Non-Scary Guide

Are you new to Github, open source, Hacktoberfest, Women Who Code, and/or coding?  Never fear!  We'll walk you through every step of the way.

## Step 1: Sign up for Hacktoberfest

Hacktoberfest is a month-long online event put on by Digital Ocean. If you complete 4 pull requests for any open source project, you get a T-shirt or a tree planted in your name!

Sign up here for your contributions to count: [https://hacktoberfest.digitalocean.com/](https://hacktoberfest.digitalocean.com/).

## Step 2: Fork & Clone

To contribute, you will need a copy of the code on your own computer, so you can mess around with it and not worry about breaking anything for anyone else who is working with it.

In Github, click the grey "Fork" button on the right-hand side of the screen.

You now have your own copy of the code in your own github account.

To get it on your computer,
- click the "Code" button,
- copy the link to the repository: `https://github.com/wwcodecolorado/scrollodex`
- pull up your terminal
- `cd` into the folder where you want this code to live
- type `git clone https://github.com/wwcodecolorado/scrollodex`
- waaaaaait...
- you should now have a `scrollodex` folder on your computer

Wonder what this whole `git` business is? Read up on it [here](https://www.freecodecamp.org/news/an-introduction-to-git-for-absolute-beginners-86fa1d32ff71/).

## Step 3:  Install & setup stuff

Ensure you have these installed on your system:

- Node. You can check by typing `node -v` into your terminal. If you have it, it will give you the version that you have. If you don't have node installed, you can [get it here](https://nodejs.org/en/download/). (this will install `npm` 6.14.15 as well)
- Yarn. Check if you have yarn installed by typing `yarn -v`. If it's not found, install it with `npm install --global yarn`. More info on that [here](https://yarnpkg.com/getting-started/install).

Now you are ready to run the project:

- type `yarn install` into your terminal (this will install all the dependencies listed within package.json in the local node_modules folder.)
- after the install finishes, type `yarn start` (this will execute start command listed in package.json/scripts/start)
- your browser will automatically open to `localhost:3000` and show the current version of the Scrollodex project

Wonder what the difference is between npm and yarn? Us too! Turns out, they do the same thing, but yarn is more user-friendly. [This article](https://www.geeksforgeeks.org/difference-between-npm-and-yarn/) goes more in-depth)

## Step 4: Branch Off

- create a branch for your changes
- in your terminal, type `git checkout -b "issue[insert issue number here]/[whatever-your-change-is]`
- ex:  `git checkout -b "issue4/create-your-card"`

## Step 5: Make your change

- open `scrollodex` in a code editor of your choice
- some popular code editors:
--[Atom](https://atom.io)
--[VSCode](https://code.visualstudio.com/download)
- In the `src` folder, you'll see `cards`.  You can create your own card folder here.  Check out `exampleCard` for reference!

## Step 6: Add and Commit
- you need to let `git` know what your changes were
- in your terminal, type `git add .`
- then, `git commit -m "[tell git what the change was]"`
- ex:  `git commit -m "add card"`
- writing commit messages is an art!  For a deeper dive, [read this article about commit messages](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/).

## Step 7: Submit a Pull Request
- Pull Requests (PRs) let someone review your code before they "merge" it into the main branch
- first, you `git push`
- then, create a PR from your repository to the main one
- you can do this by going to your github
- you'll see the branch you just pushed in yellow, with a green "compare and pull request" button
-- Base: `wwcodecolorado/scrollodex`  
-- Head (this is your branch): `[your-username]/scrollodex`
- click that button!

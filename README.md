# mkedotnet.com
The website for mkedotnet.com

## How the puzzle pieces fit together
This repo is the source for the www.mkedotnet.com website. 

The site is built with HarpJs. Content is stored as json, markdown, and jade files...and then HarpJs is used to compile the source files into static html files.

Once you compile the source to .html files, and commit to master, the site will be automatically deployed.

The site is currently hosted on Github Pages. Github Pages watches the repository for changes in the docs folder. When it sees them, it automatically deploys that folder to the www.mkedotnet.com website, within minutes.

## Setting up your local development environment
### NodeJs
You will need version 4.5.0 (or possibly earlier) of nodeJs installed locally.
At some point in the v6 range, nodeJs made a change that broke the node-sass package upon which HarpJs depends. 
The node-sass package has since been fixed, but HarpJs is still relying on an older (broken) version.
If you have version 6.x of nodeJs installed, you are not out of luck - you can use [nvm](https://github.com/creationix/nvm) (on a Mac/Linux), or [nvm-windows](https://github.com/coreybutler/nvm-windows) (on Windows), to run multiple versions of node on your machine.
If you do end up installing a nodeJs version manager, switch to nodeJs version 4.5.0.

You will then need to install HarpJs globally. 

`npm install -g harp`

After that, clone the repo, and open a command line where the repo is cloned.

## Restoring packages 
The scss of the app is driven off of skeleton-scss, which is installed via npm. You will need to restore npm packages in order to build/run the app.

`npm install` 

## Running a local instance
To run the site locally, run `harp server _src --port 9876` (or whichever port you prefer).

If you prefer, and you are happy with that port number, `npm start` will run the previous command.  

## Compiling & deploying
Once things look good locally, you can deploy with two steps.

1. Compile the site with either `harp compile _src docs` or `npm run build`. This will generate static html files in the docs folder.
2. Commit and push your changes to Github. Your changes will be deployed in minutes.

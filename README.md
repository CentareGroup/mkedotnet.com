# mkedotnet.com
The website for mkedotnet.com

## How the puzzle pieces fit together
This repo is the source for the www.mkedotnet.com website. 

The site is built with HarpJs. Content is stored as json, markdown, and jade files...and then HarpJs is used to compile the source files into static html files.

Once you compile the source to .html files, and commit to master, the site will be automatically deployed.

The site is currently hosted on Github Pages. Github Pages watches the repository for changes in the docs folder. When it sees them, it automatically deploys that folder to the www.mkedotnet.com website, within minutes.

## Setting up your local development environment
You will need nodeJs installed locally.

You will then need to install HarpJs locally. 

`npm install -g harp`

After that, clone the repo, and open a command line where the repo is cloned.

## Restoring packages 
The scss of the app is driven off of skeleton-scss, which is installed via npm. You will need to restore npm packages in order to build/run the app.

`npm install` 

## Running a local instance
To run the site locally, run `harp server _src --port 9876` (or whichever port you prefer)

## Compiling & deploying
Once things look good locally, you can deploy with two steps.

1. Compile the site with `harp compile _src docs`. This will generate static html files in the docs folder.
2. Commit and push your changes to Github. Your changes will be deployed in minutes.

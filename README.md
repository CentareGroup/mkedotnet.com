# mkedotnet.com
The website for mkedotnet.com

## How the puzzle pieces fit together
The site is built with HarpJs. Content is stored as json, markdown, and jade files...and then HarpJs is used to compile the source files into static html files.

Once you compile the source to .html files, and commit to master, the site will be automatically deployed.

The site is currently hosted on Netlify, at mkedotnet.netlify.com. Netlify watches the github repo for changes, and deploys within minutes.

## Setting up your local development environment
You will need nodeJs installed locally.

You will then need to install HarpJs locally. 

`npm install -g harp`

After that, clone the repo, and open a command line where the repo is cloned.

## Running a local instance
To run the site locally, run `harp server _src --port 9876` (or whichever port you prefer)

## Compiling & deploying
Once things look good locally, you can deploy with two steps.

1. Compile the site with `harp compile _src www`. This will generate static html files in the www folder.
2. Commit and push your changes to Github. Your changes will be deployed in minutes.

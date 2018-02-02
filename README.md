# mkedotnet.com
The website for mkedotnet.com

## How the puzzle pieces fit together
This repo is the source for the www.mkedotnet.com website.

The site is built with HarpJs. Content is stored as json, markdown, and jade files...and then HarpJs is used to compile the source files into static html files.

Once you compile the source to .html files, and commit to master, the site will be automatically deployed.

The site is currently hosted on Github Pages. Github Pages watches the repository for changes in the docs folder. When it sees them, it automatically deploys that folder to the www.mkedotnet.com website, within minutes.

## Setting up your local development environment
### NodeJs

Somewhere around the v6 range, nodeJs made a change that broke the node-sass package upon which HarpJs depends. It was fixed after version 6, but I'm not exactly sure when. 

NodeJs versions <= 4.5.0 or >= 8.9.3 are definitely safe to run HarpJs. Versions in between may or may not be safe. Version 6 was definitely not working at one point, but I don't know which specific version.

If you are running a version between 4.5.0 and 8.9.3, you are not out of luck - you can use [nvm](https://github.com/creationix/nvm) (on a Mac/Linux), or [nvm-windows](https://github.com/coreybutler/nvm-windows) (on Windows), to run multiple versions of node on your machine. Once you've installed a version manager, switch to nodeJs v8.9.3 to run the app locally.

### HarpJs
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

## Archiving previous years
When we are getting ready for a new year, it is useful to keep the old site around. Speakers like to look at previous year's sessions to get an idea of which types of talks are accepted. There is not yet an automated way to do this.

There is probably also a better way to manage the current year so that it is easier to archive. Possibly putting all content into a /year folder to begin with? Until then, here are the steps to manually archive a previous year.

1. Copy almost all files and folders from the _src folder into a _src/{previous year} folder. Exclude the following files:
    * _harp.json
    * CNAME
    * 404.jade
    * previous archived year folders
2. Find all links to the root of the site, and replace them. Examples:
    * `href="/sessions..."` -> `href="/year/sessions..."`
    * `a(href='/sessions...'` -> `a(href='/year/sessions...'`
    * `src="/js..."` -> `src="/year/js..."`
    * `img(src='/speakers...'` -> `img(src='/year/speakers...'`
    * `url('/images/...'` -> `url('/year/images/...'`
    * `include /speakers...` -> `include /year/speakers...`
3. Fix all harp references to public.XXXX. Since all the content is now moved into the /year folder, references to it via the public object need to be changed. Since the folder is a number, you can't simply do something like `public.2016.sessions` - because this is JavaScript and 2016 is a number. Access the year via the indexer, i.e. `public['2016'].sessions`. Examples:
    * `public.speakers[session.speaker]` -> `public['year'].speakers[session.speaker]`
    * `for speaker, slug in public.speakers` -> `for speaker, slug in public['year'].speakers`
4. Make sure you can navigate throughout the archived site. Run the site with `harp server _src` and poke around. If you missed any references in 2 and 3, you'll see them.
5. Generate the site via `harp compile _src XXXX`. It doesn't really matter where you generate it to, because you're going to be throwing it away eventually anyway. This will give you a fully generated XXXX/year folder.
6. You are going to want to copy this generated XXXX/year folder into your _src folder, but you'll also want to undo all of your changes from steps 1-3 above. I chose to copy the XXXX/year folder to a temp folder, then undo all my changes via git, then copy the temp folder to a _src/year folder. You do it how you want to - I believe in you.
7. At this point, your pending changes should just be a folder named _src/year, containing a generated version of that year's site. Generate the site if you're ready to push it live via `harp compile _src docs`. Commit your changes (either just in _src, or in _src and docs).
8. (partyparrot)

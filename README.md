# Translate

## Getting Started

* `git clone` repo
* Jump into the `staging` branch. `git checkout staging`
* Get latest code from staging. `git pull`
* Make your own feature branch `git checkout -b <your branch name>` from `staging`
* Fetch latest code again before pushing your branch.
  1. Commit or stash your changes
  2. `git checkout staging`
  3. `git pull`
  4. `git checkout <your branch name>`
  5. `git merge staging`
  6. Fix any conflicts
  7. Push your new branch
* Make a pull request from your new branch against the `staging` branch

### Installing

To Start the project `npm install` on the root directory, then cd into the 'server' and do another `npm install` for the api-server dependencies.

### Running The Project

To start the project do `npm run both-server`, this will run both servers concurrently.
This might take some time.
# EvryAngular2Common

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.
Read more about CLI commands here: https://github.com/angular/angular-cli/wiki.

## Initial setup

git clone ssh://git@fsstash.evry.com:7999/enterprise_evry-angular-2-common/common.git

In ‘common’ directory:

`npm install`

`npm install -g @angular/cli`

`cd evry-common`

`npm install`

`cd ..`

## Running application

`ng serve` - run the app on a dev server. The app will automatically reload if you change any of the source files.  Will initiate ‘ng build’ for the first time.
`npm start` - run "npm run watch" and "npm run dev" commands in parallel (two different consoles are opened).
`npm run dev` - run "grunt merge-json" command to build localization files in "common/src/assets/i18n" directory and run the app on a dev server, open browser on http://localhost:8082/, extract styles for `ng serve`.
`npm run watch` - run "grunt watch" task to watch the changes in localization files in directories "common/src/app/", "common/evry-common/src/" (and inside all their subdirectories). When some updates provoded in these files, files in "common/src/assets/i18n" are automatically updated.

Navigate to http://localhost:8082/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Buildio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## How to use

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/building/1` or use any number instead of 1.
There is the building detail view tha allows editing of nicknames for that given building.

## Remarks

For dedicated text field for nicknames the material ui chip stacks were used.

For enabling save button a local mechanism was used. This tracks the number of invalid nicknames
because we don't want to hit api calls many times.

Alternatively api could receive all arrays as query parameter and return true if we can save the nicknames,
but that needs backend change that is not provided at the moment.

A third solution is to not allow invalid names to be added to the stack but requirements are that invalid nicknames should be visible.

For this repo git flow is the below:
Master is the production branch
Dev is the Test branch
All feature, bug, refactor  branches are branched from dev
For production realise dev is merged to master that triggers CI/CD

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

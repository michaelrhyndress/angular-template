# Common 3 Tier - Web UI


## Setting up the Local Environment and Workspace
These steps are taken from [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local). Login functionality will not work unless the /environments/environment.ts file is updated with real GUIDs for Azure AD authentication


### Node.js (version 10.9.0 or later)
1. Go to [Nodejs.org](https://nodejs.org/en/) and download the 10.16.0 LTS installer.
2. Run the installer with all features selected and check the box to automatically install the necessary tools.
3. To check your version, run `node -v` in a terminal/console window. Should be v10.16.0
4. **IMPORTANT** There were a few blockers identified when using Nodejs v12.4, so do not use it yet

### npm package manager
1. This is installed by the Node.js installer, but to check your version, run `npm -v` in a terminal/console window. SHould be 6.9.0


### Angular CLI
1. To install the Angular CLI globally, run `npm install -g @angular/cli`



## Development server
1. Change directory to the folder which contains the packages.json file for the Angular app
	* cd "C:\Users\keith.f.ellis\source\repos\dow-vsts\Cloud Services\APM0004101-MSE-Common3T\src\ui-web\Com3T.Web"
2. Run `npm install`
3. Run `ng serve` for a dev server. 
4. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

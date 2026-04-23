# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## What This App Does

This Angular app is a small Pokedex interface. It lets you browse Pokemon cards, search the list, open a detailed datasheet for a selected Pokemon, and manage favorites or wishlist groups from the UI.

## Run Locally With Docker

The Angular source code lives in the `my-app/` folder, but the Docker setup is defined at the repository root. From the root of the project, run:

```bash
docker compose up --build
```

Then open `http://localhost:4200` in your browser.

The container mounts `./my-app` into `/app`, installs dependencies, and starts the Angular dev server with live reload enabled. To stop the stack, press `Ctrl+C` or run:

```bash
docker compose down
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

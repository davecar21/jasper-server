# JasperReport

Jasper Report

## Folder Structure

src/                         project source code <br>
|- app/                      app components <br>
|  |- core/                  core module (singleton services, single-use components etc..) <br>
|  |  |- components/         app core components <br>
|  |  |- services/           app core services <br>
|  |  |+- ...                additional app core files <br>
|  |- shared/                shared module  (common components, modules, interfaces, directives, pipes etc..) <br>
|  |  |- modules/            app shared modules <br>
|  |  |- components/         app shared components <br>
|  |  |- interfaces/         app shared interfaces <br>
|  |  |- directives/         app shared directives <br>
|  |  |- pipes/              app shared pipes <br>
|  |  |+- ...                additional app shared files <br>
|  |- app.component.*        app root component (shell) <br>
|  |- app.module.ts          app root module definition <br>
|  |- app-routing.module.ts  app routes <br>
|  +- ...                    additional modules and components <br>
|- assets/                   app assets (images, fonts, sounds...) <br>
|  |- images/                images files <br>
|  |- fonts/                 fonts files <br>
|- environments/             environment variables <br>
|- theme/                    app global scss variables and theme <br>
|- index.html                html entry point <br>
|- main.scss                 global style entry point <br>
|- main.ts                   app entry point <br>

## References
https://github.com/ngx-rocket/starter-kit

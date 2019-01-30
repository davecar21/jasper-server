# JasperReport

Jasper Report

## Folder Structure
```
src/                         project source code 
|- app/                      app components 
|  |- core/                  core module (singleton services, single-use components etc..) 
|  |  |- components/         app core components 
|  |  |- services/           app core services 
|  |  |+- ...                additional app core files 
|  |- shared/                shared module  (common components, modules, interfaces, directives, pipes etc..) 
|  |  |- modules/            app shared modules 
|  |  |- components/         app shared components 
|  |  |- interfaces/         app shared interfaces 
|  |  |- directives/         app shared directives 
|  |  |- pipes/              app shared pipes 
|  |  |+- ...                additional app shared files 
|  |- app.component.*        app root component (shell) 
|  |- app.module.ts          app root module definition 
|  |- app-routing.module.ts  app routes 
|  +- ...                    additional modules and components 
|- assets/                   app assets (images, fonts, sounds...) 
|  |- images/                images files 
|  |- fonts/                 fonts files 
|- environments/             environment variables 
|- theme/                    app global scss variables and theme 
|- index.html                html entry point 
|- main.scss                 global style entry point
|- main.ts                   app entry point 
```

## Ng Generate

to remove spec add `--spec=false`

## Error Issues

### Failed To Install Node-Sass
Fix: connect to VPN then run `npm i`

## NPM Packages

https://www.npmjs.com/package/bootstrap-css-only

## References
https://github.com/ngx-rocket/starter-kit

testmikay

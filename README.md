# Learning about Angular
Project to learn about Angular


## Installation

Mac Install

    brew install node
    npm install -g @angular/cli


## New App

Create app and run server

    ng new hello

    cd hello

    ng serve

Browse to http://localhost:4200/



## Using CLI

    ng help

    ng generate --help

    ng version



## Setup Git Repo

At Github create [AngularWorkshop](https://github.com/Mark-Seaman/AngularWorkshop)

Git clone https://github.com/Mark-Seaman/AngularWorkshop

Clean up hello/.git

Fix security problem with hello/package-lock.json

    echo 'package-lock.json' >> hello/.gitignore

Commit files

    git add .

    git commit -m 'Add hello project'

    git pull

    git push



## Build Components from Source

Create project for component

    ng new component

    ng serve

Copy .gitignore to fix security problem

    commit 'Add component project'

Edit server/server.component.html

    <h3>Server Component</h3>
    <p>This is a component</p>
    
Edit server/server.component.html

    import { Component } from '@angular/core';

    @Component({
      selector: 'app-server',
      templateUrl: './server.component.html'
    })

    export class ServerComponent {
    }

Edit app/app.component.ts

    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
    }
    
Edit app/app.component.ts
    
    <h1>App/Component</h1>
    <app-server></app-server>

Edit app/app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { ServerComponent } from './server/server.component';

    @NgModule({
      declarations: [
        AppComponent,
        ServerComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


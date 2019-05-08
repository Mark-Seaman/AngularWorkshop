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

## Page Project

Goal: Build a page that composed of several block components

Component Nesting

* app
    * header
    * main
    * footer
    
Each component may have

    xxx.component.ts
    xxx.component.html
    xxx.component.css
    
header.component.ts

    import { Component } from '@angular/core';

    @Component({
      selector: 'app-header',
      templateUrl: './header.component.html',
      styleUrls: ['./header.component.css']
    })
    
    export class HeaderComponent {
    }

Using Embedded Template and Style -- header.component.ts

import { Component } from '@angular/core';

    @Component({
      selector: 'app-header',
      template: `
        <header>
            <h1>Embedded Template</h1>
        </header>
        `,
      styles: [`
        header {
            background-color: blue;
        }
        h1 {
            color: yellow;
        }
      `]
    })
    
    export class HeaderComponent {
    }



## Data Binding

Create project

    ng new databind
    
    cd databind
    
Fix security hole

    echo 'package-lock.json' >> databind/.gitignore
    
Create test component

    ng generate component test
    
    ng g c test
    
Types of data binding

* String Interpolation
* Property Binding
* Event binding
* Two-way data binding

String Interpolation [TS]-->[HTML]

Property Binding [TS]-->[HTML]

Event binding [TS]<--[HTML]

Two-way data binding [TS]<-->[HTML]



## Directives

    <div *ngIf="isActive">Thing is Active</div>
    
    <div [ngStyle]="{color: getColor()}">Thing is Active</div>
    
    <div [ngClass]="{active: isActive === 'online'}">Thing is Active</div>
    
    <div *ngFor="let i of items">{{ i }}</div>
    


## Sample App

Build project

    ng new workflow
    
    ng install --save bootstrap
    
Edit angular-cli.json to add bootstrap

    apps styles bootstrap
    
Use emmet for quick typing

    ng g c status --spec false
    


## View Components

### Page Views
* page
* header
* footer
* menu
* main

### Data Views
* list
* detail
* add
* edit
* delete

### Container Views
* card
* box
* tab
* accordion
* carousel

### Content Views
* markdown
* csv
* links


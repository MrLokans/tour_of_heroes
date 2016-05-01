import {Component} from 'angular2/core';


@Component({

    selector:'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{ hero.id }}</div>
    <div>
        <label>name: </label>{{ hero.name }}
        <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    `
    // Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.
})

export class AppComponent { 
    title='Tour of heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}

export class Hero {
    id: number;
    name: string;
}
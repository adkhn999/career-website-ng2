import { Component } from 'angular2/core';

import { Navbar } from './navbar/navbar';
import { Content } from './content/content';
import { Footer } from './footer/footer';


@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [Navbar, Content, Footer]
})

export class AppComponent {
    
}
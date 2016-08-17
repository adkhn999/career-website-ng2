import { Component } from 'angular2/core';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.html'
})

export class Navbar {
    menuItems: string[] = ['Home', 'Services', 'Help Articles', 'Feedback', 'Contact Us']
}

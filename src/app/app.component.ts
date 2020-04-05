import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpService } from "./http.service";

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="let user of users">
                <p>User name: {{user?.name}}</p>
                <p>User age: {{user?.age}}</p>
            </li>
        </ul>
    `,
    providers: [ HttpService ],
})

export class AppComponent implements OnInit {

    users: User[] = [];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.httpService.getUsers().subscribe(data => this.users = data);
    }
}

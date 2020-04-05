import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { HttpService } from "./http.service";

@Component({
    selector: 'my-app1',
    template: `
        <div>
            <p>User name: {{user?.name}}</p>
            <p>User age: {{user?.age}}</p>
        </div>
    `,
    providers: [ HttpService ],
})

export class AppComponent1 implements OnInit {

    user: User;

    constructor(private http: HttpClient) { }

    // We gets data from service
    ngOnInit() {
        this.http.get('assets/user.json').subscribe((data: User) => this.user = data);
    }
}

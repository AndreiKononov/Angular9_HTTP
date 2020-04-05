import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getUsers() : Observable<User[]> {
        return this.http.get('assets/userss.json')
            .pipe(map(data => {
                let userList = data["userList"];
                return userList.map(function(user: any) {
                    return {
                        name: user.userName,
                        age: user.userAge
                    };
                });
            }),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
            }))
    };
}

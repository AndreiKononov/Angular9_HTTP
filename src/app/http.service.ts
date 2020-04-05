import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    postData(user: User) {
        // const body = {
        //     name: user.name,
        //     age: user.age
        // };
        // return this.http.post('http://localhost:3000/postuser', body);

        // return this.http.post('http://localhost:3000/postuser', user);

        const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
        return this.http.post('http://localhost:3000/postuser', user, {headers: myHeaders});
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of} from 'rxjs';
//import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  	login(data): Observable<any> {
		if(!localStorage.getItem('users')) {
			localStorage.setItem('users', '[]');
		}

		let tempUsers = JSON.parse(localStorage.getItem('users'));
		if(tempUsers) {
			// data.id = tempUsers.length+1;
			tempUsers.push(data);
  			localStorage.setItem('users', JSON.stringify(tempUsers));
		}
		return of(data);

        /*return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify(user));

                }

                return user;
            });*/
    }

    update(data, id): Observable<any> {
		
		let tempUsers = JSON.parse(localStorage.getItem('users'));
		if(tempUsers) {
			// data.id = tempUsers.length+1;
			tempUsers[id] = data;
  			localStorage.setItem('users', JSON.stringify(tempUsers));
		}
		return of(data);

        
    }
}

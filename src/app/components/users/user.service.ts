import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';




@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {
      console.log('Data service listo')
  }

    getQuery(query: string) {
        const url = `https://jsonplaceholder.typicode.com/${query}`;
        // const headers = new HttpHeaders({
        //     "x-rapidapi-host": "soroush.p.rapidapi.com",
        //     "x-rapidapi-key": "e8b2935634msh4d62797bd8f9a9ap10abd3jsndd57f828d112"
        // });
        return this.http.get(url);
    }
   
    getUsers(){
        return this.getQuery('users')
    }

    crateUser(user:User) {
        return this.http.post('https://jsonplaceholder.typicode.com/users',
        {
            body: JSON.stringify({
                name: user.name,          
            }),
        })
    }
    

 
}




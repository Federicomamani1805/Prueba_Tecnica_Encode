import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypicodeholderAdd } from '../Interfaces/typicodeholder-interfaces';


@Injectable({
  providedIn: 'root'
})
export class ServiceUserService{
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<TypicodeholderAdd[]> {
    return this.http.get<TypicodeholderAdd[]>(this.apiUrl);
  }
}




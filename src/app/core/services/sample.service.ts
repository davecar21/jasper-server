import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic ' + btoa('jasperadmin:jasperadmin'),
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'X-REMOTE-DOMAIN': '1',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  // get service
  sampleGet() {
    return this.http.get(environment.categoriesUrl, httpOptions)
  }

  // post service
  samplePOST(body) {
    return this.http.post(environment.addCategoriesUrl, body ,httpOptions)
  }
}

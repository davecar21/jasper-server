import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic amFzcGVyYWRtaW46amFzcGVyYWRtaW4=',
    'X-REMOTE-DOMAIN': '1'
  })
};

const baseUrl = 'http://localhost:8080/jasperserver';
const apiUrl = '/rest_v2/resources?expanded=true&type=folder&folderUri=/reports';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  sampleGet() {
    return this.http.get(baseUrl + apiUrl, httpOptions)
  }
}

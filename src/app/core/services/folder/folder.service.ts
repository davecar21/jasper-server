import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class FolderService {

  constructor(private http: HttpClient) { }

  getFolders(): Observable<any> {
      return this.http.get(environment.categoriesUrl);
  }

  getSubfolder(category): Observable<any>{
    return this.http.get(environment.apiUrl2+"subcategories/"+category);
  }

  createFolder(body : any) {

    return this.http.post(environment.addCategoriesUrl, body)
  }
}

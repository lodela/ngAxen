import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public path: string = window.location.href
  public sctn: number = this.path.lastIndexOf("/");
  public appPath: string = this.path.substring(0, this.sctn);

  private contactUrl:string = `${this.appPath}/Mail.aspx`;
  private errorData:{};
  private httpOptions = {
    headers: new HttpHeaders().set('content-type', 'application/json')
  };

  constructor(private http:HttpClient){ }

  postMessage(message:Contact){
    return this.http.post<Contact>(`./Mail.aspx?name=${message.name}&companyName=${message.companyName}&email=${message.email}&phone=${message.phone}&requestInfo=${message.requestInfo}&message=${message.message}`, message).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }else{
      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`);
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  };

  GetHttpHeaders() : HttpHeaders{
    const headers = new HttpHeaders().set(
      'content-type', 'text/html'
    );
    return headers;
  }


}

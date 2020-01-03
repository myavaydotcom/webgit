import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    getData(url, data) {
        return this.http.post<any>(url, data)
            .pipe(
                catchError(error => {
                    return throwError(error)
                })
            )
    }

}
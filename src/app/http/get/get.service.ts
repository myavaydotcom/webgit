import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetService {

    constructor(private http: HttpClient) { }

    getData(url) {
        return this.http.get<any>(url)
            .pipe(
                catchError(error => {
                    return throwError(error)
                })
            )
    }

}